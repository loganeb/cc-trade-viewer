<template>
    <div>
        <h1 class="title">Pair</h1>
        <div>
            <h2>{{ exchange }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        exchange(){
            return this.$store.state.exchange;
        }
    }
}
</script>

