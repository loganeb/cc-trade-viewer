<template>
    <div class="trade-component">
        <h1 class="component-title">Trades</h1>
        <div class="trades">
            <div v-if="pairSelected" class="columns is-0 is-variable is-mobile">
                <div class="column size">
                    <h2 class="component-subtitle">Size</h2>
                    <div class="data-column"  v-for="trade in trades" :key="trade.id">
                        {{ trade.amount.toPrecision(5) }}
                    </div>
                </div>
                <div class="column price">
                    <h2 class="component-subtitle">Price({{ pair.substr(pair.lastIndexOf('/')+1) }})</h2>                    
                    <div class="data-column" v-for="trade in trades" :key="trade.id">
                        {{ trade.price.toPrecision(6) }}
                    </div>
                </div>
                <div class="column time">
                    <h2 class="component-subtitle">Time</h2>
                    <div class="data-column" v-for="trade in trades" :key="trade.id">
                        {{ trade.datetime.substr(11,8) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        trades(){
            return this.$store.state.trades;
        },
        pair(){
            return this.$store.state.pair;
        },
        pairSelected(){
            return this.$store.state.pair.length > 0;
        }
    }
}
</script>

<style>

.trade-component{
    height: 600px;
    max-height: 100vh;;
    padding: 20px;
    background:  rgb(20, 190, 212);
    overflow: auto;
    margin: 5px;
    margin-top: 20px;
    border-radius: 5px;
}

.component-subtitle{
    font-size: 20px;
}

.trades{
    color: #fff;
}

.size{
    text-align: left;
}

.price{
    text-align: center;
}

.time{
    text-align: right;
}

.data-column:nth-child(odd){
    background: rgb(18, 155, 173);
}

</style>


