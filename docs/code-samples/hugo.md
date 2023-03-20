---
sidebar_position: 1
description: Using Form-Data in a plain HTML form 
---

# Hugo

## How to create file-upload forms on Hugo, and how to attach the file to an email

### Static sites, SSG and Hugo: what are they?

**Static sites** are websites that do not need a backend in order to render. They are consisted of HTML, CSS and JS files, all rendered in the browser, and all look the same to all visitors. This has many advantages including faster rendering and higher security against hacking attacks.

**Static Site Generators (SSGs)** are build tools that take templates and content, and generate the files needed to render static sites.

[Hugo](https://gohugo.io/) is one of the most popular Static Site Generators.

Together with the above-mentioned advantages, some challenges are introduced. Static sites do not have a server that can handle all kind of operations that are normally carried in the backend, such as handling form submissions. A solution to this is to use services that specialize in specific tasks.

[Form-Data](https://form-data.com/) is a form backend service. It handles everything that happens after a user submits your form, and you don't have to write any code. Here's what it can do for you:

* Spam filtering
* Send email notifications
* Send auto-reply emails to the user
* Integrate with 3rd party services via webhooks or Zapier
* **Get uploaded files** ← This is what you were looking for

### In this article you will learn

1. [How to create a Hugo site](#1-how-to-create-a-hugo-site)
2. [How to create a shortcode in Hugo that renders a form](#2-how-to-create-a-shortcode-in-hugo-that-renders-a-form-with-file-upload)
3. [How to create a form-endpoint using Form-Data](#3-how-to-create-a-form-endpoint-using-form-data)
4. [How to get email notification every time someone submits the form in Hugo site](#4-how-to-get-email-notification-every-time-someone-submits-the-form-in-hugo-site)
5. [How to connect the form-endpoint to the form in Hugo](#5-how-to-connect-the-form-endpoint-to-the-form-in-hugo)
                       
:::info Note
You can set up your form to send you email notifications with Form-Data's free plan. However, to use file-upload you will need a premium plan, starting at $6.8/month. See pricing for more details.
:::

Ready? Let's get started...

### 1. How to create a Hugo site

#### Step 1: Install Hugo

:::info Note
Brew is a package manager for Mac. If you're using Windows, check out [these](https://gohugo.io/getting-started/installing) instructions
:::

Run the following command to install Hugo:

```bash
brew install hugo
```

#### Step 2: Create a Hugo site

Run the following command, replace `my-site` with name of your choice:
```bash
hugo new site my-site
```
This will create a new Hugo site in a folder named `my-site`.

#### Step 3: Add a theme

You can find many beautiful themes at [themes.gohugo.io](https://themes.gohugo.io/). For the purpose of this tutorial we'll go with the [Ananke](https://themes.gohugo.io/gohugo-theme-ananke/) theme.

Download the theme from GitHub and add it to your site’s themes directory:

```bash
cd my-site
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke
```

Next, add the theme to your site's configuration:
```bash
echo theme = \"ananke\" >> config.toml
```

#### Step 4: Add content

You are now ready to add content to your site. Hugo is using markdown files to manage its content. You can manually create markdown files in `content/<CATEGORY>/<FILE>.md`. Or, you can use `hugo new` command to get a file created with necessary metadata

Run the following to create a new post:
```bash
hugo new posts/my-first-post.md
```

A new file `content/posts/my-first-post.md` will be created for you. It will look like this:
```bash
---
title: "My First Post"
date: 2022-09-20T09:32:08+03:00
draft: true
---
```
Edit the file and add some content below the head section.

:::info Note 
Drafts do not get deployed. Once your post is ready, update the header of the post to draft: false
:::

#### Step 5: Start the Hugo server

You are now ready to run Hugo locally and see your site. Run this command:

```bash
hugo server -D
```
The `-D` flag runs Hugo with drafts enabled. Hugo will start with a hot-reloading dev environment, which means that every change you make in your files will immediately reflect in the browser. Open your browser at `http://localhost:1313` and you should see something like this:

:::success Congratulations! 
You have successfully created a Hugo site!
:::

### 2. How to create a shortcode in Hugo that renders a form with file-upload

In Hugo, Shortcodes are small component templates that can be reused in your .md files.

#### Step 1: Update `form-contact.html`

In the Ananke theme that we were using above, there is a shortcode for a contact form in the file `themes/ananke/layouts/shortcodes/form-contact.html`. In the same folder you can place any shortcode in HTML format. In this tutorial, we will simply update the existing shortcode.

The form code already has name, email and message fields. We will just add file-upload field to it.

Edit the file, and add the following at the bottom of the form, just before the submit button

```html
<input role="form-data-uploader">
```
Don't worry about formatting this field, it will be replaced with the upload button anyway

#### Step 2: Add CSS file

1. Edit the file themes/ananke/layouts/partials/head-additions.html
2. Add the following line:
   ```html 
   <link
     href="https://static.form-data.com/css/form-data-uploader.v1.css"
   rel="stylesheet" >
   ```
   
#### Step 3: Add script file

1. Edit the file `themes/ananke/layouts/partials/site-footer.html`
2. Add the following line, at the bootom of the file, after the closing tag `</footer>`:
   ```html
   <script
     src="https://static.form-data.com/js/form-data-uploader.v1.js">
   </script>
   ```
   
:::tip
We will get back to using the shortcode we just created, after we will create the form-handler in form-data.com
:::

### 3. How to create a form-endpoint using Form-Data

#### Step 1: Login to Form-Data
Go to `https://app.form-data.com` and login or signup

#### Step 2: Click "new form" button

#### Step 3: Name your form
Give your form a meaningful name, and save by hitting Enter or the green check

Now you have an endpoint that you can connect to your site. Continue reading to see how to connect it.

### 4. How to get email notification every time someone submits the form in Hugo site

#### Step 1: Configure email notifications

Click the _Email_ menu on the left. Enable email notifications toggle as seen below, and configure how you want to receive email notifications for form submissions:

* **Send notifications to** - Enter the email address where you want to get the form data. You can enter multiple email addresses separated by comma or new line
* **Sender's name** - this is the name that will appear in the from field of the email
* **Subject** - this is the email's subject line. You can embed values from the submitted data by placing the field name in double curly brackets. E.g. A new message from {{email}}
  It is highly recommended to embed a field, because some email clients, such as gmail, are grouping all emails with same sender and subject into one line or thread, making it hard to manage multiple emails
* **Reply to visitor's address** - turn this on if you want to be able to reply to the email in order to get back to your user who filled-in the form
* **Reply-to address** - if you haven't used the previous option, you can set here an email address that will be used as reply-to address
* **Files link expiry** - if you have a premium plan and your form allows file-upload, you can use this option to decide for how long file-download links in the email will be valid
       
#### Step 2: Test

Click **Test & Deploy** button on the left menu, and then **Test form handler**. Fill the form that appears in the dialog and submit. Now go check your email client - you should see an email notification with the data that you have submitted. If you don't get the email:

* Check your spam folder
* Check _Promotions_ tab if you're in gmail
* Try waiting couple of minutes. Sometimes emails are slightly delayed
 
#### Step 3: Deploy

Close the test dialog, and copy the form-handler URL. You will need it in the next step.

### 5. How to connect the form-endpoint to the form in Hugo

Now let's put everything together

#### Step 1: create a contact page

Back in your Hugo project, create a new file: `content/contact.md` and paste the following code into it:

```markdown
---
title: Contact
omit_header_text: true
description: Let's talk
type: page
menu: main

---
The form below uses a shortcode to render a form
that will use [Form-Data.com](https://form-data.com) as its backend.

{{<form-contact action="FORM-DATA-URL"  >}}
```
Replace _FORM-DATA-URL_ with the URL that you copied in the previous step

#### Step 2: Test
Assuming your Hugo server still runs on port 1313, open your browser and navigate to `localhost:1313/contact`. You should see a page like this:

You can now test the form. Everything should be up and running.

:::info Note 
As mentioned above, file upload requires Form-Data premium plan in order to work. Everything else in this tutorial, including email notifications, can be set up for free. Check out the pricing page for more details.
::: 

### That's it!

You now have a form-handler that accepts submissions from your web form in Hugo, and sends you email notification with links to uploaded files whenever a user submits the form
