---
sidebar_position: 1
title: Introduction
description: Introduction to Form Descriptors syntax
---

# Introduction to Form Descriptors

Form Descriptor (`.fd`) is a text based syntax that allows creating forms easily using text editor. Instead of building forms by hand in HTML or a GUI editor, you just write text. 

## Why build forms this way

While drag and drop makes a pleasant UI, it has a few drawbacks:
- **Accessibility** - it's not easy for everyone to work with drag-and-drop, it's not mobile friendly, and it gets really hard with large forms where you have to drag while scrolling.
- **Forms-as-code** - Drag-and-drop UIs can't easily be managed as code. With text-based form descriptors, developers can manage the forms in their own code base, keep revisions, and control the Publish flow.
- **AI flows** - LLMs are excellent with text. Text-based Form Descriptors are AI-friendly, and can be easily integrated into AI flows.
- **Complexity** - over time, as there are more and more features, it becomes harder to find where exactly in the UI you can use some feature. With text-based syntax, everything is right in front of your eyes - just edit the text

## Editing `.fd` in the Form Studio
The Form Studio provides an editor that helps you write Form Descriptors without any mistakes. It does so in multiple ways:
1. **Use the AI** at the top of the studio to give instructions to the agent, and get a fully functioning form built for you. You can have the agent create a new form with every prompt (the default), or edit the existing form. To make it edit the existing form, click the _settings_ icon at the toolbar, and toggle the switch from `Start from scratch` to `Edit existing form`
2. **To get a list of block templates**, type `/` at the beginning of any line in the editor. Use the arrows to select the template, and hit `tab` or `enter` to choose. The selected block will be added with all of its properties, and you can just modify the values or remove unneeded properties.
3. **Errors** will be marked in red, and will also appear at the bottom of the screen. You will not be able to publish a form as long as it has errors. 

The following sections will provide more details about:
* [Syntax](syntax.md) of form descriptors
* [Supported blocks](blocks.md) and field types
* [Validations](validations.md) 
* [Form logic](logic.md) and conditional fields