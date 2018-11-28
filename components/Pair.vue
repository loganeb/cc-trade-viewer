<template>
    <div class="pair-component">
        <h1 class="component-title">Pair</h1>
        <input
            class="search-box" 
            type="text" 
            placeholder="Search asset pairs..." 
            v-model="search"
            @focus="searching = true"
        />
        <div v-show="searching" class="results">
            <div v-for="result in results" :key="result">
                <a 
                    class="result" 
                    href="/#" 
                    @click="setSelection(result)"
                >
                    {{ result }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            selection: '',
            results: [],
            search: '',
            searching: false
        }
    },
    computed:{
        exchange(){
            return this.$store.state.exchangeSelection;
        },
        pairs(){
                return this.$store.state.pairs;
        },
    },
    watch: {
        search(){
            this.results = this.pairs
                            .filter(pair => pair.includes(this.search.toUpperCase()));
        }
    },
    methods: {
        setSelection: function(value){
            this.selection = value;
            this.search = value;
            this.$store.commit('setPair', value);
            this.searching = false;
            this.loadTrades();
        },

        //Get trades from exchange every 5 seconds, stop if new exchange selected
        loadTrades: function(){
            var self = this;
            let loop = setInterval(function(){
                if(self.$store.state.pair === '')
                    clearInterval(loop);
                else
                    self.$store.dispatch('loadTrades');
            }, 5000);
        },
    }
}
</script>

<style>
.pair-component{
    height: 100vh;
    padding: 20px;
    background:  rgb(15, 150, 168);
    margin: 5px;
    border-radius: 5px;
}
</style>


