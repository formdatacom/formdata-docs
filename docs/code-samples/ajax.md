---
sidebar_position: 1
description: Using Form-Data in a plain HTML form 
---

# AJAX

By using AJAX, you can intercept the form-submission event, send the request to Form-Data using code, and then handle failure or success responses by showing a proper message to your user.

Below is a simple example for handling form submission using AJAX.

```html
<h6>Contact form</h6>
<form id="contact-form" action="https://api.form-data.com/f/xxxxxx"
  method="post"
  target="_blank">
  <div>
    <label for="email">Email</label>
    <input name="email" type="email" />
  </div>
  <div>
    <label for="name">Name</label>
    <input name="name" type="text" />
  </div>
  <div>
    <label for="message">Message</label>
    <textarea name="message" rows="4"></textarea>
  </div>
  <button type="submit">Submit</button>
</form>

<script>
const form = document.getElementById("contact-form");
form.addEventListener("submit", async event => {
  event.preventDefault();  // prevent the browser from redirecting to the form's action url
  const url = form.action;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries())
  // Run any form validation code here
  const res = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  if (res.ok) {
      alert('Form was submitted successfully')
  } else {
      alert('We could not accept your submission. Server returned ' + res.status)
  }
  // if you want to see the body use:
  // const body = await res.json()
})

</script>
```

A few notes:
1. The form's `action` property is set to the one that you get from Form-Data.
2. The script can be placed anywhere after the form is already rendered.
