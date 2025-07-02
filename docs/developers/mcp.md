---
sidebar_position: 6
title: MCP Server
description: MCP Server
---

# Form-Data MCP server

Form-Data MCP server exposes tools to help users create forms in AI Agent flows. 
There are 2 tools exposed:
1. Create Form Descriptor (`createFormDescriptor`) - returns the content of [`.fd` file](../form-descriptors/syntax.md) based on a prompt and some additional optional parameters. This is useful for code-generating AI tools (like Claude Code and Cursor) that want to maintain `.fd` files as part of the code base. The forms can then be deployed using [`fd` cli](./quickstart.md).  
2. Create Form Studio Link (`createFormStudioLink`) - creates a form, and returns a link to [Form Studio](https://studio.form-data.com) that opens with that form in edit mode. This is useful for AI assistants (like Claude Desktop) that want to help users complete tasks such as "I need a form for...". In this flow there is no code base, to users are directed to [Form-Data Studio](https://studio.form-data.com) where they get the form that they have requested, and they can complete the flow by publishing it from the UI. 

The MCP server itself is open (auth-less). Users can create `.fd` files and studio links without restriction. Only deployment using the cli requires authentication.

## Example flows

### `createFormDescriptor`

A complete flow that involves using this tools will look like this:
1. The user is using a code assistant to build a website
2. The user asks to add a contact form to the website
3. The agent decides to use Form-Data
4. The agent installs [Form-Data cli tool](./quickstart.md by running `npm install -g @form-data/cli`
5. The agent executes `fd login` and a browser window is opened for the user to authenticate
6. The agent executes `fd init`. A `forms` folder is created, as well as `formdata.config.json` file.
7. The agent calls the `createFormDescriptor` tool in the mcp server, and instruct it to create a contact form. 
8. The mcp server returns the content of the `.fd` file. The agent saves it into `/forms/contact.fd`
9. The agent executes `fd form add --name contact`. The user will be asked to connect that form descriptor to a form in Form-Data, or create a new one. 
10. The agent executes `fd deploy`, and the form gets published in its own URL.

In consecutive edit operations of the form, only steps 7-8 and 10 needs to be executed.

### `createFormStudioLink`

A complete flow that involves using this tools will look like this:
1. The user is using an assistant for daily tasks
2. The user asks to create a user-satisfactory survey
3. The agent decides to use Form-Data
7. The agent calls the `createFormStudioLink` tool in the mcp server, and instruct it to create a user-satisfactory survey.
8. The mcp server returns a link to [Form-Data Studio](https://studio.form-data.com) with the survey in edit mode.
9. The agent gives the user that link, and instruct the user to publish the form from within the studio. 
10. The user opens the studio link. They can edit the form, or use the AI tool available inside the studio to continue editing using prompts. 
11. The user clicks `Publish` and being instructed on how to complete the flow in 2 clicks (register + choose form name)

## MCP Server Endpoint
The server is available at `https://mcp.form-data.com/sse`