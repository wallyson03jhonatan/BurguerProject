import { createStore } from 'vuex';

export default createStore({
   
    // bind data
    state:{
        burguers: [],
    },

    // methods
    actions:{},

    // computed
    getters:{},

    // callback of commit e track
    mutations: {
        setBurguers(state, burguers) {
            state.burguers = burguers; 
        }
    },
    
})