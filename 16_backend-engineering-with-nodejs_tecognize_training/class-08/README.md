# Backend-Engineering-with-Node.js

Backend Engineering with Node.js (Tecognize Training)

-   https://github.com/shihab4t/Backend-Engineering-with-Node.js

## Class 00

-   Task
    -   JavaScript Fundamentals
    -   Http Protocol
    -   API
-   Resources
    -   JavaScript Fundamentals: https://javascript.info

## Class 01

-   Topics
    -   JavaScript Fundamentals
-   Task
    -   Callback
    -   Promises
-   Resources
    -   [x] Javascript Promises and async/await Tutorial (Hussein Nasser): https://youtu.be/yTh6q-k2bEA
    -   [x] JavaScript Callback: https://javascript.info/callbacks
    -   [x] JavaScript Promise: https://javascript.info/promise-basics
-   Notes
    -   callback function
    -   "error-first callback" style
    -   "callback hell" / "pyramid of doom"
    -   promise, .then() / .catch() / .finally()

## Class 02

-   Topics
    -   Callback
    -   Promises
    -   Async/Await
    -   npm Package Manager
    -   "axios" external package
-   Task
    -   JavaScript Data Type
-   Resources
    -   JavaScript Data Types: https://javascript.info/data-types
    -   The Rick and Morty API: https://rickandmortyapi.com/documentation

## Class 03

-   Topics
    -   Node Module System
        -   CommonJS
        -   ECMAScript
    -   Object Destructuring
    -   Module Wrapper Function
    -   Type of Module
        -   Built-in module
        -   External Module
    -   "http" module
    -   Node Package Manager -> npm
    -   npmjs.org
    -   Major.Minor.Patch -> Semantic Versioning
-   Notes
    -   every js file -> module
    -   "global" Object
    -   "module" Object
    -   "module.exports" Object
    -   ```js
        (exports, require, module, __filename, __dirname) => {
            // Module code actually lives in here
            return module.exports;
        };
        ```
    -   package.json "type": "commonjs" or "module"
    -   "commonjs" -> Synchronous
    -   "module" -> Asynchronous
    -   npm Commands
        ```sh
        npm init -y
        npm --version  # npm -v
        npm install axios  # npm i axios
        npm install  # npm i
        npm list
        npm root
        npm uninstall axios  # npm un axios
        npm install moment@2.28.0
        npm install --save-dev nodemon  # npm i -D nodemon
        npm outdated
        npm update
        npm adduser
        npm login
        npm publish
        npm version patch
        npm version major
        npm view mongoose
        npm view mongoose dependencies
        npm view mongoose versions
        ```
    -   yarn commands
        ```sh
        yarn list
        yarn list --depth=0
        ```
    -   "dependencies" key in package.json
    -   '1.1.3' -> Major.Minor.Patch
    -   "devDependencies" key in package.json
    -   '^' -> Caret Sign -> Latest minor version
    -   '~' -> Tilde Sign -> Latest patch version
    -   '^1.1.3' -> '1.x'
    -   '~1.1.3' -> '1.1.x'
-   Resources
    -   Module wrapper: https://nodejs.org/api/modules.html#the-module-wrapper
    -   Determining module system: https://nodejs.org/api/packages.html#determining-module-system
    -   https://nodejs.org/api/modules.html#enabling
    -   https://nodejs.org/api/modules.html

## Class 04

-   Topics
    -   Client-Server Communication
        -   URL - Uniform Resource Locator
        -   Request Message
        -   Response Message
        -   HTTP - Hyper TExt Transfer Protocol
    -   Application Programming Interface (API)
    -   Representational State Transfer (REST)
        -   Resources (Nouns)
            -   Any Information provided by REST API
            -   Uniform Resource Indicator (URI)
        -   Methods (Verbs)
            -   Actions to be Performed on resources
        -   Perform CRUD operations
        -   Representation
            -   How data is REpresented or returned to the clint
            -   JSON
    -   Node builtin "http" module
    -   Express Framework
-   Notes

    -   HTTP Request Message

        ```
        POST /index.html HTTP/1.1                  ----------Start Line
        Host: www.tutorialspoint.com               ------|
        Content-Type: application/json                   |
        sec-ch-ua-platform: "Linux"                      |
        Content-Length: length                           |---HTTP Headers
        Accept-Language: en-us                           |
        Accept-Encoding: gzip, deflate                   |
        Connection: Keep-Alive                     ------|
                                                   ----------Empty Line
        {                                          ------|
           "name": "Shihab Mahamud",                     |
           "age": 19                                     |---body
           "birth": 26                                   |
        }                                          ------|
        ```

    -   HTTP Response Message
        ```
        HTTP/1.1 201 Accepted                        ----------Start Line
        Date: Mon, 27 Jul 2009 12:28:53 GMT          ------|
        Server: Apache/2.2.14 (Win32)                      |
        sec-ch-ua-platform: "Linux"                        |
        Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT       |---HTTP Headers
        Content-Length: 88                                 |
        Content-Type: application/json                     |
        Connection: Closed                           ------|
                                                     ----------Empty Line
        {                                            ------|
           "msg": "created successfully"                   |---body
        }                                            ------|
        ```
    -   URI Examples
        -   http://www.something.com/book/
        -   http://www.something.com/book/4
        -   http://www.something.com/author/
    -   CRUD operations
        -   HTTP POST => CREATE
        -   HTTP GET => READ
        -   HTTP PUT => UPDATE
        -   HTTP DELETE => DELETE

-   Resources
    -   HTTP response status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
    -   HTTP request methods: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
    -   https://websniffer.cc/

## Class 05

-   Topics
    -   CRUD application development
    -   express.router()
-   Notes
    -   [x] Spread Operator
    -   function chaining
    -   higher order function: forEach(), map(), filter()
-   Resources
    -   [x] Spread Operator: https://www.programiz.com/javascript/spread-operator
    -   Javascript function chaining: https://medium.com/technofunnel/javascript-function-chaining-8b2fbef76f7f#:~:text=Function%20chaining%20is%20a%20pattern,code%20and%20means%20less%20redundancy

## Class 06

-   Topics
    -   Middlewares
    -   Request/Response Cycle
    -   Type of Middlewares
        -   Application-level middleware
        -   Router-level middleware
        -   Error-handling middleware
        -   Built-in middleware
        -   Third-party middleware
-   Notes
    -   req, res object
-   Resources
    -   Using middleware: https://expressjs.com/en/guide/using-middleware.html
