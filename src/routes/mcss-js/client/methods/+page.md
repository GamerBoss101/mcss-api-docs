---
title: Client
---

<script>
    import Expander from '../../../lib/components/Expander.svelte';
    import Method from '../../../lib/components/Method.svelte';
    import Constructor from '../../../lib/components/Constructor.svelte';
    import Property from '../../../lib/components/Property.svelte';

    fm.anchors = [
        { slugId: "constructor", title: "Constructor" },
        { slugId: "properties", title: "Properties" },
        { slugId: "methods", title: "Methods" },
    ];

    const constructor = [
        { name: "ip", type: "string", description: "The ip of the server" },
        { name: "port", type: "number", description: "The port of the server" },
        { name: "apiKey", type: "string", description: "The api key of the server" },
        { name: "https", type: "boolean", description: "Whether the server is using https or not", opt: true },
    ];

    const getServersPara = [
        { name: "filter", type: "ServerFilter|number", description: "The filter to use", opt: true }
    ];

    const getServerCountPara = [
        { name: "filter", type: "ServerCountFilter|number", description: "The filter to use", opt: true  },
        { name: "serverType", type: "ServerType|string", description: "The server type to use", opt: true }
    ];

    const getSettingsPara = [
        { name: "deleteOldBackupsThreshold", type: "number", description: "The number of backups to keep" }
    ];

    const getServerPara = [
        { name: "id", type: "number", description: "The id of the server" }
    ];

    const getServerLogsPara = [
        { name: "id", type: "number", description: "The id of the server" },
        { name: "lines", type: "number", description: "The number of lines to get" }
    ];

    const setApiKeyPara = [
        { name: "apiKey", type: "string", description: "The api key of the server", opt: true }
    ];

    const setIpPara = [
        { name: "ip", type: "string", description: "The ip of the server", opt: true }
    ];

    const setPortPara = [
        { name: "port", type: "number", description: "The port of the server", opt: true }
    ];

    const setHttpsPara = [
        { name: "https", type: "boolean", description: "Whether the server is using https or not" }
    ];

</script>
<p>Main Class for the API Wrapper</p>

```ts
import { Client } from ' @mcserversoft/mcss-api';
```

<Expander id="constructor" title="Constructor" icon="lucide:box" expanded={true}>
    <Constructor name="constructor" description="Creates a new Client instance" parameters={constructor} />
</Expander>
<br>
<Expander id="properties" title="Properties" >
    <Property name="servers" type="Server" description="Used to get information about servers" link="/mcss-js/servers/methods/" />
    <Property name="users" type="User" description="Used to get information about users" link="/mcss-js/users/methods/" />
</Expander>
<br>
<Expander id="methods" title="Methods" icon="twemoji:toolbox">
    <Method name="getStats" description="Get the stats of the panel" emptyParameters={true} returns="Promise<AppResponse>" />
    <Method name="getServers" description="Get all servers" parameters={getServersPara} returns="Promise<AppResponse>" />
    <Method name="getServerCount" description="Get a server by id" parameters={getServerCountPara} returns="Promise<AppResponse>" />
    <Method name="getSettings" description="Set MCSS settings" returns="Promise<AppResponse>" />
    <Method name="updateSettings" description="Update the MCSS settings" parameters={getSettingsPara} returns="Promise<AppResponse>" />
    <Method name="setApiKey" description="Sets the API key" parameters={setApiKeyPara} />
    <Method name="setIp" description="Sets the IP" parameters={setIpPara} />
    <Method name="setPort" description="Sets the Port" parameters={setPortPara} />
    <Method name="setHttps" description="Sets the Http protocol" parameters={setHttpsPara} />
</Expander>
