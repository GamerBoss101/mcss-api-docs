---
title: Examples
---

```js
const { Backup, Compression } = require('@mcserversoft/mcss-api');

let server = await client.servers.get('<server-id>');

let backup = new Backup()
    .setName('New Backup')
    .setDestination(server.pathToFolder + '/backups')
    .setSuspend(false)
    .setDeleteOldBackups(false)
    .setCompression(Compression.HIGH)
    .setRunBackupAfterCreation(false)
    .setFileBlacklist([
        "file1",
        "file2"
    ])
    .setFolderBlacklist([
        "folder1",
        "folder2"
    ])

await server.backups.create(backup);
// or
await server.backups.update(backup);
```