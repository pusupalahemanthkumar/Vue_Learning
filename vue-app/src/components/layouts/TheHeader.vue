<template>
    <header>
        <h1>{{ title }}</h1>
    </header>

</template>

<script>
export default {
    props: ['title']
}

</script>

<!-- Scoped Styling -->
<style scoped>
header{
    background: #1A1E1E;
    color:#fff;
    padding: 0.8rem;
    border-bottom: 1px solid #ddd;
}
header h1{
    text-align: center;
    margin: 0;
    color: #26B8AB;

}

</style>