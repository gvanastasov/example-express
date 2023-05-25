# example-expressjs

## phases
1. installation of expressjs
2. install and configure testing framework - jest and supertest
3. identify different scenarios and build an example for each (see list below)

## example servers
1. added 'hello world' expressjs app
2. added ejs templated expressjs app, scaffolded by express generator cli. Note, this is a separate package that requires own dependency installation and script runner.
3. added expressjs app with basic routing examples, to demonstrate different HTTP verbs (namely GET, POST, PUT, PATCH, DELETE) handling on the same route path.
4. added expressjs app with static routing and virtual path prefix to all static resources.
5. added expressjs app that handles different response formatting based on content type accept header
6. added expressjs app that sets session cookie
7. added expressjs app that sets cookies
8. added expressjs app that allows binaries downloading
9. added expressjs app that uses ejs templates for the render engine
9.1. added expressjs app that uses md templates for the render engine
10. added expressjs app that enables authentication middleware, introduces restricted view, login basic flow with bcrypt and ejs as template engine
11. added expressjs app that handles various error scenarios, with focus on route handle chaining and error formatting (with verbosity)
12. added expressjs app that handles multiple routers, showcasing version handling via route segment
13. added expressjs app that handles model-view-controller (mvc) pattern. Used asp.net interface for reference of the api. Will probably move to its own package if needed for more emphisizing.
14. added expressjs app that handles request url segment parameters. Examples given are converting params to integer, extending request context with data.