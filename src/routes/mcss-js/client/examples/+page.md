---
title: Examples
---

### Create a client
```js
const { Client } = require('@mcserversoft/mcss-api');

/**
 * @param {string} ip 
 * @param {number} port 
 * @param {string} apiKey
 * @param {boolean} https
 */
const client = new Client('localhost', 8080, 'key', false);
```