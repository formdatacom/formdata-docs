---
sidebar_position: 4
title: Embedding
description: Embedding
---

# Embedding forms into your website

You can embed Form-Data forms into your website, in 4 different ways:
* **Inline** - embed the form seamlessly into your website
* **Popup** - the form will pop in the center of the screen
* **Side panel**  - the form will slide in from the side of the screen
* **Floating** - the form will open as a floating widget that can be used while the content on the page is still accessible

If your site uses Vue, React, or Svelte, you can use one the respective components available for these frameworks.  
This guide describes how to embed a form using javascript embed-tag. It also describes all the different options for embedding, which are also relevant for the framework components. 

The embed code consists of 2 parts:
* The script loader
* Rendering code

## The script loader

The script loader has to be placed **just once** in your website. It can be added into the `<head>` section, or before the closing `</body>` tag.

```html
<script>
  (function (j,o,y,e,m,b,d) {
    j[e] ??= function () { (j[e].q ??= []).push(arguments) };
    j[e].init ??= x => new Promise(s => j[e]('init', x||{}, s))
    b = o.createElement(y), d = o.getElementsByTagName(y)[0];
    b.id = e; b.src = m; b.async = 1; d.parentNode.insertBefore(b, d);
  }(window, document, 'script', 'fd', 'https://embed.jolly.tools/widget.js'));
```

The only thing that you can change in this code snippet is the name of the global variable `fd`. You should do that if it happens to conflict with another global variable with the same name that you have in your site.

Next, you need to call the `init` command. Again, this has to be done just once, and therefore it is recommended to do it right after the loader script, in the same `<script>` tag.

```javascript
await fd.init({ /*
    debug: true
*/})
```

## Rendering code
In order to render a form or a trigger (a floating button or a tab), you should call the `render` command. This command can be called multiple times, depending on your needs.

#### `render` command

```js
const formApi = await fd.render({/*render options*/})
```

You should place this in the page that you want the widget to be rendered. It must be called **after** the script loader.

:::tip Tip
See ful render code sample in the [quickstart guide](quickstart.md#5-embed-the-form-into-your-website-optional)
:::

Let's look at the render options object:

* `url` - the full path to the form that you're loading. Make sure that the URL ends with `/embed`
* `id` - if you plan to call any other command, such as `open` or `close`, you should choose an `id` so you can correlate to it later. Otherwise, you don't have to define it.
* `params` - an _Object_ with attributes that are being passed to the form as query params. Useful for pre-filled fields. For example, given the params:
  ```js
  params: {
    email: "Sara123@gmail.com"
  }
  ```
  the form will pre-fill the `email` field.
  Note that params has to be a flat object with no sub-objects or arrays
* `mode` - how you want to render the widget. Possible values are:
    * `inline` - will render the widget as part of the page itself. Can be appended to the body or to a defined element.
    * `popup` - will render as a popup in the center of the screen. Useful when you want the user's full attention to the content.
    * `sidebar` - will render as a sliding-in sidebar, either from the left or from the right.
    * `floating` - will render as a common chat widget. Works nicely with FAB trigger.
* `trigger` - define what type of trigger you want to render. Possible values:
    * `none` - don't render any trigger. This is the default. Use this if you embed `inline` because then you don't need a trigger.
    * `fab` - Floating Action Button - floating at the bottom of the screen, on either side. Works especially well with `floating` embeds, but also looks nice with the other types.
    * `tab` - a side tab, sticky to either right or left. Can have custom text. This trigger is less intrusive than `fab`.
* `inline` - an _Object_ with attributes that are used only when `mode` is set to `inline`. Example:
  ```js
  inline: {
    selector: '.form-data',
    maxWidth: '100vw',
    width: '500px'
  }
  ```
    * `selector` - css selector for the DOM element in which the entity will be rendered. Default is `body` which means the widget will be appended to the end of the page.
    * `width` - width of the widget, including the css unit. The default is `100%` which means it will take the entire width of the container.
    * `maxWidth` - useful for mobile view. If you set the `width` to some `px` number, you can set this value using another unit so the widget will not get wider than the screen. Default is `100vw` which is the width of the window.
* `popup` - an _Object_ with attributes that are used only when `mode` is set to `popup`. Example:
  ```js
  popup: {
    zIndex: '999999',
    transitionDuration: '250ms',
    radius: '12px',
    width: '800px',
    height: '600px',
    overlay: true,
    closeButton: true
  }
  ```
    * `zIndex` - if the popup appears below one of the elements on the page, you can set this property to a number that is higher than the zIndex of that element. Default is `99999`. Can be set as a _Number_ or a _String_.
    * `transitionDuration` - the amount of time the animation is playing, including the css unit. Default is `300ms`
    * `radius` - the radius of the popup's corners, including the css unit. Default is `8px`
    * `width` and `height` - the dimensions of the popup, including the css unit. On mobile popups are automatically set to take the full screen, regardless of this setting. If you want the popup to be relative to the window size, you can use `vw` and `vh` units, or even use `calc`. For example:
      ```
      // cover the entire window:
      width: '100vw',
      height: '100vh'
  
      // cover the entire window, minus 15px margin:
      width: 'calc(100vw - 30px)',  // note the space around the minus sign
      height: 'calc(100vh - 30px)'
      ```
    * `overlay` - a boolean that indicates whether an overlay should be rendered above the page, so that full attention is given to the popup. If set to true, you can customize the overlay using the `overlay` object property. See below.
    * `closeButton` - a boolean that indicates whether a close button should be rendered in the top-right corner of the popup. Default is `true`.
* `sidebar` - an _Object_ with attributes that are used only when `mode` is set to `sidebar`. Example:
  ```js
  sidebar: {
    side: 'right',
    width: '600px',
    transitionDuration: '250ms',
    overlay: true,
    zIndex: '999999',
    closeButton: true
  }
  ```
    * `side` - either `left` or `right`. Default is `right`.
    * `width` - The width of the sidebar, including the css unit. Default is `600px`. On mobile the sidebar is rendered as full width, regardless of this setting.
    * `transitionDuration` - the amount of time the animation is playing, including the css unit. Default is `300ms`.
    * `overlay` - a boolean that indicates whether an overlay should be rendered above the page, so that full attention is given to the sidebar. If set to true, you can customize the overlay using the `overlay` object property. See below.
    * `zIndex` - if the sidebar appears below one of the elements on the page, you can set this property to a number that is higher than the zIndex of that element. Default is `99999`. Can be set as a _Number_ or a _String_.
    * `closeButton` - a boolean that indicates whether a close button should be rendered in the corner of the sidebar. Default is `true`.
* `floating` - an _Object_ with attributes that are used only when `mode` is set to `floating`. Example:
  ```js
  floating: {
    width: '600px',
    maxWidth: '100vw'
    overlay: true,
    side: 'left',
    zIndex: '99999',
    transitionDuration: '500ms',
    radius: '25px',
    closeButton: true
  }
  ```
    * `width` - width of the floating widget, including the css unit. Default is `350px`.
    * `maxWidth` - useful for mobile view. If you set the `width` to some `px` number, you can set this value using another unit so the widget will not get wider than the screen. Default is `100vw` which is the width of the window.
    * `overlay` - a boolean that indicates whether an overlay should be rendered above the page, so that full attention is given to the sidebar. If set to true, you can customize the overlay using the `overlay` object property. See below.
    * `side` - either `left` or `right`. Default is `right`.
    * `zIndex` - if the floating widget appears below one of the elements on the page, you can set this property to a number that is higher than the zIndex of that element. Default is `99999`. Can be set as a _Number_ or a _String_.
    * `transitionDuration` - the amount of time the animation is playing, including the css unit. Default is `300ms`.
    * `radius` - the radius of the widget's corners, including the css unit. Default is `8px`
    * `closeButton` - a boolean that indicates whether a close button should be rendered in the corner of the widget. Default is `true`.
* `overlay` - an _Object_ with attributes that are used only when `mode` is set to `floating`, `popup` or `sidebar`, and the respective `overlay` attribute is set to `true`. Example:
  ```js
  overlay: {
    zIndex: '999',
    color: '#000',
    opacity: 0.6,
    closeOnClick: true,
    transitionDuration: '300ms'
  }
  ```
    * `zIndex` - if the overlay appears below one of the elements on the page, you can set this property to a number that is higher than the zIndex of that element. Default is `999`. Can be set as a _Number_ or a _String_. Must be lower than the _zIndex_ of the widget.
    * `color` - a css color of the overlay, not including opacity. Default is `#000`.
    * `opacity` - a _Number_ between 0-1 that indicates the opacity of the overlay. `0` means fully transparent and `1` means opaque. Default is `0.5`
    * `closeOnClick` - a boolean that indicates whether the widget should be closed when the overlay is clicked. Default is true.
    * `transitionDuration` - the amount of time the animation is playing, including the css unit. Default is `300ms`.
* `fab` - an _Object_ with attributes that are used only when `trigger` is set to `fab`. Example:
  ```js
  fab: {
    background: '#86c3e8',
    width: '80px',
    zIndex: '999999',
    color: '#ffffff',
    onOpenMode: 'close', /* hide | close */
    side: 'left', /* right | left */
    icon: 'smilies',
    iconSize: '50%',
    iconOnly: true,
    shadow: '0 0 10px rgba(0,0,0,0.3)'
  }
  ```
    * `background` - the color of the button. When `iconOnly` is set to `true`, this color will be apparent only in `close` mode (see `onOpenMode` below).
    * `width` - the size of the button, including the css unit. Default is `50px`
    * `zIndex` - if the floating widget appears below one of the elements on the page, you can set this property to a number that is higher than the zIndex of that element. Default is `99999`. Can be set as a _Number_ or a _String_.
    * `color` - the color of the close icon. Only used when `onOpenMode` is set to `close`
    * `onOpenMode` - defines the behavior of the button when the widget is opened. Possible values:
        * `close` - the button turns into a close button. The color of the button is set by the `background` attribute, and the color of the icon is set by the `color` attribute. This is the recommended mode when used in conjunction with `floating` widget.
        * `hide` - the button is hidden. This is the recommended mode when using in conjunction with `popup` or `sidebar` mode. This is the default value.
    * `side` - either `left` or `right`. Default is `right`. When used in conjunction with `floating` or `sidebar` mode, it is recommended to use the same side as the widget.
    * `icon` - one of the named icons: `hand-thumb-up`, `hand-up-help`, `smilies`, `megaphone-black`, `megaphone-white`, `pencil-bubble-black`, `pencil-bubble-white`, `question-mark-balck` and `question-mark-white`
    * `iconSize` - the size of the icon. Recommended using as a percentage of button size. Default is `50%`. When `iconOnly` is set to true, this affects only the close-icon size.
* `tab` - an _Object_ with attributes that are used only when `trigger` is set to `tab`. Example:
  ```js
  tab: {
    background: '#27bdf6',
    borderRadius: '8px',
    zIndex: '2000',
    color: '#ffffff',
    side: 'right', /* right | left */
    label: 'Feedback',
    bottom: '10%'
  }
  ```
    * `background` - the color of the tab. Default is `#00a3dd`, which is light blue.
    * `borderRadius` - the radius of the tab's corners, including the css unit. Default is `3px`.
    * `zIndex` - if the tab appears below one of the elements on the page, you can set this property to a number that is higher than the zIndex of that element. Default is `99999`. Can be set as a _Number_ or a _String_.
    * `color` - the color of the text. Default is `#ffffff`.
    * `side` - either `left` or `right`. Default is `right`. When used in conjunction with `floating` or `sidebar` mode, it is recommended to use the same side as the widget.
    * `label` - the text that appears on the tab. Default is `Feedback`.
    * `bottom` - the distance of the tab from the bottom of the screen. Default is `20%`.

### Custom triggers
If you prefer creating your own trigger that will show and hide the form, you should use the `open`, `close` and `toggle` commands:

```javascript
// This will not actually render anything, but you still need to call it
const formApi = await fd.render({
  url: '<YOUR_FORM_URL>/embed',
  id: 'contactForm',
  mode: 'sidebar',
  params: {},
  sidebar: {
    side: 'right',
    overlay: false,
    width: '360px'
  },
)
// Call these commands from your own custom button handler
formApi.open()
formApi.close()
formApi.toggle()
```

Notes:
* The `render` command does not have a `trigger` option, and therefore no button or tab are being rendered
* If you have an SPA, and the page that renders the form is being destroyed, you should call the `destory` command in order to avoid memory leak:
  ```javascript
  formApi.destroy()
  ```