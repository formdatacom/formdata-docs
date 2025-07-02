---
sidebar_position: 4
title: Validations
description: Form validations
---


## Validation Rules

Fields may include a `validations` property with one or more rules separated by `|`. Some rules accept arguments, which can be supplied after a colon `:`. Multiple arguments can be comma-separated.

### Example

```text
validations required|length:3,50
```

### Rule Hints

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