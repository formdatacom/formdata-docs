---
sidebar_position: 5
title: Form logic
description: Conditional fields, form logic, dynamic labels, and more
---

# Form logic

Form Descriptors has a powerful syntax to create dynamic logic. You can use it to:
* Show or hide fields based on other fields
* Disable or make a field readonly based on other fields
* Change the design of a component based on other fields
* Use the value of one field in the label or help-text of another field
* Create a dynamic html block that summarize the form values

## Example 

Let's start with an example to make it more clear:
```text
type text
name full_name
label Full Name
placeholder Jane Smith
validations required

type email
name email
label What is your email address{% if name %}, {{full_name}}{% endif %}?
placeholder jane@example.com
validations required|email
```
This form defined a `full_name` and `email` fields. The label of the email field is personalized using the value provided by the user in the name field. If the user provided the name `Alexander`, then the label of the email field will be `What is your email address, Alexander?`. 
The variable `full_name` corresponds to the `name` property of the first input field. When you write your logic, you can use any input field's `name` property as a variable.

You may wonder what is the difference between `{% %}` and `{{ }}`. The first one is a [Tag](#tags) and the second one is an [Expression](#expressions). You can see how they work in the following sections.

## Tags
Tags are special blocks that perform operations on sections of the template. Supported tags are
* **if** - conditional blocks
  ```text
  {% if condition %}anything here will be output if the condition is true{% endif %}
  ```
* **for** - iterate over arrays and dictionaries
  ```text
  {% for item in items %}
  <li>{{ item }}</li>
  {% else %}
  <li>This would display if the 'item' collection were empty</li>
  {% endfor %}
  ```
* **filter** - performs one or more filters (transformations) on the content of the block. See list of available filters [here](#filters)
  ```text
  {% filter upper %}This text will be uppercase{% endfilter %}
  ```
* **raw** - if you want to output any special text such as `{{` or `{%` as is, you can use the raw tag
  ```text
  {% raw %}this text {{ will be shown %} as-is{% endraw %}
  ```

## Expressions
Expression tags return a value that is being output. Here are some examples:
* `{{ full_name }}` - returns the value of the field with the name `full_name`
* `{{ 3 + 5 }}` - returns 8
* `{{ number_field > 8 }}` - returns true if the value of `number_field` is larger than `8`

Here's a full list of supported expression operators:

### Math operations
* Addition: `+`
* Subtraction: `-`
* Division: `/`
* Division and integer truncation: `//`
* Division remainder: `%`
* Multiplication: `*`
* Power: `**`

### Comparisons
* `==` - Equals. Similar to Javascript, using this operator `false`, `0`, `""` (empty string), `[]` (empty array) and `undefined` - are all equal to each other. Also, the number `5` and the string `"5"` will be equal. For most practical uses, this is the equality that you want to use.
* `===` - Strictly equals. Similar to Javascript, two values are strictly equal only if they have the exact same value. 
* `!=` - Not equals.
* `!==` - Strictly not equals.
* `>` - Greater than.
* `>=` - Greater than or equals.
* `<` - less than.
* `<=` - less than or equals.

### Logic
* 'and'
* 'or'
* 'not'
You can use parentheses to group expressions. E.g.
```text
{{ (number > 5 and another_number < 2) or number > 10 }}
```

### If expression
If expression are similar to javascript's ternary operator. They use the following syntax:
```text
{{ true_value if condition else false_value }}
```
If `condition` has a truthy value, then `true_value` is returned. Otherwise, `false_value` is returned. 
If expressions can also skip the `else` part, and then they will not output anything if the condition isn't met.
```text
{{ true_value if condition }}
```
The following example will add the class `text-green-500` to the header, only if the field `full_name` has a value:
```text
type h1
text Contact us
attributes
  class {{ "text-green-500" if full_name }}
```

### Regular expressions
A regular expression can be created just like JavaScript, but needs to be prefixed with `r`. The following example adds the help text `You are the one!` if the user provides the name `Neo`:
```text
type text
name name
label Name
help {% set regExp = r/Neo/ %}{{ "You are the one!" if regExp.test(name)}}
placeholder John Doe
validations required
```

### Functions
You can call the following functions, just as you would in Javascript

#### range([start], stop, [step])
If you need to iterate over a fixed set of numbers, `range` generates the set for you. The numbers begin at `start` (default `0`) and increment by `step` (default `1`) until it reaches `stop`, not including it.
```nunjucks
{% for i in range(0, 5) -%}
  {{ i }} 
{%- endfor %}
```
This will output `01234`
> **Note:** the `-` (minus) sign at the end and beginning of the tags (`-%}` and `{%-`) tells the engine to strip down any spaces coming right after or before the closing or opening tag, respectively. Without it, the above would output `  0  1   2   3   4 `, because the line that prints `i` has 2 spaces before the expression `{{ i }}`, and one right after it.

#### cycler(item1, item2, ...itemN)
An easy way to rotate through several values is to use `cycler`, which takes any number of arguments and cycles through them.
```nunjucks
{% set cls = cycler("text-green-500", "text-blue-500") %}
{% for name in names %}
  <div class="{{ cls.next() }}">{{ name }}</div>
{% endfor %}

```

#### joiner([separator])
When combining multiple items, it's common to want to delimit them with something like a comma, but you don't want to output the separator for the first item. The `joiner` class will output `separator` (default `,`) whenever it is called, except for the first time.
```nunjucks
{% set comma = joiner() %}
{% for tag in tags -%}
  {{ comma() }} {{ tag }}
{%- endfor %}
```
If `tags` was `["food", "beer", "dessert"]`, the above example would output `food, beer, dessert`.

## Comments
You can write comments using `{#` and `#}`. Anything inside will be stripped out.

## Filters
Filters (also called transformations) can be applied on any value in order to modify it. Multiple filters can be chained using `|`
The following filters are available
### abs
Return the absolute value of the argument
```nunjucks
{{ -3|abs }}
```
Outputs `3`

### capitalize
Make the first letter uppercase, the rest lower case
```nunjucks
{{ "This Is A Test" | capitalize }}
```
Outputs `This is a test`

### default(default, [boolean])
If the argument is `undefined`, returns `default`, otherwise the argument. If `boolean` is true, any JavaScript falsy value (`false`, `""`, `[]`, `0`, etc.) will return `default`
```nunjucks
{{ name | default('John', true }}
```
Outputs `John` if `name` is undefined, or the value of `name` if it is defined.
> **Note:** the initial value of most fields will be undefined. However, if the user provides a value and then deletes it, the value **is** defined, but it equals to the empty string `""`. Therefore, if you want `default` to work consistently, you should provide `true` as the second parameter. 

### escape
Converts the characters `&`, `<`, `>`, `‘`, and `”` to HTML-safe sequences. Use this if you need to display text that might contain such characters in a html block. 

> **Note:** This filter is only needed in _html_ blocks, because they output html code as-is. Labels, help-text, placeholders, and any other block properties are escaped by default, so there's no need to use this filter on them.

```nunjucks
{{ "<html>" | escape }}
```
Outputs `&lt;html&gt;`

### first
Gets the first item in an array or the first letter of a string.
```nunjucks
{% set items = [1,2,3] %}
{{ items | first }}

{% set word = 'abc' %}
{{ word | first }}
```
Outputs 
```text
1

a
```

### float([default])
Converts a string to a floating point number. If the conversion fails returns `default` or nothing if `default` isn't provided.
```nunjucks
{{ "3.5" + 2 }}
{{ "3.5" | float + 2 }}
```
outputs
```text
3.52
5.5
```

### groupby(attribute)
Group a sequence of objects by a common `attribute`. Attribute can use dot notation to use nested attribute, like `date.year`.
```nunjucks
{% set items = [
        { name: 'james', type: 'green' },
        { name: 'john', type: 'blue' },
        { name: 'jim', type: 'blue' },
        { name: 'jessie', type: 'green' }
    ]
%}

{% for type, items in items | groupby("type") %}
    <b>{{ type }}</b> :
    {% for item in items %}
        {{ item.name }}
    {% endfor %}<br>
{% endfor %}
```
Outputs
```text
green : james jessie
blue : john jim
```

### int([default])
Converts a string to an integer. If the conversion fails returns `default` or nothing if `default` isn't provided.
```nunjucks
{{ "3.5" + 2 }}
{{ "3.5" | int + 2 }}
```
outputs
```text
3.52
5
```

### join([separator], [selector])
Concatenates strings in a sequence. 
* The `separator` between elements is an empty string by default, and it can be defined with an optional parameter.
* If the array is array of objects, the second parameter can be used to property of each item that will be picked
```nunjucks
{% set items = [
    { name: 'foo' },
    { name: 'bar' },
    { name: 'bear' }]
%}
{{ items | join(",", "name") }}
```
Outputs `foo,bar,bear`

### last
Get the last item in an array or the last letter if it's a string.
```nunjucks
{% set items = [1,2,3] %}
{{ items | last }}

{% set word = 'abc' %}
{{ word | last }}
```
Outputs
```text
3

c
```

### length
Return the length of an array or string, or the number of keys in an object.
```nunjucks
{{ [1,2,3] | length }}
{{ "test" | length }}
{{ {key: value} | length }}
```
Outputs
```text
3
4
1
```
### lower
Convert string to all lower case.
```nunjucks
{{ "fOObAr" | lower }}
```
Outputs `foobar`

### nl2br
Replace new lines with `<br />` HTML elements. Useful, for example, if you want to print the value of a textarea fields in an html block.
```nunjucks
{{ "foo\nbar"  | escape | nl2br }}
```
Outputs `foo<br />\nbar`

### random
Select a random value from an array.
```nunjucks
{{ [1,2,3,4,5,6,7,8,9] | random }}
```
Outputs a random value between 1-9.

### reject
Filters a sequence of objects by applying a test to each object, and rejecting the objects with the test succeeding.

If no test is specified, each object will be evaluated as a boolean.
```nunjucks
{% set numbers=[0, 1, 2, 3, 4, 5] %}

{{ numbers | reject("odd") | join }}
{{ numbers | reject("even") | join }}
{{ numbers | reject("divisibleby", 3) | join }}
{{ numbers | reject() | join }}
```
Outputs
```text
024
135
1245
0
```

### rejectattr(property)
Same as `reject`, but works on array of objects and test the value of the selected `property`.
```nunjucks
{% set foods = [{tasty: true}, {tasty: false}, {tasty: true}]%}
{{ foods | rejectattr("tasty") | length }}
```
Outputs `1`

### replace
Replace one item with another. The first item is the item to be replaced, the second item is the replaced value.
```nunjucks
{% set numbers = 123456 %}
{{ numbers | replace("4", ".") }}
```
Outputs `123.56`

### reverse
Reverse a string.
```nunjucks
{{ "abcdef" | reverse }}
```
Outputs `fedcba`

### round([digits])
Rounds a number. You can specify number of `digits` to leave after the decimal point.
```nunjucks
{{ 4.5 | round }}
{{ 4.12346 | round(4) }}
```
Outputs 
```text
4
4.1235
```

### select
Filters a sequence of objects by applying a test to each object, and only selecting the objects with the test succeeding. The opposite of `reject`.
If no test is specified, each object will be evaluated as a boolean.
```nunjucks
{% set numbers=[0, 1, 2, 3, 4, 5] %}

{{ numbers | select("odd") | join }}
{{ numbers | select("even") | join }}
{{ numbers | select("divisibleby", 3) | join }}
{{ numbers | select() | join }}
```
Outputs
```text
135
024
03
12345
```

### selectattr(`property`)
Same as `select`, but works on array of objects and test the value of the selected property.

```nunjucks
{% set foods = [{tasty: true}, {tasty: false}, {tasty: true}]%}
{{ foods | selectattr("tasty") | length }}
```
Outputs `2`

### sort(arr, reverse, caseSens, attr)
Sort arr. If `reverse` is true, result will be reversed. Sort is case-insensitive by default, but setting `caseSens` to `true` makes it case-sensitive. If `attr` is passed, will compare `attr` from each item.
```nunjucks
{% set posts = [
  { title: "Banana" },
  { title: "apple" },
  { title: "Cherry" }
] %}
{% for post in posts | sort(false, false, 'title') %}
  {{ post.title }}
{% endfor %}
```
Outputs
```text
apple
Banana
Cherry
```

### string 
Convert an object to a string.
```nunjucks
{{ 1234 | string | list | join("|") }}
```
Outputs `1|2|3|4`

### sum
Output the sum of items in the array.
```nunjucks
{{ [1,2,3] | sum }}
```
Outputs `6`

### title
Turns first letter of each word to uppercase
```nunjucks
{{ "foo bar baz" | title }}
```
Outputs `Foo Bar Baz`

### trim
Strip leading and trailing whitespace.
```nunjucks
{{ "  foo " | trim }}
```
Outputs `foo`

### truncate
Return a truncated copy of the string. The length is specified with the first parameter which defaults to `255`. If the second parameter is `true` the filter will cut the text at length. Otherwise, it will discard the last truncated word. If the text was in fact truncated it will append an ellipsis sign ("..."), or the string provided by the third parameter.
```nunjucks
{{ "foo bar" | truncate(5, true, "") }}
{{ "foo bar" | truncate(5) }}
```
Outputs
```text
foo b
foo...
```

### upper
Convert the string to upper case.
```nunjucks
{{ "foo" | upper }}
```
Outputs `FOO`

### wordcount
Count and output the number of words in a string.
```nunjucks
{{ "hello world" | wordcount }}
```
Outputs `2`