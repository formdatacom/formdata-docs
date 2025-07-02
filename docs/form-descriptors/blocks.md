---
sidebar_position: 3
title: Blocks
description: Form blocks
---

# Block types
Here's a full list of all supported blocks: 

## Content blocks
[form](#form), [h1 - h6](#h1---h6), [p](#p), [html](#html)

## Form fields
[text](#text), [email](#email), [tel](#tel), [date](#date), [textarea](#textarea), [number](#number), [select](#select), [radio](#radio), [checkbox](#checkbox), [toggle](#toggle), [file](#file), [slider](#slider), [rating](#rating), [submit](#submit)

# Common properties

Many of the blocks support the same properties. In the description of each block you'll find the exact list of properties that it supports.

### name
The internal name of the field, used to identify it in submissions. This is required for most input fields.

Example: 
```
name first_name
```

### label
The text displayed to the user as the field's label. This is required for most input fields.

Example: 
```
label First Name
```

### placeholder
Hint text displayed in an input field before the user enters a value. You can use it as an example, but it's not advisable to use it instead of providing a proper label or help text.

Example: 
```
placeholder Jane
```

### validations
Rules to validate user input. See the [Validations](./validations.md) for a full list of available rules.

Example: 
```
validations required|min:2
```

### help
A help text displayed next to the field to provide extra information or instructions.

Example: 
```
help We will never spam you or share your email with any 3rd party
```

### show
Show the field only if this is set to `true`. Can be used with [conditional logic](./logic.md).

Example - show only if `some_field` equals to `"some value"`: 
```
show {{ true if some_field=="some value" else false }}
```

### hide
Hide the field only if this is set to `true`. Can be used with [conditional logic](./logic.md).

Example - hide only if `some_field` has a value: 
```
hide {{ true if some_field else false }}
```

### disabled
If set to `true`, this will disable the field so the user cannot interact with it. Can be used with [conditional logic](./logic.md).

Example - disabled as long as `some_field` has no value: 
```
disabled {{ true if not some_field else false}}
```

### readonly
If set to `true`, this will make the field read-only. The user can see and copy the value but cannot change it. Can be used with [conditional logic](./logic.md).

Example - readonly as long as `some_field` has no value: 
```
readonly {{ true if not some_field else false}}
```

Example - always readonly, without any condition. Useful for output fields: 
```
readonly
```

### attributes
Allows adding custom HTML attributes to the block's element. It has the following sub-properties:
* `class` - Adds one or more CSS classes to the element. You can use common tailwind classes or your own custom classes
* `style` - Adds inline CSS styles to the element.

Example:
```text
attributes
  class py-6 my-class
  style "border-radius: 5px;"
```

### min
The minimum allowed value for numeric, date, or rating inputs.

Example: 
```
min 0
```

### max
The maximum allowed value for numeric, date, or rating inputs.

Example: 
```
max 100
```

### step
The increment/decrement step for numeric inputs like `number` and `slider`.

Example: 
```
step 5
```

### options
A list of choices for `select`, `radio`, and `checkbox` fields. Each option should have a `label` (the text shown to the user) and can have an optional `value` (the value that is submitted). If `value` is omitted, the `label` is used as the value. Note that labels are indented under the property name `options`, and values are further indented under each label.

Example:
```text
options
  Red
    value ff0000
  Green
  Blue
```

# Blocks

### form
The `form` block must be the first block in every Form Descriptor (`.fd`). It provides metadata about the entire form. It has the following properties:
* `name` - Required. the name of the form. Not exposed to users.
* `success-message` - The message that users will see when the form is submitted successfully.
* `fail-message` - The message that users will see if there was some error while submitting the form. This is not related to validation errors, but rather unexpected errors like network issues.
* `design` - This is a property that has several sub-properties related to the design of the form.
  * `background` - this can be any valid css value that for the `background` of the entire page. Commonly used with a color value.
  * `cover` - a URL for a cover image that will appear at the top of the page
  * `cover-offset` - `0` - `100`, default is `50`. The cover image is commonly cropped, because it has a max height. This property sets which part of the image will be visible. The default is `50` which means that the center part of the image will be visible. Set this to `0` if you want the top of the image to be visible, or to `100` if you want the bottom of the image to be visible.

Example: 
```text
type form
name Event registration form
success-message Thanks for signing up. See you at the event!
fail-message There was an unexpected error. Please try again.
design
    background #99ffff
    cover https://images.unsplash.com/photo-1729353639014-6eced0fd2a5c?fm=jpg&q=60&w=1920
```

---

### h1 - h6
These blocks are used to display heading text on your form.

* `text` - Required. The content of the heading.
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).

Example:
```text
type h2
text Contact Information
```

---

### p
Displays a paragraph of text.

* `text` - Required. The content of the paragraph.
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).

Example:
```text
type p
text We'll use this information to get in touch with you.
```

---

### html
This block allows you to embed raw HTML content directly into your form. Any script will be stripped out. Unlike other fields, this block does not have any named properties. Simply type your HTML and leave an empty line after that.
> **Important note:** Be extra careful when using this block, as you might break the entire page. If you're using [form logic](logic.md) to output any field value provided by the user, always use the [escape filter](logic.md#escape) to prevent code injection.

Example:
```text
type html
<div style="padding: 10px; border: 1px solid #ccc;">
  <strong>Note:</strong> All fields are required.
</div>

```

---

### text
A standard single-line text input field.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `placeholder` - See [placeholder](#placeholder).
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type text
name first_name
label First Name
placeholder John
validations required
```

---

### email
A text input field for email addresses. Input will be automatically validated to ensure it's a valid email format.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `placeholder` - See [placeholder](#placeholder).
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type email
name user_email
label Your Email
placeholder user@example.com
validations required|email
```

---

### tel
A text input field for telephone numbers.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `placeholder` - See [placeholder](#placeholder).
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type tel
name phone_number
label Phone
placeholder (555) 123-4567
```

---

### date
A date picker input field.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `min` / `max` - The earliest and latest selectable dates in `YYYY-MM-DD` format. See [min](#min) and [max](#max).
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type date
name appointment_date
label Appointment Date
min 2025-08-01
max 2025-08-31
```

---

### textarea
A multi-line text input field.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `placeholder` - See [placeholder](#placeholder).
* `rows` - The visible number of lines in the text area.
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type textarea
name comments
label Additional Comments
rows 4
```

---

### number
An input for numeric values.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `placeholder` - See [placeholder](#placeholder).
* `min` / `max` / `step` - See [min](#min), [max](#max) and [step](#step).
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type number
name quantity
label Quantity
min 1
max 10
step 1
```

---

### select
A dropdown list for selecting one or more options.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `options` - Required. See [options](#options).
* `multiple` - Set to `true` to allow selecting multiple options.
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type select
name country
label Country
options
  USA
    value us
  Canada
    value ca
  Mexico
    value mx
```

---

### radio
A set of radio buttons, allowing the user to select one option from a list.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `options` - Required. See [options](#options).
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type radio
name payment_method
label Payment Method
options
  Credit Card
    value cc
  PayPal
    value paypal
```

---

### checkbox
A single checkbox or a group of checkboxes for selecting multiple options.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `options` - If provided, creates a group of checkboxes. If omitted, it's a single checkbox. See [options](#options).
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example (single):
```text
type checkbox
name terms
label I agree to the terms and conditions
validations required
```

Example (group):
```text
type checkbox
name interests
label What are your interests?
options
  Sports
  Music
  Movies
```

---

### toggle
A switch-style toggle, representing a boolean on/off state.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `on-value` / `off-value` - The values submitted when the toggle is on or off. Defaults to `true` and `false`.
* `on-value-label` / `off-value-label` - Custom labels displayed for the on/off states.
* `help` - See [help](#help).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type toggle
name notifications
label Enable Notifications
on-value yes
off-value no
```

---

### file
Allows users to upload one or more files.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `accept` - A comma-separated list of file mime types or extensions the user can upload (e.g., `image/*`, `.pdf, .docx`).
* `button-label` - Custom text for the upload button.
* `disable-webcam` - Set to `true` to disable webcam as an upload source.
* `disable-screen-capture` - Set to `true` to disable screen capture as an upload source.
* `max-file-size` - The maximum size per file (e.g., `5MB`, `100KB`).
* `max-number-of-files` - The maximum number of files that can be uploaded.
* `allowed-file-types` - A list of allowed file types.
* `inline` - Set to `true` to display the uploader dialog inline rather than as a modal.
* `height` - The height of the uploader widget, when it's inline.
* `locale` - Sets the language for the uploader widget.
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type file
name profile_picture
label Profile Picture
accept image/png, image/jpeg
max-file-size 5MB
```

---

### slider
A slider for selecting a value from a numeric range.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `min` / `max` - Required. The minimum and maximum values of the slider. See [min](#min) and [max](#max).
* `step` - The increment of the slider. See [step](#step).
* `show-input` - Set to `true` to show a numeric input field next to the slider.
* `tooltip` - Set to `true` to permanently show a tooltip that shows the current value.
* `marks` - Set to `true` to show marks along the slider track.
* `mark-labels` - Set to `true` to show labels for the marks.
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type slider
name satisfaction
label Satisfaction Level
min 0
max 10
step 1
show-input
```

---

### rating
A rating input, typically displayed as a series of stars.

* `name` - Required. See [name](#name).
* `label` - Required. See [label](#label).
* `min` / `max` - The range for the rating. Defaults to a 1-5 star rating if not specified. See [min](#min) and [max](#max).
* `validations` - See [validations](#validations).
* `help` - See [help](#help).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type rating
name product_rating
label Rate our product
max 5
```

---

### submit
The button that submits the form. If omitted, a default button will be added with the label "Submit"

* `label` - Required. The text displayed on the button (e.g., "Submit", "Send").
* `name` - See [name](#name).
* `attributes` - See [attributes](#attributes).
* `show` / `hide` - See [show](#show) and [hide](#hide).
* `disabled` - See [disabled](#disabled).
* `readonly` - See [readonly](#readonly).

Example:
```text
type submit
label Register Now
```

# Example form
```text
type form
name Event Registration
success-message Thank you for registering! We look forward to seeing you at the event.
design
background #f0f7ff

type h1
text Event Registration

type text
name attendee_name
label Full Name
placeholder Jane Smith
validations required

type email
name email
label Email Address
placeholder jane@example.com
validations required|email

ntype tel
name phone
label Phone Number
placeholder (123) 456-7890
validations required

type select
name ticket_type
label Ticket Type
options
  General Admission
    value general
  VIP
    value vip
  Student
    value student
validations required

type checkbox
name newsletter
label Subscribe to event updates

type submit
label Register Now
```

