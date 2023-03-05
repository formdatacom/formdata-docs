---
sidebar_position: 5
description: Prevent submissions from other domains 
---

# Validate referrer

Validating the referrer allows you to make sure that your form endpoint is only used in your own domain. In fact, this is useful to prevent *human* attacks more than bot attacks. The reason is that bots can easily fake the referrer, while for human who use a browser - the browser is automatically sending the referrer.

Note that some browsers are not sending the `referer` header (typo is in HTTP protocol) because it can be considered a privacy violation. When a `referer` header is not-sent, we allow the submission.
It means that this option is protecting against anyone who is trying to place your form in a different domain.

:::tip
We automatically allow `localhost` domain in order to allow developers to work locally
:::

To enable this option:
1. In your form settings, click the _Spam filter_ ⓵ menu
2. Scroll down to _Verify referrer_ section, and set the name of the domain that you'd like to allow. You can add multiple domains separated with comma. Don't forget to save.

![Filter by countries](/img/spam-filtering/referrer.png)
