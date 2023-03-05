---
sidebar_position: 4
---

# Redirect to thank-you page

There are 2 ways in which you can submit a form:
* As a `POST` request that changes the browser's address
* As an AJAX request (`fetch` or `XHR`) that happens asynchronously

If you are using the first method, you probably want to direct the user to some page after she has submitted the form. This page is referred to as the _Thank you page_. 


To enable this option:
1. Make sure that your form is using `post` method. This is as simple as adding `method="post"` attribute to your form.
  ```html
  <form id="contact" action="https://api.form-data.com/f/xxx" method="post">
    ...
  </form>
  ```
2. Then, in head over to Form-Data and click the _Settings_ menu ⓵.
3. Scroll down to _Thank you page URL (Redirect)_
4. Provide the full URL to which you want to redirect your users ⓶. Don't forget to save.

:::caution Note
Redirect only work if your form is using `method="post"`, as explained above. If you are using AJAX, this setting is simply ignored.
:::

### Passing data from the submission
If your thank-you page has dynamic parts that use content from the form-submission itself, you will have to pass that data.

For example, you might want to write a message similar to this:

> Thank you **Sarah** for your inquiry. We will get back to you to your email **sarahg37@gmail.com** within a few hours 


The name and the email of the user are taken from the form-submission. 

To achieve this, turn on the toggle _Send data as query params_ ⓷. 
This will make Form-Data append query params to your thank-you page URL, with the submitted data. You can then read those query params using Javascript and present a dynamic message to the user, as shown above.

![Redirect to thank-you page](/img/redirect-to-thankyou.png)

