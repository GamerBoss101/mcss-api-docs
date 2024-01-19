<script lang="ts">
    import Icon from '@iconify/svelte';
    export let id: string|null = null;
    export let icon: any = null;
    export let title = 'Expand me';
    export let expanded = false;
    function toggle() { expanded = !expanded; }
</script>

<div id={id} class="collapsible">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="collapsiblebtn" on:click={toggle}>
        <span style="margin: auto !important;">
            {#if icon}
                <Icon icon={icon} />
            {/if}
            {title}
        </span>
        <span style="float: right;">{ expanded ? "-" : "+"}</span>
    </div>
    {#if expanded}
        <div class="content">
            <slot></slot>
        </div>
    {/if}
</div>

<style>
    .collapsible {
        color: white;
        cursor: pointer;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 20px;
        margin: 0;
    }

    .collapsiblebtn {
        background-color: #141313;
        padding: 10px;
        border-radius: 5px;
    }

    .collapsiblebtn:hover {
        border: solid 2px #ff5067;
    }

    .content {
        transition: max-height 0.2s ease-out;
        display: block;
    }
</style>

