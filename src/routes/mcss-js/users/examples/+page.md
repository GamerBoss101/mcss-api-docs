---
title: Examples
---

```js
const { User } = require('@mcserversoft/mcss-api');

let newUser = new User()
    .setUsername('New User')
    .setPassword('password')
    .setPasswordRepeat('password')
    .setEnabled(true)
    .setAdmin(false)
    .setHasAccessToAllServers(false)
    .setCustomServerPermissions([
        {
            "<serverId>": {
                "viewStats": true,
                "viewConsole": true,
                "useConsole": true,
                "useServerActions": true
            }
        }
    ])
    .addServerPermission('<serverId>', true, true, true, true)

await client.users.createUser(newUser);
// or 
await client.users.updateUser(newUser);
```