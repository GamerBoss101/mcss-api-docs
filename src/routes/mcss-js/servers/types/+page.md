---
title: Types
---

## Server Response 
A Template for the response for the server methods
```ts
type ServerResponse = {
    status: number
    data?: any
    error?: {
        message: string
    }
    getStats?: () => Promise<AppResponse>
    getIcon?: () => Promise<AppResponse>
    execute?: (...command: any) => Promise<AppResponse>
    edit?: (obj: Server|object) => Promise<AppResponse>
    getConsole?: (AmountOfLines?: number, Reversed?: boolean, takeFromBeginning?: boolean) => Promise<AppResponse>
    isConsoleOutdated?: () => Promise<AppResponse>
    scheduler?: Scheduler
    backups?: Backups
}
```

## ServerActions
The actions that can be done on a server
```ts
const { ServerAction } = require('@mcserversoft/mcss-api');

ServerAction.InvalidOrEmpty // Does nothing
ServerAction.Start // Starts the server
ServerAction.Stop // Stops the server
ServerAction.Restart // Restarts the server
ServerAction.Kill // Kills the server
```

## GB Enum
An enum for the allocated memory
```ts
enum GB { 
    ONE = 1024,
    TWO = 2048,
    THREE = 3072,
    FOUR = 4096,
    FIVE = 5120
}
```

## KeepAlive Enum
An enum for the keep alive
```ts
enum KeepOnline {
    None = 0,
    Elevated = 1,
    Agressive = 2
}
```