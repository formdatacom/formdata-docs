---
sidebar_position: 5
---

# Using AJAX

There are 2 ways in which you can submit a form:
* As a `POST` request that changes the browser's address
* As an AJAX request (`fetch` or `XHR`) that happens asynchronously

The second method, since you control when the request is being sent and how to handle the response, you can create a more customized user experience.

AJAX requests are sent using the browser's `fetch` API, or the older `XHR` API. There are also some libraries that create a wrapper around these APIs, such as JQuery and Axios. 

Form-Data accepts AJAX requests, as long as the `Content-Type` header is set to `application/json`, and the body is indeed a valid JSON. 
The response will also be a JSON object, with a single attribute:
```json
{ "success": true }
```

Refer to the code samples section to see how to use it
