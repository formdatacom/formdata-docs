---
sidebar_position: 3
---

# Basic settings

Under the _Settings_ menu of your form you will find some basic settings. Let's go through them:

### Form name

The _Form name_ lets you give a custom name to a form handler. This name is only visible to you and helps you remember what the form is for. You can change the name anytime without affecting anything.

### Email field name

This setting is used by both the [spam filter](./spam-filter/auto-filtering.md) and the [auto-respond](./email/auto-response.md) feature, and therefore it is important to make sure that it's set correctly.

You need to provide the `name` of the input field in your HTML form that is used to collect the users' email address.

For example, in the following form, the field name is `email`:
```html
<form id="contact" action="https://api.form-data.com/f/xxx" method="post">
  <input placeholder="Your name" type="text" name="name" required >
  <input placeholder="Your Email Address" type="email" name="email" required>
  <textarea placeholder="Type your Message Here...." name="message" required></textarea>
  <button name="submit" type="submit">Submit</button>
</form>
```


