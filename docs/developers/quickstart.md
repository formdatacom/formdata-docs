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

## 2. Create a new `.fd` file

In your project folder, create a file called `contact.fd`:

```text
type form
name Contact Form

type: text
name: full_name
label: Full Name
placeholder: Enter your full name
validation: required

type: email
name: email
label: Email address
placeholder: you@example.com
validation: required
```

## 3. Preview your form locally

```bash
fd preview --name contact
```

Edit your form file until you're happy with the result. See detailed instructions in [fd files](fd-files.md).

## 4. Deploy the form to production

```bash
fd deploy --name contact --env default
```

This publishes your form and returns a public form URL like this one:
```url
https://forms.form-data.com/qwe123
```
Open this link in your browser. You now have a functioning form in its own URL that you can share with your users! 

## 5. Embed the form into your website (optional)

If you prefer to embed the form into your website, rather than sharing it as a standalone form, you can do that in 4 different ways:
* **Inline** - embed the form seamlessly into your website
* **Popup** - the form will pop in the center of the screen
* **Side panel**  - the form will slide in from the side of the screen
* **Floating** - the form will open as a floating widget that can be used while the content on the page is still accessible

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

