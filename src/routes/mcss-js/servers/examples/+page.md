---
title: Examples
---

```js
const { Server, GB } = require('@mcserversoft/mcss-api');

let newServer = new Server()
    .setName('New Server')
    .setDescription('This is a new server')
    .setAutoStart(true)
    .setForceSaveOnStop(true)
    .setAllocatedMemory(GB.ONE)

let server = await client.servers.get('server-id');
await server.edit(newServer);
```