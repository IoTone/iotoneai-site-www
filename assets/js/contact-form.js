(function() {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Honeypot check
    var honeypot = document.getElementById('website');
    if (honeypot && honeypot.value) return;

    var statusEl = document.getElementById('form-status');
    var submitBtn = form.querySelector('input[type="submit"]');
    var endpoint = form.getAttribute('data-endpoint');
    var successMsg = form.getAttribute('data-success-message') || 'Message sent!';
    var errorMsg = form.getAttribute('data-error-message') || 'An error occurred.';

    submitBtn.disabled = true;
    statusEl.textContent = '...';
    statusEl.className = 'form-status loading';

    var data = {
      name: form.querySelector('#name').value,
      email: form.querySelector('#email').value,
      message: form.querySelector('#message').value,
      subject: form.querySelector('input[name="subject"]').value
    };

    var xhr = new XMLHttpRequest();
    xhr.open('POST', endpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

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

    xhr.send(JSON.stringify(data));
  });
})();
