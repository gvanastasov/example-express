# **Example ExpressJS**

This repository demonstrates common setup and use cases of Express.js applications. Feel free to explore each example to learn about various use cases and best practices for Express.js applications.

## **Phases**

1. Installation of Express.js: Provides instructions on how to install Express.js, including any required dependencies.
2. Install and Configure Testing Framework - Jest and Supertest: Guides you through the installation and configuration process for the Jest and Supertest testing frameworks, enabling you to write and run tests for your Express.js applications.
3. Identify Different Scenarios and Build an Example for Each: In this phase, we identify various scenarios commonly encountered in Express.js development and provide an example application for each scenario. See the list below for details.

## **Example Applications**
<details>
    <summary>Hello World</summary>  
    A basic "Hello World" application built using Express.js. It serves as a starting point to ensure your Express.js installation is working correctly.

```sh
# run
node ./src/1_hello_world/bin/www
```
</details>

<details>
    <summary>
        <ins>Express Generator</ins>
    </summary>
    An Express.js application that uses EJS (Embedded JavaScript) templates. This example demonstrates how to generate dynamic HTML content using templates and showcases the scaffolding capabilities of the Express Generator CLI.

```sh
# run
node ./src/2_generator/bin/www
```
</details>

<details>
    <summary>
        <ins>Basic Routing</ins>
    </summary>
    This example showcases different HTTP verbs (GET, POST, PUT, PATCH, DELETE) and how they can be handled in Express.js. It provides a clear understanding of routing and request handling in an Express.js application.

```sh
# run
node ./src/3_basic_routing/bin/www
```
</details>

<details>
    <summary>
        <ins>Static Routing and Virtual Path Prefix</ins>
    </summary>
    This example demonstrates how to serve static files, such as CSS and JavaScript, using Express.js. It also shows how to add a virtual path prefix to all static resources for better organization and modularity.

```sh
# run
node ./src/4_static_routing/bin/www
```
</details>

<details>
    <summary>
        <ins>Content Negotiation</ins>
    </summary>
    Content negotiation is an important aspect of building APIs. This example illustrates how to handle different response formatting based on the "Content-Type" accept header. It allows your application to respond with the appropriate format, such as JSON or XML, based on the client's preference.

```sh
# run
node ./src/5_content_type_negotiation/bin/www
```
</details>

<details>
    <summary>
        <ins>Session Cookie</ins>
    </summary>
    Session management is essential for many web applications. This example shows how to set a session cookie in an Express.js application, enabling you to store and retrieve user-specific data across multiple requests.

```sh
# run
node ./src/6_cookie_session/bin/www
```
</details>

<details>
    <summary>
        <ins>Cookies</ins>
    </summary>
    Cookies are commonly used for maintaining user sessions and storing small amounts of client-side data. This example demonstrates how to set and read cookies in an Express.js application, providing a foundation for implementing features like user authentication and personalization.

```sh
# run
node ./src/7_cookie/bin/www
```
</details>

<details>
    <summary>
        <ins>Downloading Binaries</ins>
    </summary>
    In some cases, you may need to serve binary files, such as images or documents, from your Express.js application. This example illustrates how to set up a route that allows users to download binary files stored on your server.

```sh
# run
node ./src/8_download/bin/www
```
</details>

<details>
    <summary>
        <ins>EJS Templates</ins>
    </summary>
    EJS is a popular templating engine for Express.js applications. This example shows how to use EJS templates as the rendering engine, allowing you to dynamically generate HTML content with embedded JavaScript logic.

```sh
# run
node ./src/9_template_ejs/bin/www
```
</details>

<details>
    <summary>
        <ins>Markdown Templates</ins>
    </summary>
    Markdown is a lightweight markup language often used for documentation and plain-text formatting. This example demonstrates how to use Markdown templates as the rendering engine in an Express.js application, providing a way to generate HTML content from Markdown files.

```sh
# run
node ./src/9.1_template_md/bin/www
```
</details>

<details>
    <summary>
        <ins>Authentication Middleware</ins>
    </summary>
    Security is crucial for web applications, and this example introduces an authentication middleware that protects certain routes. It demonstrates a basic login flow using bcrypt for password hashing and EJS as the template engine for rendering views.

```sh
# run
node ./src/10_authentication/bin/www
```
</details>

<details>
    <summary>
        <ins>Error Handling Scenarios</ins>
    </summary>
    Error handling is a critical aspect of application development. This example focuses on various error scenarios and showcases how to handle them effectively in an Express.js application. It emphasizes route handle chaining and error formatting with verbosity, enabling you to create robust and user-friendly error handling mechanisms.

```sh
# run
node ./src/11_error_pages/bin/www
```
</details>

<details>
    <summary>
        <ins>Multiple Routers</ins>
    </summary>
    As your application grows, you may need to split your routes into multiple routers for better organization and maintainability. This example demonstrates how to handle multiple routers in an Express.js application and showcases version handling using route segments.

```sh
# run
node ./src/12_multi_routing/bin/www
```
</details>

<details>
    <summary>
        <ins>Model-View-Controller (MVC) Pattern</ins>
    </summary>
    The MVC pattern is a popular architectural design pattern for developing scalable web applications. This example implements the MVC pattern in an Express.js application, taking inspiration from the ASP.NET interface. If needed, this example can be moved to its own package for further emphasis and modularity.

```sh
# run
node ./src/13_mvc/bin/www
```
</details>

<details>
    <summary>
        <ins>Request URL Segment Parameters</ins>
    </summary>
    URL segment parameters are commonly used to pass dynamic data to server routes. This example provides various scenarios for handling URL segment parameters, such as converting them to integers or extending the request context with additional data.

```sh
# run
node ./src/14_params/bin/www
```
</details>

<details>
    <summary>
        <ins>Resource Pattern Application</ins>
    </summary>
    The resource pattern application is a recommended approach for designing RESTful APIs. This example adds support for the resource pattern application in an Express.js application and showcases a simple object designed following this pattern. For more information on the resource pattern, refer to the [Google Cloud API Design Guide](https://cloud.google.com/apis/design/resources).

```sh
# run
node ./src/15_resource_pattern/bin/www
```
</details>

<details>
    <summary>
        <ins>Mapping Routing via Nested Properties</ins>
    </summary>
    Sometimes, you may have complex routing requirements that involve nested properties. This example demonstrates how to map routes using nested properties, allowing for a more organized and flexible routing structure in your Express.js application.

```sh
# run
node ./src/16_route_map/bin/www
```
</details>

<details>
    <summary>
        <ins>Global, Route, and Chained Middlewares</ins>
    </summary>
    Middlewares are an essential part of Express.js applications, and this example showcases different types of middlewares. It covers global middleware, route-specific middleware, and chained middleware, providing a comprehensive understanding of how to implement and use them effectively.

```sh
# run
node ./src/17_route_middleware/bin/www
```
</details>

<details>
    <summary>
        <ins>Multiple Engines</ins>
    </summary>
    Express.js supports multiple template engines, and this example demonstrates how to use multiple engines and merge them seamlessly in your application. It allows you to leverage the strengths of different template engines for specific use cases, providing flexibility in rendering dynamic content.

```sh
# run
node ./src/18_multi_template/bin/www
```
</details>

<details>
    <summary>
        <ins>Multiple Versions of Web API and Swagger Configuration</ins>
    </summary>
    In API development, managing multiple versions of an API is common. This example exposes multiple versions of a web API (v1 and v2) in an Express.js application. It also configures Swagger-UI and Swagger-JSDocs to display both versions of the API in the Swagger documentation, making it easier for developers to explore and interact with the different versions.

```sh
# run
node ./src/19_swagger/bin/www
```
</details>

<details>
    <summary>
        <ins>Logging</ins>
    </summary>
    Showcasing logging middleware for Express.js, namely Morgan, that simplifies the process of logging HTTP requests and responses. It can generate logs with different formats, including predefined formats like "dev" for development environments and "combined" for production environments.

```sh
# run
node ./src/20_logging/bin/www
```
</details>

## **License**

This repository is licensed under the [MIT](./LICENSE.md) License.
