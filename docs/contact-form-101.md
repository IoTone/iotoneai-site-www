# Contact Form 101: Static Site + Grist + Cloudflare Worker

How the IoTone Japan website contact form works, why it works that way, and lessons learned from getting it running.

---

## Architecture

```
Browser (form submit)
   │
   │  POST { records: [...] }
   ▼
Cloudflare Worker (iotone-contact.dkords.workers.dev)
   │  - Adds Authorization: Bearer {GRIST_API_KEY}
   │  - Forwards request to Grist
   ▼
Grist API (iotoneinc.getgrist.com)
   │  - Writes record to Table1
   ▼
Grist Document (wzU3aNhDLNr3LyXkuHJyC6)
```

**Three components:**

1. **Static form HTML + JS** — served by Cloudflare Pages (Hugo build output)
2. **Cloudflare Worker** — proxies form submissions, holds the API key as a secret
3. **Grist document** — receives and stores submissions

---

## The Files

| File | Purpose |
|------|---------|
| `layouts/partials/contact.html` | Form HTML with honeypot field, status div, i18n attributes |
| `assets/js/contact-form.js` | Submit handler, POSTs JSON to the Worker URL |
| `static/_headers` | CSP allows `connect-src` to the Worker domain |
| (External) Cloudflare Worker | Code stored in Cloudflare dashboard, not in git |
| (External) Grist document | Schema lives in Grist, accessed via API key |

The Worker source code is **not** committed to this repo. It's edited in the Cloudflare dashboard at Workers & Pages > iotone-contact.

---

## Worker Code (for reference)

Lives at `https://iotone-contact.dkords.workers.dev`:

```javascript
export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': 'https://www.iotoneai.site',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400'
        }
      });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }
    const data = await request.json();
    const resp = await fetch(
      'https://iotoneinc.getgrist.com/api/docs/wzU3aNhDLNr3LyXkuHJyC6/tables/Table1/records',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + env.GRIST_API_KEY
        },
        body: JSON.stringify(data)
      }
    );
    return new Response(await resp.text(), {
      status: resp.status,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://www.iotoneai.site'
      }
    });
  }
};
```

The Worker has one secret variable: `GRIST_API_KEY`.

---

## Grist Setup

- **Instance:** `iotoneinc.getgrist.com` (team subdomain, not `docs.getgrist.com`)
- **Document ID:** `wzU3aNhDLNr3LyXkuHJyC6` (the full ID from `/api/docs/{id}/...`)
- **Table:** `Table1` (default name; we kept it as-is)
- **Columns:** `A`, `B`, `C`, `D`, `E` — mapped to Name, Email, Message, Subject, Submitted

The JS payload format is what Grist's REST API expects:

```json
{
  "records": [
    { "fields": { "A": "Name", "B": "email", "C": "message", "D": "subject", "E": "ISO timestamp" } }
  ]
}
```

---

## Lessons Learned (the hard way)

### 1. The Grist domain is your team subdomain, not `docs.getgrist.com`

The docs say `https://docs.getgrist.com/api/...`, but if you're on a Grist team plan, your actual API endpoint is `https://yourteam.getgrist.com/api/...`. The doc ID is the same, but requests to `docs.getgrist.com` return `{"error":"document not found"}`.

**Find the right URL:** look at your browser's address bar when viewing the document. Whatever subdomain is there is also your API host.

### 2. The doc ID in the URL bar may be truncated

Visiting a Grist doc may show `https://team.getgrist.com/wzU3aNhDLNr3/...` in the URL, but the **API doc ID** is longer: `wzU3aNhDLNr3LyXkuHJyC6`. To get the real ID, hit the `/api/docs` endpoint with your key:

```
curl https://iotoneinc.getgrist.com/api/docs/wzU3aNhDLNr3LyXkuHJyC6/tables \
  -H "Authorization: Bearer YOUR_KEY"
```

The first ID won't work; the long one will.

### 3. Browsers cannot POST to Grist directly because of CORS

Grist's CORS preflight allows `Content-Type` and `X-Requested-With` but **not `Authorization`**. The browser sends an OPTIONS preflight, sees that `Authorization` isn't in the allowed headers, and blocks the actual POST.

You'll see a 200 in the network tab for the OPTIONS, then the form fails — this looks like an error in the browser even though Grist's own response is fine. There's no clean way to send the API key from the browser to Grist.

**Conclusion:** you need a server-side proxy. We use a Cloudflare Worker.

### 4. Cloudflare Pages Functions only work if Cloudflare runs the build

If you commit `public/` to git and Cloudflare Pages serves it directly without running `hugo`, the `functions/` directory at the repo root is **never detected**. Requests to `/api/contact` return 502 because there's no handler.

Two options:

- **Let Cloudflare build** (set build command `hugo`, output `public`, stop committing `public/`) — Functions will auto-detect.
- **Use a standalone Cloudflare Worker** (created via dashboard, not Pages Functions) — works regardless of how the site is deployed.

We went with a standalone Worker because we're committing `public/` directly.

### 5. CSP `connect-src` must list every domain the page talks to

If the form POSTs to a Worker, add the Worker URL to `connect-src` in `static/_headers`:

```
Content-Security-Policy: ... connect-src 'self' https://iotone-contact.dkords.workers.dev; ...
```

If `connect-src` is missing the Worker domain, the browser blocks the request silently.

### 6. CSP `frame-src` is needed for embedded YouTube videos

Articles using `{{< youtube ... >}}` embed an iframe to `youtube.com`. Without `frame-src https://www.youtube.com`, the videos don't render.

### 7. Static assets accumulate in `public/`

Hugo fingerprints minified bundles (e.g., `bundle.min.<hash>.js`). Each build produces a new file with a new hash, but old hashed files remain in `public/`. Over time you accumulate stale bundles. They're harmless (the HTML only points at the latest), but you can clean them with `rm -rf public/ && hugo` periodically.

### 8. Honeypot field for spam protection

The form has a hidden `<input name="website">` styled with `.ohnohoney { opacity: 0; position: absolute; ... }`. Bots fill in every field; humans don't see it. The submit handler checks if it's non-empty and silently aborts.

### 9. Status messages need `aria-live="polite"`

The `<div id="form-status" aria-live="polite">` ensures screen readers announce success/error. Without `aria-live`, the visual change is invisible to assistive tech.

### 10. Always rotate API keys that touched a chat or repo

Anything pasted into a chat, committed to git, or shared via screenshot should be rotated. Even after removal, the key may be in chat history, transcripts, or git history.

---

## Testing the Form Manually

**Test the Worker directly:**

```bash
curl -X POST https://iotone-contact.dkords.workers.dev \
  -H "Content-Type: application/json" \
  -d '{"records":[{"fields":{"A":"Test","B":"test@example.com","C":"hello","D":"Test","E":"2026-04-08T00:00:00Z"}}]}'
```

Expect: `{"records":[{"id":N}]}` and a new row in Grist.

**Test Grist directly (server-side, with auth):**

```bash
curl -X POST https://iotoneinc.getgrist.com/api/docs/wzU3aNhDLNr3LyXkuHJyC6/tables/Table1/records \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_KEY" \
  -d '{"records":[{"fields":{"A":"Direct test","B":"x@x.com","C":"hi","D":"Test","E":"2026-04-08T00:00:00Z"}}]}'
```

This bypasses the Worker. If this works but the Worker test fails, the bug is in the Worker code, not in Grist.

**Test the live form:** open https://www.iotoneai.site/en/, scroll to Contact, submit. If it fails, F12 > Console for the actual error.

---

## Common Failure Modes

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Form shows error, but Grist row appears | Worker returns non-2xx (e.g., text/plain success) | Check Worker response status; ensure 2xx |
| 502 Bad Gateway from Cloudflare | Worker URL wrong, or Pages Functions not deployed | Verify Worker is published and CSP allows it |
| `{"error":"document not found"}` | Wrong Grist domain or truncated doc ID | Use full team subdomain + full doc ID |
| `{"error":"Table not found"}` | Wrong table name | Use exact table name from Grist API (default: `Table1`) |
| `{"error":"No view access"}` | API key missing or invalid | Verify key in Worker secret variable |
| Browser console: CORS error | `connect-src` missing Worker domain, or Worker not sending CORS headers | Update CSP and Worker OPTIONS handler |
| Form submits but no Grist row | Old cached JS bundle | Verify the deployed bundle references the Worker URL, not Grist directly |

---

## When the Worker Code Changes

The Worker is edited in the Cloudflare dashboard. There's no git history for it (unless you copy it into the repo manually). **If you change the Worker, paste the updated source into this doc** so future-you remembers what's running.
