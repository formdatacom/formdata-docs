---
sidebar_position: 1
description: Send email notification every time a form is being submitted 
---

# Email notifications

Use this feature to notify anyone by email, every time the form is being submitted. 

To enable notifications:
1. Navigate to _Email_ menu ⓵
2. Turn on the _Send notifications_ toggle ⓶
3. Add the email address to which you'd like to send notifications ⓷

:::tip
You can set multiple email addresses by using comma or new-line (enter)
:::

![email notifiations](/img/email/email-notification.png)

You can further customize the notification emails using the following settings:

#### Sender's name
The name that will appear on the _From_ field of the emails
:::info Note
You can only change the _Name_ of the _From_ field. You can not change the actual email address from which it is being sent.
:::

#### Subject
The _Subject_ of the notification emails. 
You can embed any field from the submission into the subject line using double-curly-brackets. E.g. `New submission from {{email}}`
:::tip
Gmail and other email clients are grouping different emails with the same subject into one thread. To make sure each email notification appears as a separate thread, use a unique value from the submission, such as `{{name}}` or `{{email}}`, in your subject line. 
:::

#### Reply to visitor's address
Turn this toggle on if you want the email's _Reply_ to reach the user who submitted the form

#### Reply-to address
You can set an email address that will be used when the notification email will be replied

#### Hide "View in Dashboard" button
Notification emails contain a button that takes you to the inbox in Form-Data web application. If the recipients of the email do not have access to the web application, you can hide that button from the email.

#### Files link expiry
Notification emails have links to download users' uploaded files.
By default, links are set to expire after 90 days.
You change this to a different time, or completely turn off link expiry by turning the toggle off.

:::caution 
File download links contain a security token and therefore can be used by anyone who gets them in order to download the files. 
It is highly recommended setting this to a short period of time in order to reduce the risk of the data being leaked
:::

:::info Note
The maximum number of days that you can set is defined by [_Files retention_](../data-retention#files-retention) setting
