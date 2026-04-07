export async function onRequestPost(context) {
  const { request, env } = context;

  const GRIST_API_KEY = env.GRIST_API_KEY;
  const GRIST_DOC_ID = env.GRIST_DOC_ID;
  const GRIST_TABLE_ID = env.GRIST_TABLE_ID;

  if (!GRIST_API_KEY || !GRIST_DOC_ID || !GRIST_TABLE_ID) {
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let data;
  try {
    data = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!data.name || !data.email || !data.message) {
    return new Response(JSON.stringify({ error: 'Missing required fields: name, email, message' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return new Response(JSON.stringify({ error: 'Invalid email address' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const gristUrl = `https://docs.getgrist.com/api/docs/${GRIST_DOC_ID}/tables/${GRIST_TABLE_ID}/records`;

  try {
    const response = await fetch(gristUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GRIST_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        records: [{
          fields: {
            Name: data.name,
            Email: data.email,
            Message: data.message,
            Subject: data.subject || 'Website Contact Form',
            Submitted: new Date().toISOString()
          }
        }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Grist API error:', response.status, errorText);
      return new Response(JSON.stringify({ error: 'Failed to submit to backend' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Network error:', err);
    return new Response(JSON.stringify({ error: 'Network error' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
