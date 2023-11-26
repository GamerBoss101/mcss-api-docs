---
title: Quick start guide
---

## Install the API library

The library is hosted on the Maven Central Repository, which means that you can easily add it to your project using Maven or Gradle.

Remember to always use the latest version available, to allow for better compatibility.  
The latest version available right now is ![Latest Version Number](https://img.shields.io/github/v/release/mcserversoft-community/mcss-api-java?label=%20).  
:::info[Version number]
The version number in the Maven/Gradle configuration should NOT include the V
:::


### Maven

```xml
<dependency>
    <groupId>dev.le-app</groupId>
    <artifactId>mcss-api-java</artifactId>
    <version>1.2.1.1</version>
</dependency>
```

### Gradle

```groovy
dependencies {
  compile 'dev.le-app.mcss-api-java:1.2.1.1'
}
```

## Create a new instance of the API

:::caution[SSL is REQUIRED]
The API wrapper ONLY works with the panel SSL enabled.  
It's better to have even a self-signed certificate, than no certificate at all.
:::


### Create the API instance with a valid SSL certificate
(Remember to replace the API URL and the API token)

```java
MCSSApi api = new MCSSApi("localhost:25560", "aAbBcCdD1234");
```

### Create the API instance with a self-signed SSL certificate
This is the method that is most likely to be used, since MCSS automatically creates a self-signed certificate when you install it.
```java
MCSSApi api = new MCSSApi("localhost:25560", "aAbBcCdD1234", true);
```


## Get the server information

The API always returns an ArrayList of servers, which is populated with the Server object.  
If a token does NOT have access to any server, or to a specific server, that server is not included in the ArrayList.

:::info[Optimization]
Many if not all of the methods in the API execute a request to update the information in the backend.  
While some information, like the `.getName()` method for the servers, has to be updated manually with the `.updateInfo()` method, many of the `get***()` methods return the up-to-date information by sending an API request.  
Use caching where possible to avoid unnecessary requests and latency.
:::

```java
ArrayList<Server> servers = api.getServers();
```

:::important[Updating the ArrayList]
The returned ArrayList won't auto-update with new servers.  
If you add a new server to the panel, you will have to call the `getServers()` method again to get the updated list.
:::

### Use the obtained array list to get the information for a specific server

By looping through the ArrayList, it's possible to obtain information about a specific server. The code should look something like this:

```java
for (Server s : servers) {
    if (s.getName().equals("Server Name")) {
        //Do server specific code here
    }
}
```
:::info[Specific use case optimization]{icon=ic:sharp-rocket-launch}
Looping through the ArrayList every time you need to get information about a specific server is not the most efficient way to do it.  
This guide won't go in depth on how to optimize your code, as it's just a quick start guide. However you may be better off using a HashMap to store the servers, using as the Key the name (for example).
:::

## What next?

The sky is the limit!  
  
  
This is only a very quick guide on what to expect when coding with the MCSS Java API, it's not meant to be a full guide.  
You can find more information about the Library from the [Reference Overview](/mcss-java/reference/overview), which also includes a list of all the objects you'll encounter, and also from the JavaDoc.

Happy coding! 😄