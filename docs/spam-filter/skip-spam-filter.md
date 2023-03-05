---
sidebar_position: 6
description: Prevent submissions from other domains 
---

# Skip spam filtering

Even though this option sounds counterintuitive, it does have 2 useful use cases:
1. **Testing and troubleshooting** - you may want to temporarily skip spam filtering in order to check all the other features without worrying that spam filter is interrupting your test.
2. **Headless forms** - Form handler endpoints are useful for more than just web forms. You can use them from within your product in order send email notifications, send webhooks, etc. 
   For example, in Form-Data, we use this technique ourselves to send each user a welcome email, and to notify our team when a user signs up. 
   Because in many cases these integrations are triggered from a server code, they might be considered as a bot by our spam filter. To avoid that, use the bypass option.

To use this option:
1. Navigate to the _Spam filter_ menu ⓵
2. Scroll down to _Bypass spam check_ and turn the toggle on ⓶
3. Choose some secret phrase ⓷. Make sure that it is not trivial. Click the green checkmark to save.
4. In your form submission, add a field named `_bypass` and set its value to the secret that you have chosen.

:::caution Important
This feature is not intended to be used in your public forms which are available to your users. Don't include a hidden field with the secret that your users will be able to see by using dev tools. 
:::

![Bypass spam check](/img/spam-filtering/bypass.png)
