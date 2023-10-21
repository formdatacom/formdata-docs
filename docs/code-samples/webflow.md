---
sidebar_position: 1
description: Using Form-Data on a Webflow site
---

# Webflow

Webflow is a great platform for building websites. One of its nice features is that you can export your site's html, so you can host it anywhere without paying for Webflow hosting.

But once you export your Webflow site, how can you handle form submissions?

[Form-Data.com](https://form-data.com) provides a secure service that accepts your form submissions, filters spam, notify you by email, sends a templated email to your client, and integrates with any CRM or other tool that you are using through Zapier.

In order to process your submissions through form-data follow these steps:

### 1. Login to Form-Data

Go to [https://app.form-data.com](https://app.form-data.com) and login or signup

### 2. Click "New Form" button

![New form button](/img/webflow/02-new-form.png)

### 3. Name your form

Give your form a meaningful name, and save by hitting Enter or the green check

![Name your form](/img/webflow/03-form-name.png)

### 4. Set email notifications

1. Click the _Email_ menu
2. Enable the _Send notifications_ toggle
3. Enter the email address to which you want the notifications to be sent. You can can enter multiple addresses by using comma or new-line
4. Click the green checkmark to save.

![Email notification](/img/webflow/04-email-notification.png)

### 5. Time to deploy

1. Click the _Deploy_ menu
2. Copy the form's URL

![Deploy url](/img/webflow/05-deploy.png)

### 6. Configure Webflow

In your Webflow editor -

1. Select your form
2. Click the Settings icon
3. In the form's _Action_ field paste the form's URL that you've copied
4. Make sure that the _Method_ is set to _POST_
5. _Publish_



![Configure webflow](/img/webflow/06-webflow.png)

### 7. Sit back and relax

You're good to go! Submissions made to your Webflow site will now be sent to your email, and also appear in your Form-Data Inbox.

Take the time to explore all other options in Form-Data."
