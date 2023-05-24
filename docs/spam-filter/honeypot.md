---
sidebar_position: 4
description: Detect spam bots by using honeypot fields 
---

# Hoenypot fields

The honeypot technique is a simple and effective way to protect your web forms from spam and automated attacks.

To use the this technique, you will have add a hidden field to your web form that is invisible to human users but visible to bots. This field is designed to attract bots to fill it out, while human users are unaware of its existence and leave it blank.

When a bot fills out the honeypot field, it triggers the spam filter.

:::tip
This technique doesn't cause any inconvenience for your real users, as they are unaware of the hidden field.
:::

To enable this option:
1. In your web form, add a hidden field and give it a name. Use some common forms field name, and avoid words like `trap`, `honeypot` and so on, which might be identified by sophisticated bots. Make sure that the field is hidden using css, and **not** using `type="hidden"`. Also add `tabindex` and `autocomplete="off"` in order to make sure that the field is not being filled by the browser itself. E.g.
  ```html
  <input type="text"
         name="xx_password"
         style="display:none !important"
         tabindex="-1"
         autocomplete="off">
  ```
2. In your form settings, click the _Spam filter_ ⓵ menu
3. Scroll down to _Honeypot field_ section, and set the name of the hidden field that you have created . Don't forget to save
4. That's it. Bots that fill this field will be identified and marked as spam 

![Filter by countries](/img/spam-filtering/honeypot.png)
