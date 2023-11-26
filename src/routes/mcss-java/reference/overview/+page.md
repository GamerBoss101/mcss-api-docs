---
title: API Overview
---

The MCSS Java API library uses a single "Master" object which then spawns all other objects.

Here below a scheme of how the objects are structured:  


![API Structure](/flowchartapijava.svg)


:::note[Methods and fields of the objects]{icon=ph:code-bold}
All fields of the objects are private, and can only be accessed through the methods of the objects.  
Getters and setters must be used to access the fields of the objects.
:::