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