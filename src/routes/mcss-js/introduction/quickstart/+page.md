--- 
title: QuickStart
---

## Install
Run one of the following command  
Depend on what package manager you are using

@install-pkg(@mcserversoft/mcss-api,install)

## Usage

```js
const mcss = require('@mcserversoft/mcss-api');

let port = 80; // The port of your server
let https = true; // If you are using https or not

const client = mcss.Client("<ip>", port, "<apiKey>", https);

(async () => {
    let servers = await client.getServers();
    
    servers.forEach(server => {
        console.log(server.name);
    });
    
})();
```