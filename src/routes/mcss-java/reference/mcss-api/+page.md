---
title: MCSSApi Object
---

## Constructor
```java
MCSSApi(String url, String token, /*optional*/ boolean selfSigned)
```
The URL is the IP:PORT combo of the MCSS API.  
The token is the API token that you can generate in the WebPanel section of the MCSS app.  
The selfSigned bool value should be set to true if the library should avoid checking the validity of the SSL certificate. (If it's self signed, set this to true.)

## Methods

:::important[Thrown Exceptions]
Just like the other classes, many if not all methods can throw exceptions.  
Follow your IDE recommendation to handle them.  
Every exception is listed [here](/mcss-java/reference/exceptions).
:::

### Getters

* `getInfo()` => `Info` (Object) 
  * Gets the MCSS information, creates the Info object and returns it. 
* `getServers()` => `ArrayList<Server>`  
  * Creates an ArrayList of every server which is accessible by the API token. 
* `getServerCount(ServerFilter filterType, String serverTypeID)` => `int` 
  * Returns the number of servers that match the filter.  
:::note[ServerFilter] 
The ServerFilter is an enum which can have the values of `ServerFilter.NONE`, `ServerFilter.ONLINE`, `ServerFilter.OFFLINE`, `ServerFilter.FILTER`. 
:::  
:::note[serverTypeID] 
The serverTypeId should only be added if the ServerFilter enum is set to `ServerFilter.FILTER`. This should be a VALID serverID. The method will then return the number of servers, online or offline, with the same server type as the provided serverID. 
:::  


### Execute on multiple servers
* `ExecuteMassServerAction(ServerAction action, Server... servers)` => `HashMap<String, Integer>` or `NULL`
  * Executes the provided ServerAction on the provided servers.
:::note[Return Object]
This method will return NULL if the action was executed successfully on every server provided.
The HashMap will otherwise contain the serverID as the key, and the status code of the request as the integer. (401, 404, etc)
:::
* `ExecuteMassCommands(String[] commands, Server... servers)` => `HashMap<String, Integer>` or `NULL`
  * Executes the provided commands on the provided servers.
:::note[Return Object]
This method will return NULL if the action was executed successfully on every server provided.
The HashMap will otherwise contain the serverID as the key, and the status code of the request as the integer. (401, 404, etc)
:::

### User-related methods
:::warning[Admin API token REQUIRED!] 
Every method in this category REQUIRES an admin API token.  
Executing them with a user API token will result in an APIUnauthorizedException.
:::
* `getUsers()` => `ArrayList<User> `
  * Creates an ArrayList of every Web Panel user.  

* `createUser(User PreparedUser, String password, String repeatPassword)` => `User` 
  * Creates a new user with the provided information.  

:::note[PreparedUser] 
The PreparedUser object is a manually-created User object. Create with the required specifications, then pass it to this method. 
:::
* `wipeSessions()` => `void`
  * Reset all web panel sessions, forcing all users to log in again.
