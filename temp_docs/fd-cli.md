---
sidebar_position: 3
title: Form-Data CLI
description: Form-Data CLI guide
---

# Form-Data CLI (`fd`) 

Using the CLI, you can do the following:
* **Scaffold**: Quickly create a new project
* **Authentication**: Login to Form-Data.com and choose a workspace
* **Form Management**: Create, deploy, and manage form definitions
* **Environment Support**: Switch between different environments (development, staging, production)
* **Synchronization**: Sync form configurations between environments
* **Live Preview**: Preview your forms locally before deployment

## Creating a new project
This command is useful if you want to have a project for managing your standalone forms (vs. having is as part of your website of application).

```bash
# npm create
npm create @formdata/project@latest my-project

# or, using npx
npx @formdata/create-project my-project
```
:::tip
If you want to manage your forms as part of an existing project, don't use this command
:::

#### What this tool does

When you run this tool, it will:

1. Create a new directory for your project
2. If you're already logged in to Form-Data in your CLI:
    - Display a list of workspaces to choose from
    - Allow you to log in with a different account
3. If you're not logged in, guide you through the login process
4. Create the `form-data.config.json` file with the selected workspace
5. Create the `forms` folder for your form definitions
6. Install necessary dependencies
7. Provide instructions for next steps

#### Project Structure

The created project will have the following structure:

```
my-project/
├── package.json
├── form-data.config.json
└── forms/
```

The `forms` folder will be the home for your `.fd` files.

## Login
This command will open a browser window for login, which will also let you choose the workspace that you'd want to use from the cli. 

```bash
fd login
```

This command gets no parameters. After completing the login, you should see:
1. `form-data.config.json` file will be created in the current directory, if it didn't exist before. Inside, you should see a `workspace` property which will point to the workspace which you have selected.
2. `credentials.json` file will be created in your user's home directory. On Mac, this is normally at `~/.form-data/credentials.json`, and on Windows it is normally at `%USERPROFILE%\.form-data\credentials.json`. Inside, you should find a refresh token and access token for each of the workspaces that you've logged into.

## Init
