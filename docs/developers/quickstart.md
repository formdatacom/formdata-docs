---
sidebar_position: 2
description: Quick start guide
---

# Quickstart guide

Let’s walk through creating and deploying your first form using the FormData CLI.

## 1. Install the CLI

```bash
npm install -g @form-data/cli
```

## 2. Login to Form-Data

You will have to have an account in [form-data.com](https://app2.form-data.com).
If you didn't create one, do so now, it's quick and free.
Once you have an account, in your terminal run this:

```bash
fd login
```

A browser window will pop-up, and ask you to choose a workspace. Do so, and click authorize. You can then close the browser's window.

A token is now stored in your user's folder.

## 3. Initialize your project

Assuming that you have an existing project to which you want to add forms, run this in your project folder: 

```bash
fd init
```

Alternatively, if you want to create a completely new project just for your forms, you can run this:

```bash
npm create @formdata/project@latest my-project
cd my-project
```

Now you will find `formdata.config.json` in the root of your project's folder, and an empty `forms` folder. This is where your `.fd` form files will be

## 2. Create a new form definition file (`.fd`)

```bash
fd form create --name my-contact-form --template contact
```

This command creates a new **form definition file** (`my-contact-form.fd`) in your project. A form definition is a local file that describes your form’s structure, fields, and design.

Before it can receive submissions, this form definition needs to be linked to a workspace form in your [Form-Data dashboard](https://app2.form-data.com). Your workspace form is where submission handling is configured: email notifications, integrations, spam filtering, and more.

When you run this command, you’ll be asked how to link your new form definition to your Form-Data workspace:
```text
? How would you like to link this form definition (my-contact-form.fd) to your Form-Data workspace
❯ Create a new form in dashboard when deployed
  Link to an existing form in dashboard
```
* **Create a new form in dashboard when deployed** - A new workspace form will be created and linked to `my-contact-form.fd`. This is the most common option for new projects.

* **Link to an existing form in dashboard** - Choose this if you’ve already created a form in your Form-Data dashboard and want to link this `.fd` file to it.

**Command options:**
* `template` - there are currently 3 templates that you can choose from: `contact`, `registration` and `survey`. But don't worry about it, you will be able to change that later if you want. If you omit the `template` option, `contact` will be the default.
* `name` - used for defining the file name, and referencing this form in future `fd` commands, such as `deploy`. If you omit the `name` option, you will be asked what name to use.

After running this command, a new file called `my-contact-form.fd` will be created in your `forms` folder. 

## 3. Preview and edit your form locally

If you're comfortable editing `.fd` files you can just do that in your IDE. See detailed instructions in [fd files](fd-files.md).
We also provide an **in-browser editor** with auto-complete, syntax highlighting, and AI assistant that can generate complete forms.
To use it, type in your terminal:

```bash
fd preview --name my-contact-form
```

The online editor is in sync with your local file - changes that you make in your IDE will be instantly reflected in the editor, and changes that you make in the editor will be reflected in your local files once you click "Save".

## 4. Deploy the form to production

The next step is deploying your form. Run this command:

```bash
fd deploy --name contact
```

This will take your `.fd` file and publish it to production. After this step, you will have a public URL that you can send to your users, or embed the form into your website. The URL looks like this one:

```url
https://forms.form-data.com/qwe123
```


## 5. Embed the form into your website (optional)

If you prefer to embed the form into your website, rather than sharing it as a standalone form, you can do that in 4 different ways:
* **Inline** - embed the form seamlessly into your website
* **Popup** - the form will pop in the center of the screen
* **Side panel**  - the form will slide in from the side of the screen
* **Floating** - the form will open as a floating widget that can be used while the page is still accessible

For the purpose of this quickstart guide we'll use the side panel option. 
Open your `index.html` file, or equivalent, and add this code snippet into the `<head>` section, or just before the closing `</body>` tag.  
Replace `YOUR_FORM_URL` with the URL that you got in the previous step, and keep the `/embed` at the end.

```javascript
<script>
      (function (j,o,y,f,O,r,m) {
        j[f] = j[f] || function () { (j[f].q = j[f].q || []).push(arguments) };
        r = o.createElement(y), m = o.getElementsByTagName(y)[0];
        r.id = f; r.src = O; r.async = 1; m.parentNode.insertBefore(r, m);
      }(window, document, 'script', 'fd', 'https://embed.jolly.tools/widget.js'));
      fd('init', {});
      fd('render', {
        url: '<YOUR_FORM_URL>/embed',
        mode: 'sidebar',
        trigger: 'fab',
        params: {},
        sidebar: {
          side: 'right',
          overlay: false,
          width: '360px'
        },
        fab: {
          color: '#ffffff',
          zIndex: '99999',
          background: 'rgb(240, 250, 240)',
          width: '80px',
          onOpenMode: 'hide',
          side: 'right',
          icon: 'hand-up-help',
          iconSize: '100%',
          iconOnly: 'true'
        },
      })
    </script>
```

You should now see a floating button in the bottom-right corner of your website. When you click it, you should see your form slides-in from the right.

:::info Note
See all the embed options [here](embed.md)
:::

