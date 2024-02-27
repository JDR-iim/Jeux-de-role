<template>
    <button id='button' class="mt-4">
        <p> {{title}}</p>
    </button>
</template>
    
<script>
export default {
    props: ['title']
}
</script>

<style scoped>
#button p{
    background: #0A98FF;
    text-decoration: none;
    color: #fff;
    padding: 7px 50px;
}
</style>