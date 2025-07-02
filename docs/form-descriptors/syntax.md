---
sidebar_position: 2
title: Syntax
description: Form Descriptor syntax guide
---

## Overall structure

Form descriptors (called `.fd` in short) are consisted of blocks. 
Block can describe content or form fields. Full list of block types can be found [here](blocks.md)
Each block begins with `type` followed by a block type, then lists its properties.

```
type text
name full_name
label Full Name
placeholder Enter your full name
validations required|length:3,50
```

Some properties support nested blocks (like `design` or `options`) and must be indented consistently.

## Required `form` block

Every `.fd` must start with a `type form` block that declares metadata about the form.

```
type form
name contact_form
success-message Thanks! We'll be in touch shortly.
design
  background rgb(255, 255, 255)
```

## Blocks syntax

Each line in the block begins with a keyword that describes an attribute of that block, followed by a value for that attribute. For example, the line `placeholder Jane` describes a *placeholder* of an input field, with the value `Jane`.

Some properties accept boolean properties `true` or `false`. In order to set such a property to `true` you can omit the value.
For example, the following lines are equivalent:
```text
readonly
readonly true
```

## Comments

You can add comment lines anywhere you want. Comment lines begin with `//` or `#`. You cannot write comments at the end of normal lines. Example:
```text
// ✅ this is a valid comment line 
type text
name full_name // 🚫 this is NOT a valid comment 
label Full name
```

## Indentation
In order to keep things simple, `.fd` syntax does not use brackets. In some cases, where hierarchy is needed, indentation is used. Indented lines can start with any number of spaces, but it's important that all indented lines under the same parent will have the same indentation. 
For example: 
```text
type select
name field_name
options
  Option 1
  Option 2
  Option 3
```
Note how all option labels are indented the same under the `options` property. 
Each option can also have its own `value` property, which will be further indented under the label:
```text
type select
name field_name
options
  Option 1
    value op1
  Option 2
    value op2
  Option 3
    value op3
```
