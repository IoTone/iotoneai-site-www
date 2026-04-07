(function() {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var GRIST_URL = 'https://iotoneinc.getgrist.com/api/docs/wzU3aNhDLNr3LyXkuHJyC6/tables/Table1/records';
  var GRIST_API_KEY = 'c904cacd439d922b48e4a9be99c0790c189bd3d1';

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Honeypot check
    var honeypot = document.getElementById('website');
    if (honeypot && honeypot.value) return;

    var statusEl = document.getElementById('form-status');
    var submitBtn = form.querySelector('input[type="submit"]');
    var successMsg = form.getAttribute('data-success-message') || 'Message sent!';
    var errorMsg = form.getAttribute('data-error-message') || 'An error occurred.';

    submitBtn.disabled = true;
    statusEl.textContent = '...';
    statusEl.className = 'form-status loading';

    var payload = {
      records: [{
        fields: {
          A: form.querySelector('#name').value,
          B: form.querySelector('#email').value,
          C: form.querySelector('#message').value,
          D: form.querySelector('input[name="subject"]').value,
          E: new Date().toISOString()
        }
      }]
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', GRIST_URL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Bearer ' + GRIST_API_KEY);

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        statusEl.textContent = successMsg;
        statusEl.className = 'form-status success';
        form.reset();
      } else {
        statusEl.textContent = errorMsg;
        statusEl.className = 'form-status error';
      }
      submitBtn.disabled = false;
    };

    xhr.onerror = function() {
      statusEl.textContent = errorMsg;
      statusEl.className = 'form-status error';
      submitBtn.disabled = false;
    };

    xhr.send(JSON.stringify(payload));
  });
})();
