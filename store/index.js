import ccxt from 'ccxt';

export const state = () => ({
    exchanges: null,
    exchangeSelection: null,
    markets: null,
    pair: '',
    trades: [],
    pairs: [],
});

export const mutations = {
    //set exchanges property after loading from ccxt
    setExchanges(state, exchanges){
        state.exchanges = exchanges;
    },
    //Set user selected exchange
    setExchangeSelection(state, selection){
        state.exchangeSelection = selection;
    },
    setMarkets(state){
        state.markets = state.exchangeSelection.markets;
        state.pairs = Object.keys(state.exchangeSelection.markets);
    },
    setPair(state, pair){
        state.pair = pair;
    },
    setTrades(state, trades){
        state.trades = trades;
    },
    clearPair(state){
        state.pair = '';
        state.trades = [];
    }
};

export const actions = {
    //Load exchange array from ccxt
    loadExchanges(context) {
        const exchanges = ccxt.exchanges;

        if(exchanges)
            context.commit('setExchanges', exchanges);
        else
            console.log('Error retrieving exchanges...')
    },
    loadExchangeSelection(context, exchange){
        let selection = new ccxt[exchange] ({
            'enableRateLimit': true,
            'proxy': 'https://cors-anywhere.herokuapp.com/',
        });

        selection.loadMarkets()
            .then(() => {
                context.commit('setExchangeSelection', selection);
                context.commit('setMarkets');  
            })
    },
    loadTrades(context){
        let exchange = new ccxt[context.state.exchangeSelection.id]({
            'enableRateLimit': true,
            'proxy': 'https://cors-anywhere.herokuapp.com/',
        });

        console.log(context.state.exchangeSelection.id);

        if(exchange.has['fetchTrades']){
            exchange.fetchTrades(context.state.pair, undefined, 20)
                .then((trades) => {
                    context.commit('setTrades', trades);
                    console.log(trades.length);
                });
        
        }

    },
};
