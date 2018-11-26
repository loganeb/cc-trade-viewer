import ccxt from 'ccxt';

export const state = () => ({
    exchanges: [],
    exchangeSelection: '',
    pair: '',
    trades: [],
});

export const mutations = {
    setExchanges(state, exchanges){
        state.exchanges = exchanges;
    },
    setExchangeSelection(state, exchange){
        state.exchangeSelection = exchange;
    }
};

export const actions = {
    loadExchanges({ commit }) {
        const exchanges = ccxt.exchanges;

        if(exchanges)
            commit('setExchanges', exchanges);
        else
            console.log('Error retrieving exchanges...')
    },
};