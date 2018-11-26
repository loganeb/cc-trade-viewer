export const state = () => ({
    exchange: '',
    pair: '',
    trades: [],
    test: 'TEST',
});

export const mutations = {
    setExchange(state, exchange){
        state.exchange = exchange;
    }
}