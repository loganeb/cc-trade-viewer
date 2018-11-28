<!--Exchange Section to search crypto exchanges-->

<template>
    <div class="exchange-component">
        <div class="component-title">Exchange</div>
        <input
            class="search-box" 
            type="text" 
            v-model="search"
            placeholder="Search exchanges..."
            @focus="searching = true"
        />
        <div v-show="searching" class="results">
            <div
                v-for="result in 
                results" :value="result" 
                :key="result">
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
import ccxt from 'ccxt';

export default {
    data(){
        return {
            search: '',
            results: [],
            searching: false,
            selection: '',
        }
    },
    created() {
        this.$store.dispatch('loadExchanges');
    },
    computed: {
        exchanges(){
            return this.$store.state.exchanges;
        }
    },
    methods: {
        setSelection: function(value){
            this.selection = value;
            this.search = value;
            this.results = [];
            this.$store.commit('clearPair');
            this.$store.dispatch('loadExchangeSelection', value);
            this.searching = false;
        },
    },
    watch: {
        search(){
            this.results = this.exchanges.filter( exchange => exchange.includes(this.search.toLowerCase()) && !exchange.apiKey);
        },
    },
}
</script>

<style>
    .exchange-component{
        height: 100vh;
        margin: 5px;
        padding: 20px;
        background:  rgb(11, 111, 124);
        border-radius: 5px;
    }

    .component-title{
        font-size: 40px;
        color: #fff;
    }

    .search-box{
        min-width: 200px;
        border-radius: 5px;
        padding: 3px;
    }

    .results {
        min-width: 200px;
        max-height: 200px;
        overflow: auto;
    }

    .result{
        min-width: 200px;
        color: #fff;
    }
</style>

