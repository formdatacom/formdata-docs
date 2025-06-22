---
sidebar_position: 5
title: .fd files
description: FD Files
---

# `.fd` Format - Form Definition

The `.fd` (Form Definition) file format is a structured, indentation-based format for defining web forms, their layout, and behavior in plain text. It is designed to be human-readable and easy to version control.


## 📦 Structure

Each block begins with `type` followed by a block type, then lists its properties with indentation.

```
type text
name full_name
label Full Name
placeholder Enter your full name
validations required|length:3,50
```

Some properties support nested blocks (like `design` or `options`) and must be indented consistently.

## ✅ Required `form` block

Every `.fd` file must start with a `type form` block that declares metadata about the form.

```
type form
name contact_form
success-message Thanks! We'll be in touch shortly.
design
  theme light
  background rgb(255, 255, 255)
```

## 🔤 Supported Block Types

### 🧱 Form Block

- `form`: Required. Defines form-wide settings like `name`, `success-message`, and `design`.

### 🏷️ Content Blocks

Used to add non-input elements like headings or text.

- `h1` through `h6`: Headings
    - Requires `text` property.

Example:

```
type h2
text Contact Us
```

### 🧾 Input Blocks

Used to collect user input. Each of these blocks requires at least `name` and `label`.

- `text`
- `email`
- `tel`
- `date`
- `number`
- `textarea`
- `select` *(requires `options`)*
- `radio` *(requires `options`)*
- `checkbox` *(can use `options` or standalone)*
- `toggle`
- `file`
- `slider`
- `rating`
- `submit`

Example:

```
type email
name email
label Your Email
placeholder you@example.com
validations required|email
```

### 🧩 Nestable Properties

Some properties accept nested data structures.

#### `design`

Optional block in `form` for layout styling.

```
design
  background rgb(10, 10, 10)
```

#### `options`

Used in elements like `checkbox`, `select`, and `radio`.

```
options
  Vegetarian
  Vegan
```

```
options
  Vegetarian
    value vegetarian
  Vegan
    value vegan
```

The first indented level after the `options` keyword represents the labels of the options. The second indented level (after the label) is optional, and you can use it to set a `value` property for each option. If not specified, the `value` will be identical to the `label` 

## 🎯 Common Field Properties

| Property      | Type     | Description                       |
|---------------|-|-----------------------------------|
| `name`        | string   | Unique identifier for the field   |
| `label`       | string   | Label shown to the user           |
| `placeholder` | string   | Optional placeholder text         |
| `default`     | string   | Default value                     |
| `validations` | string   | Pipe-separated (`|`) validation rules |
| `hidden`      | boolean  | Whether the field is hidden       |



## ⚠️ Validation Rules

Fields may include a `validations` property with one or more rules separated by `|`. Some rules accept arguments, which can be supplied after a colon `:`. Multiple arguments can be comma-separated.

### 📌 Syntax

```
validations required|length:3,50
```

### 🧠 Rule Hints

Rule hints modify the behavior of validation rules and are prefixed to the rule name:

- `+` **Empty**: Runs the validation rule even if the input is empty.
- `*` **Force**: Runs the validation rule even if a previous rule has failed.
- `?` **Optional**: Makes the validation rule non-blocking; the form can still submit if this rule fails.
- `(200)` **Debounce**: Debounces the validation rule by the specified number of milliseconds.

Example:

```
validations +required|length:3,50
```

### ✅ Available Rules

- `accepted`: The field must be accepted (e.g., terms and conditions).
- `alpha`: The field may only contain alphabetic characters.
- `alphanumeric`: The field may only contain letters and numbers.
- `alpha-spaces`: The field may only contain letters and spaces.
- `between:min,max`: The field numeric value must be between `min` and `max`, inclusively.
- `confirm:field_name`: The field must match another field's value.
- `contains_alpha`: The field must contain at least one letter.
- `contains_alphanumeric`: The field must contain at least one letter or number.
- `contains_alpha_spaces`: The field must contain at least one letter or space.
- `contains_lowercase`: The field must contain at least one lowercase letter.
- `contains_numeric`: The field must contain at least one number.
- `contains_symbol`: The field must contain at least one symbol.
- `contains_uppercase`: The field must contain at least one uppercase letter.
- `date_after:date`: The field must be a date after the specified date.
- `date_before:date`: The field must be a date before the specified date.
- `date_between:min,max`: The field must be a date between `min` and `max`.
- `date_before_or_equal:date`: The field must be a date before or equal to the specified date.
- `date_after_or_equal:date`: The field must be a date after or equal to the specified date.
- `date_before_node:field`: The field must be a date before the date in the specified field.
- `date_after_node:field`: The field must be a date after the date in the specified field.
- `date_format:format`: The field must match the specified date format.
- `email`: The field must be a valid email address.
- `ends_with:value`: The field must end with the specified value.
- `is:value`: The field must be exactly the specified value, or one of the values in a list
  - `is:eggs,bacon,sausage,coffee` - must be one fo the values
- `length:min,max`: The field length must be between `min` and `max`.
- `lowercase`: The field must be in lowercase.
- `matches:pattern`: The field must match one of the values in a list, or the specified regular expression pattern.
  - `matches:node,php,java,python` will match one of the provided values
  - `matches:/[0-9]/` will match the regular expression
- `max:value`: The field numeric value must be less than or equal to `value`.
- `min:value`: The field numeric value must be greater than or equal to `value`.
- `not:value`: The field must not be the specified value, or one of the list of values. E.g. `not:red,green`
- `number`: The field must be a number.
- `required`: The field is required. If you don't want whitespace to cause the required rule to pass, you can pass `trim` as an argument: `required:trim`
- `require_one:fields`: At least this field, or one of the specified fields must be present.
- `starts_with:value`: The field must start with the specified value.
- `symbol`: The field must contain at least one symbol.
- `uppercase`: The field must be in uppercase.
- `url`: The field must be a valid URL.

:::info
Note: All Alpha related validation rules will allow accented characters such as `ä`, `ù`, or `ś`. To limit the rule to Latin characters only (a-z), add `:latin` to the validation rule. E.g. `alpha:latin`
:::

## 📁 Example `.fd` File

```
type form
name contact_form
success-message Thank you!
design
background rgb(250, 250, 250)

type h1
text Contact Us

type text
name full_name
label Full Name
placeholder Enter your full name
validations required|length:3,50

type email
name email_address
label Email Address
placeholder you@example.com
validations required|email

type checkbox
name dietary
label Dietary Restrictions
options
Vegan
value vegan
Gluten-Free
value gluten_free

type textarea
name message
label Message
rows 5
validations required

type submit
label Send
```

## 🧪 Tips

- Always start with `type form`
- Use consistent 2-space indentation
- Avoid tabs (only spaces)
- Use a linter or parser to validate before deployment

## 📌 Roadmap (future support)

- Conditional visibility
- Repeatable sections
- Calculated fields
- Multilingual text
- Importing shared blocks
