---
sidebar_position: 1
title: Introduction
description: Introduction to Form-Data developer tools
---

# Introduction to Form-Data CLI

The Form-Data CLI (`fd`) is a powerful command-line tool to create, manage, and deploy forms for your website or application, using simple `.fd` files that describe your forms as code.

Instead of building forms by hand in HTML or a GUI editor, you define them declaratively in `.fd` files and use the CLI to handle the rest - from previewing locally to deploying live forms in production.

## What you can do with the CLI

- **Generate forms** as `.fd` files, starting from templates
- **Preview forms live** with hot reloading in development
- **Deploy forms** to production
- **Promote forms** across environments (e.g., staging → prod)
- **Sync form settings** like spam filtering, email replies, and more
- **Connect your project to a workspace** and store the credentials in your environment

## How it works
1. You use the CLI to **login to Form-Data and choose a workspace**
2. You use the CLI to **create a new project** or add Form-Data to an existing code base.
2. You use the CLI to **create new `.fd` form files**, starting from one of the templates.
3. You edit the form files. You can **live-preview** the form in the browser while editing.
4. You use the CLI to **deploy the forms** to Staging or production.
5. You get a **live URL** that you can share with your customers and start collecting responses.
6. Optionally, you can **embed the live form into your website** using an embed script, or using Vue, React or Svelte components. 

## Why use this?

* Maintain forms alongside your app or site code
* Easily promote form changes across environments
* Track form history with version control
* Automate form deployment in CI/CD pipelines

Form-Data CLI fits naturally into modern developer workflows and pairs seamlessly with frameworks like React, Vue, and Svelte.
