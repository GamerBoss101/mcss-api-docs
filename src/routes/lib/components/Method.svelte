<script lang="ts">
    import Expansion from './Expander.svelte';
    export let name: string;
    export let description: string;
    export let parameters: any[] = [];
    export let returns: string = "void";
</script>

<div class="method">
    <span style="font-family: 'mono', sans-serif; font-size: 1vw; display:inline-block;">
        {name + "(" + parameters.map((parameter) => parameter.name + ": " + parameter.type).join(", ") + "): "}
        {#if returns == "void"}
            <span style="color: rgb(122, 122, 122);">void</span>
        {:else}
            {#if returns.includes("Promise")}
                <span style="color: rgb(72, 130, 255);">Promise&lt;{returns.split("<")[1].split(">")[0]}&gt;</span>
            {:else} 
                <span style="color: rgb(72, 130, 255);">{returns}</span>
            {/if}
        {/if}
    </span>
    <div style="margin-left: 25px; margin-right: 25px;">
        <p>{description}</p>
        {#if parameters.length == 0}
            <p style="font-family: 'mono', sans-serif; font-size: 1vw; display:inline-block;">
                <span style="color: rgb(122, 122, 122);">Parameters: </span>
                <span style="color: rgb(122, 122, 122);">none</span>
            </p>
        {:else}
            <Expansion icon="lucide:book-type" title="Parameters">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Optional</th>
                        <th>Description</th>
                    </tr>
                    {#each parameters as parameter}
                        <tr>
                            <td style="font-family: 'mono', sans-serif;">
                                {parameter.name || "none"}
                            </td>
                            <td>
                                <code>{parameter.type || "any"}</code>
                            </td>
                            <td>
                                <code>{parameter.opt ? "Yes" : "No"}</code>
                            </td>
                            <td>{parameter.description || "none"}</td>
                        </tr>
                    {/each}
                </table>
            </Expansion>
        {/if}
    </div>
</div>

<style>

    .method {
        display: block;
        margin-top: 15px;
        width: 100%;
        padding: 10px;
        border-bottom: solid 1px rgb(122, 122, 122);
    }

    .method span {
        color: white;
        padding: 5px;
        font-size: 18px;
    }

    p {
        font-size: 18px;
    }

    table {
        width: 100%;
        margin: auto;
    }

    th {
        font-size: 18px;
        font-weight: bold;
        padding: 10px;
    }

    td {
        border-top: solid 1px rgb(122, 122, 122);
        font-size: 16px;
        padding: 10px;
    }

    code {
        font-size: 14px !important;
    }

</style>