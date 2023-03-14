---
sidebar_position: 2
description: Send auto-response emails to your users after they have submitted the form
---

# Auto response emails
Use this feature to email to your users after they have submitted the form.
This is a great way to let your users know that you have received their submission, and set expectations for when you are going to get back to them. 

To enable auto-responses:
1. Go to the _Email_ menu ⓵
2. Scroll down to _Auto-respond to users_, and turn the toggle _Send auto responses_ on ⓶

:::info Important
Emails will be sent to the email address that the user have provided in the form. Make sure that the name of the email field is properly configured in the [email field name](../basic-settings.md#email-field-name)
:::

Make sure you further configure the rest of the settings below in order to avoid undesired results

#### Sender's name
The name that will appear in the _From_ field of the email. For example, you can write `ACME corp.` or `John @Acme corp.`
:::tip
Keep this name short because email clients may truncate it if it's too long.
:::

#### Reply-to address
Set this to the email address where users can get back to you if they reply to your email. For example, `support@acme-corp.com` or `johnd@acme-corp.com`.

#### Email subject line
This is the subject line of your email. 
:::tip
Email clients can truncate the subject if it's too long. We recommend that you use no more than 9 words and 60 characters.
:::

You can personalize the subject line by embedding values from the submitted form. To do that, place the name of the field that you want to embed inside a double-curly-brackets. For example:
```text
{{name}}, we have received your inquiry
```

#### Email body
This is the body of your email. 
It will be nicely put inside a responsive container that works well on all email clients. 
Similar to the subject line, you can also personalize the body by embedding values from the submitted form using double-curly-brackets.

Don't forget to click _Save_ once you finish writing the email.

:::tip Advanced tip
You can switch to HTML edit mode by clicking the `<>` button in the toolbar. Note that the HTML will still be embedded inside the responsive container that we provide.
Unless you have a really good reason to do so, we suggest that you stick to the formatting options available in the composer toolbar.
:::

Example:
```text
{{name}},

Thank you for contacting us. 
We will get back to you with a price quote for {{product}} within 1 business day.

Best regards,
ACME corp sales team
```

##### Preview the email
To see how the email will look, click the _Preview_ button above the body composer. 
Use the side-panel to provide mock data, so you can see how embedded values will look like. If the side panel is closed, use the hamburger menu (3 lines) at the top-right of the dialog.

![Preview email](/img/email/preview-email.png)

