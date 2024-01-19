<script lang="ts">
    export let name: string = "none";
    export let description: string = "none";
    export let type: string = "any";
    export let link: string = "/";
</script>

<div class="constructor">
    <span style="font-family: 'mono', sans-serif;">{name}: <a style="color: rgb(72, 130, 255);" href={link}>{type}</a></span>
    <div style="margin-left: 15px; margin-right: 15px;">
        <p>{description}</p>
    </div>
</div>

<style>

    .constructor {
        margin-top: 15px;
        width: 100%;
        padding: 10px;
        border-bottom: solid 1px rgb(122, 122, 122);
    }

    .constructor span {
        color: rgb(255, 96, 96);
        padding: 5px;
        font-size: 20px;
    }

    p {
        font-size: 18px;
    }

</style>