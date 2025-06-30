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
