---
title: Examples
---

### Create a Task
```js
const ms = require('ms'); // npm install ms or pnpm install ms ( for the timing )
const { Task, ServerAction } = require('@mcserversoft/mcss-api');

let server = await client.servers.get('<server-id>');

let task = new Task()
    .setName('New Task')
    .setEnabled(true)
    .setTiming(true, ms('1h'))
    .addJob(ServerAction.Restart)

await server.scheduler.create(task);
// or
await server.scheduler.update(task);
```