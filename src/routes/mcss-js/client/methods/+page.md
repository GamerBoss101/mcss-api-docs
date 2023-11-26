---
title: Client
---
The client is the main class of the package. It is used to communicate with the server.

### Constructor
The constructor takes 4 parameters:
- `ip` - The ip of the server
- `port` - The port of the server
- `apiKey` - The api key of the server
- `https` - Whether the server is using https or not

### Methods
- `client.getStats(): Promise<AppResponse>`
  - Used to get the stats of the api
- `client.getServers(): Promise<AppResponse>` 
  - Used to get all servers created
- `client.getServerCount(): Promise<AppResponse>` 
  - Used to get the amount of servers created

The client has 2 sub classes:
- [`client.servers`](/mcss-js/servers/methods/) - Used to get information about servers
- [`client.users`](/mcss-js/users/methods/) - Used to get information about users