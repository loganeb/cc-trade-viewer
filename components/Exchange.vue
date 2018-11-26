<!--Exchange Section to search crypto exchanges-->

<template>
    <section>
        <div class="title">Exchange</div>
        <input
            class="search-box" 
            type="text" 
            v-model="search"
            placeholder="Search exchanges..."
        />
        <div v-show="searching" class="results">
            <div
                v-for="result in 
                results" :value="result" 
                :key="result">
                <a class="result" href="/#" @click="setSelection(result)">
                    {{ result }}
                </a>
            </div>
        </div>
    </section>
</template>


<script>
import ccxt from 'ccxt';

export default {
    data(){
        return {
            exchanges: [],
            search: '',
            results: [],
            searching: false,
            selection: '',
        }
    },
    created() {
        this.$store.dispatch('loadExchanges');
        this.exchanges = this.$store.state.exchanges;
    },
    methods: {
        setSelection(value){
            this.selection = value;
            this.search = value;
            this.$store.commit('setExchangeSelection', value);
        },
    },
    watch: {
        search(){
            this.results = this.exchanges.filter( exchange => exchange.includes(this.search.toLowerCase()));
            if(this.results.length > 0)
                this.searching = true;
            else
                this.searching = false;
        },
    },
}
</script>

<style>
    .search-box{
        min-width: 200px;
    }

    .results {
        max-height: 200px;
        overflow: auto;
    }

    .result{
        min-width: 200px;
        color: #000;
    }
</style>

