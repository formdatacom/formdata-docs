---
sidebar_position: 6
title: Custom styling
description: Styling your form to meet your brand. Use classes, style and custom CSS.
---

# Custom styling

Form data provides a flexible and powerful custom styling mechanism. Here's what you can do:
- [Apply certain classes globally](#adding-classes-globally), to all sections of the same type (all labels, all input fields, etc.)
- [Apply certain classes to specific fields](#adding-classes-to-specific-fields)
- [Apply classes and style attributes to any html block](#adding-classes-and-style-to-html-elements) (h1-h6, p)
- You can use either your [custom classes](#adding-custom-css-classes), or any common Tailwind CSS class
- [Use custom fonts](#changing-the-default-fonts) in your form
- [Remove the default _"Made with Form-Data"_ badge](#removing-form-data-branding).

## Anatomy of blocks
All form fields follow the same html structure:

```html
<div class="formkit-outer" data-family="text" data-type="text" data-empty="true">
  <div class="formkit-wrapper">
    <label class="formkit-label" for="input_0">What is your name?</label>
    <div class="formkit-inner">
      <input class="formkit-input" type="text" name="text_1" id="input_0" aria-describedby="help-input_0">
    </div>
  </div>
  <div class="formkit-help" id="help-input_0">Please enter your name above.</div>
  <ul class="formkit-messages">
    <li class="formkit-message" id="input_0-rule_required" data-message-type="validation">
        What is your name? is required.
    </li>
  </ul>
</div>
```

You can apply classes to any of the sections, as we will immediately see.

## Outer attributes

For styling purposes some attributes are automatically added to and removed from the outer section of all inputs: 
* `data-type` — The type of `input`, `text`, `select`, `checkbox` etc.
* `data-multiple` — For inputs that accept the `multiple` attribute, this will be appended when the input has the `multiple` attribute (like the select input).
* `data-disabled` — Present when an input is disabled.
* `data-complete` — Present when the input is "complete".
* `data-invalid` — Present when the input has failing validation rules and the messages for the failing rules are visible.
* `data-errors` — Present when the input has explicitly set errors.

You can use these attributes in order to style elements in certain states. 

## Adding classes globally

If you want to apply some style to the entire form, you may do so by adding `classes` property on the `form` block. Under the `classes` property, with indentation, you can set classes for any of the block sections demonstrated above: `outer`, `wrapper`, `label`, `inner`, `input`, `messages`, and `message`.  
For example: 
```text
type form
name My form
classes
  label text-sky-500
  hint my-hint-class
```

## Adding classes to specific fields
In a similar way to the above, you may add classes to a specific field element. For example: 
```text
type checkbox
name consent
label I agree to be contacted by phone
classes
  label text-red-600
```

## Adding classes and style to html elements
For HTML elements such as `h1`-`h6` and `p`, you can add both classes and style attributes. This is done via the `attributes` property. Example: 
```text
type h1
text Contact us
attributes
  class my-class
  style text-decoration: underline;
```

## Adding custom CSS classes
In the examples above you could see that some of the classes are Tailwind classes, and some are custom classes (`my-class`). In order to define these custom classes you can use the `css` block: 

```text
type css
.my-class {
  color: #658273;
}
.another-class {
  border: 1px solid red;
}
```

You may define any css class that you want, including media queries, animations, etc. 
End your css block with an empty line before the next block. 
The location of the css block does not matter. You can even define multiple css blocks if you want, all of them will be aggregated into one `<style>` block in the form page.

> **Note:** This feature is only available as part of the Form Branding add-on, or the Power-up Bundle add-on. 

### Changing the default fonts
You can use the custom CSS block to change the default fonts. Here's an example:
```text
type css
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:ital,wght@400,900&display=swap');
.playfair, 
.formkit-label {
  font-family: "Playfair Display", serif;
}

type h1
text Let's Get Started
attributes
  class playfair text-4xl
```

The CSS block imports the Playfair font from Google Fonts, and assigns it to `playfair` and `formkit-label` classes. 
The `formkit-label` class is automatically assigned to all labels in the form, as demonstrated above. 
The `playfair` class is used in the form's h1 header. 

## Removing Form-Data branding
Each form has a default "Made with Form-Data" badge. You may remove this badge by adding `remove-branding` attribute to the `form` block:

```text
type form
name Contact form
remove-branding
``` 

> **Note:** This feature is only available as part of the Form Branding add-on, or the Power-up Bundle add-on. 
