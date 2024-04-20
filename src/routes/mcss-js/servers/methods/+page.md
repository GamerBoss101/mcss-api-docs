---
title: Servers
description: Methods for the Servers class
---

<script>
    import Expander from '../../../lib/components/Expander.svelte';
    import Method from '../../../lib/components/Method.svelte';
    import Constructor from '../../../lib/components/Constructor.svelte';
    import Property from '../../../lib/components/Property.svelte';

    fm.anchors = [
        { slugId: "/", title: "Servers" },
		{ slugId: "server", title: "Server" }, 
		{ slugId: "serverbuilder", title: "ServerBuilder" }
    ];

    const getServerPara = [
		{ name: "serverId", type: "string", description: "The id of the server" },
		{ name: "filter", type: "ServerFilter|number", description: "The filter to use", opt: true }
	];

	const serversExecutePara = [
		{ name: "servers", type: "string[]", description: "The servers to execute the command on" },
		{ name: "command", type: "ServerAction|number|string[]", description: "The command to execute" }
	];

	const serverExecutePara = [
		{ name: "...command", type: "ServerAction|number|string[]", description: "The Command/s to execute" },
	];

	const serverEditPara = [
		{ name: "serverObj", type: "Server|object", description: "The object to edit server properties" },
	];

	const serverGetConsolePara = [
		{ name: "AmountOfLines", type: "number", description: "The amount of lines to get" },
		{ name: "Reversed", type: "boolean", description: "Whether to reverse the output" },
		{ name: "takeFromBeginning", type: "boolean", description: "Whether to take the output from the beginning" },
	];

	const serverIsConsoleOutdatedPara = [
		{ name: "secondLastLine", type: "string", description: "The second last line of the console" },
		{ name: "lastLine", type: "string", description: "The last line of the console" },
	];

	const serverBuilderPara = [
		{ name: "serverObj", type: "Server|object", description: "The object to edit server properties" },
	];
	

	const serverSetName = [ { name: "name", type: "string", description: "The name of the server" }];
	const serverSetDescription = [ { name: "description", type: "string", description: "The description of the server" }];
	const serverSetAutoStart = [ { name: "isSetToAutoStart", type: "boolean", description: "Whether the server is set to auto start" }];
	const serverSetForceSaveOnStop = [ { name: "forceSaveOnStop", type: "boolean", description: "Whether the server should force save on stop" }];
	const serverSetAllocatedMemory = [ { name: "javaAllocatedMemory", type: "int", description: "The java allocated memory of the server" }];


</script>

```js
import { Client } from '@mcserversoft/mcss-api';
const servers = new Client().servers;
```

<Expander id="servers" title="Methods" icon="twemoji:toolbox">
    <Method name="get" description="Used to get a server by its id" parameters={getServerPara} returns="Promise<ServerResponse>" />
	<Method name="execute" description="Mass Execute Command for all severs" parameters={serversExecutePara} returns="Promise<ServerResponse>" />
</Expander>

<h1 id="server" >Server Response Instance</h1>

```js
const server = await client.servers.get('serverId');
```

<Expander title="Methods" icon="twemoji:toolbox">
    <Method name="getStats" description="Used to get the stats of the server" returns="Promise<AppResponse>" />
	<Method name="getIcon" description="Used to get the icon of the server" returns="Promise<AppResponse>" />
	<Method name="execute" description="Used to execute a command on the server" returns="Promise<AppResponse>" parameters={serverExecutePara} />
	<Method name="edit" description="Used to edit the server" returns="Promise<AppResponse>" parameters={serverEditPara} />
	<Method name="getConsole" description="Used to get the console of the server" returns="Promise<AppResponse>" parameters={serverGetConsolePara} />
	<Method name="isConsoleOutdated" description="Used to check if the console is outdated" returns="Promise<AppResponse>" parameters={serverIsConsoleOutdatedPara} />
	<Property name="scheduler" type="Scheduler" description="Used to get information about the scheduler" link="/mcss-js/scheduler/methods/" />
	<Property name="backups" type="Backups" description="Used to get information about the backups" link="/mcss-js/backups/methods/" />
</Expander>

<h1 id="serverbuilder">ServerBuilder</h1>

```js
import { Server } from '@mcserversoft/mcss-api';
const serverBuilder = new Server();
```

<Expander title="Constructor" icon="lucide:box" expanded={true}>
    <Constructor name="constructor" description="Creates a new Server instance" parameters={serverBuilderPara} />
</Expander>
<br>
<Expander title="Methods" icon="twemoji:toolbox">
	<Method name="setName" description="Sets the name of the server" parameters={serverSetName} returns="Server" />
	<Method name="setDescription" description="Sets the description of the server" parameters={serverSetDescription} returns="Server" />
	<Method name="setAutoStart" description="Sets whether the server is set to auto start" parameters={serverSetAutoStart} returns="Server" />
	<Method name="setForceSaveOnStop" description="Sets whether the server should force save on stop" parameters={serverSetForceSaveOnStop} returns="Server" />
	<Method name="setAllocatedMemory" description="Sets the java allocated memory of the server" parameters={serverSetAllocatedMemory} returns="Server" />
</Expander>