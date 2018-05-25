## neno

[![Build Status](https://travis-ci.org/m8r1x/neno.svg?branch=master)](https://travis-ci.org/m8r1x/neno)

> neno (pronounced /nɛnɒ/ `Not nino 😂😁😂`) is native for `word` in swahili.


### Project structure
> **Note:** This structure is subject to change at any moment.

```
// Every folder contains a `README` file that provides a brief description of what it contains.
.
|-- .github               /* github related docs */
|
|-- __tests__             /* tests */
|
|-- app                   /* Application entry point */
|   `-- main.js
|
|-- config                /* Project configurations go here */
|   `-- index.js
|
|-- public                /* Static resources */
|   `-- index.html
|
|-- src                   /* A lot of dev work happens here (Possible move to `app/src`)*/
|   |-- client            /* UI */
|   |   |
|   |   |-- components    /* General UI Elements that are required globally e.g container, button e.t.c */
|   |   |   `-- index.js
|   |   |
|   |   |-- styles        /* Stylesheets */
|   |   |   `-- index.css
|   |   |
|   |   |-- views         /* App layout and screens */
|   |   |   `-- index.js
|   |   |
|   |   `-- index.js
|   |
|   |-- db                /* Storage related stuff */
|   |   `-- index.js
|   |
|   |-- utils             /* Helpers required globally */
|       `-- index.js
.
```
