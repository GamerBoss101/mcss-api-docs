---
title: Servers
---
The server is a class that is used to get information about a server/s. It is a sub class of the client class.

## Methods
- `client.servers.get(serverId: string): Promise<ServerResponse>` 
  - Used to get a server by its id

### Server Methods
A server response has 6 methods and 2 sub classes:
- `server.getStats(): Promise<AppResponse>` 
  - Used to get the stats of the server
- `server.getIcon(): Promise<AppResponse>` 
  - Used to get the icon of the server
- `server.execute(): Promise<AppResponse>` 
  - Used to execute a command on the server
- `server.edit(): Promise<AppResponse>` 
  - Used to edit the server
- `server.getConsole(): Promise<AppResponse>` 
  - Used to get the console of the server
- `server.isConsoleOutdated(): Promise<AppResponse>` 
  - Used to check if the console is outdated
- [`server.scheduler`](/mcss-js/scheduler/methods/) 
  - Used to get information about the scheduler
- [`server.backups`](/mcss-js/backups/methods/) 
  - Used to get information about the backups

## Server Builder
You can also use a Server Builder to edit the server. The Server Builder has the following methods:
- `server.setName(name: string): Server` 
  - Sets the name of the server
- `server.setDescription(description: string): Server` 
  - Sets the description of the server
- `server.setAutoStart(isSetToAutoStart: boolean): Server` 
  - Sets whether the server is set to auto start
- `server.setForceSaveOnStop(forceSaveOnStop: boolean): Server` 
  - Sets whether the server should force save on stop
- `server.setAllocatedMemory(javaAllocatedMemory: int): Server` 
  - Sets the java allocated memory of the server 

