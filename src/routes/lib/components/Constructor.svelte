<script lang="ts">
    import Expander from './Expander.svelte';
    export let id: string|null = null;
    export let name: string;
    export let description: string;
    export let parameters: any[] = [];
</script>

<div id={id} class="constructor">
    <span style="font-family: 'mono', sans-serif;">{name + "(" + parameters.map((parameter) => parameter.name + ": " + parameter.type).join(", ") + ")"}</span>
    <div style="margin-left: 15px; margin-right: 15px;">
        <p>{description}</p>
        <Expander icon="lucide:book-type" title="Parameters">
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
                        <td style="max-width:175px;">{parameter.description || "none"}</td>
                    </tr>
                {/each}
            </table>
        </Expander>
    </div>
</div>

<style>

    .constructor {
        margin-top: 15px;
        width: 100%;
        padding: 10px;
    }

    .constructor span {
        color: rgb(255, 96, 96);
        padding: 5px;
        font-size: 1vw;
    }

    p {
        font-size: 18px;
    }

    table {
        width: 100%;
        margin-left: 25px;
        margin-right: 25px;
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

</style>