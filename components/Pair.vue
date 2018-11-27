<template>
    <div>
        <h1 class="title">Pair</h1>
        <div>
            <div v-for="pair in pairs" :key="pair">{{ pair }}</div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        exchange(){
            return this.$store.state.exchangeSelection;
        },
        pairs(){
                return this.$store.state.pairs;
        },
    },
}
</script>

