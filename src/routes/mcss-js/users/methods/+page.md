---
title: Users
---
The users class is used to get information about users. It is a sub class of the client class.

## Methods
- `client.users.get(): Promise<AppResponse>` 
  - Used to get all users
- `client.users.getUser(): Promise<AppResponse>` 
  - Used to get a user by their id
- `client.users.createUser(): Promise<AppResponse>` 
  - Used to create a user
- `client.users.deleteUser(): Promise<AppResponse>` 
  - Used to delete a user
- `client.users.updateUser(): Promise<AppResponse>` 
  - Used to edit a user
- `client.users.wipeSessions(): Promise<AppResponse>` 
  - Used to wipe all sessions of a user

## User Builder
You can also use a User Builder to create a user. The User Builder has the following methods:

### Constructor
- `username: string` - The username of the user
- `password: string` - The password of the user
- `passwordRepeat: string` - The password repeat of the user
- `enabled: boolean` - Whether the user is enabled
- `isAdmin: boolean` - Whether the user is an admin
- `hasAccessToAllServers: boolean` - Whether the user has access to all servers
- `customServerPermissions: object[]` - The custom server permissions of the user
    - `serverId` (required) : string 
        - `viewStats` (required) : boolean,
        - `viewConsole` (required) : boolean,
        - `useConsole` (required) : boolean,

### Methods
- `user.setUsername(username: string): User` 
  - Sets the username of the user
- `user.setPassword(password: string): User` 
  - Sets the password of the user
- `user.setPasswordRepeat(passwordRepeat: string): User` 
  - Sets the password repeat of the user
- `user.setEnabled(enabled: boolean): User`
  - Sets whether the user is enabled
- `user.setAdmin(isAdmin: boolean): User` 
  - Sets whether the user is an admin
- `user.setHasAccessToAllServers(hasAccessToAllServers: boolean): User` 
  - Sets whether the user has access to all servers
- `user.setCustomServerPermissions(customServerPermissions: object[]): User` 
  - Sets the custom server permissions of the user
- `addCustomServerPermission(serverId: any, viewStats: boolean, viewConsole: boolean, useConsole: boolean, useServerActions: boolean): User` 
  - Adds a custom server permission to the user