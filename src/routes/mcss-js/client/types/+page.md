---
title: Types
---

## App Response 
A Template for the response of the api
```ts
type AppResponse = {
    status: number
    data?: any
    error?: {
        message: string
    }
}
```

## Server Filters
```ts
enum ServerFilter {
    NONE = 0,
    MINIMAL = 1,
    STATUS = 2
}
```

## Server Count Filters
```ts
enum ServerCountFilter {
    NONE = 0,
    ONLINE = 1,
    OFFLINE = 2,
    BYSERVERTYPE = 3
}
```