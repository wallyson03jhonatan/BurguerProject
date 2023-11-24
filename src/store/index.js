import { createStore } from 'vuex';

export default createStore({
    // bind data
    state:{
        burguers: [],
        ingredients: [],
    },

    // computed
    getters:{},

    // methods
    actions: {
        async hadleStatus({ commit }, dataForm) {
            try {
                const request = await fetch(`//localhost:3000/burguers/${dataForm.id}`, {
                  method: "PUT",
                  headers: { "content-Type": "application/json" },
                  body: JSON.stringify(dataForm),
                });

                const response = await request.json();
        
                if (!response.id) throw new Error('Something was wrong!');
        
                commit('setBurguers', dataForm);
        
            } catch (error) {
                console.error('Something was wrong!');
            }
        },
        async sendBurguers({ commit }, dataForm) {
            try {
                const request = await fetch("//localhost:3000/burguers", {
                  method: "POST",
                  headers: { "content-Type": "application/json" },
                  body: JSON.stringify(dataForm),
                });

                const response = await request.json();
        
                if (!response.id) throw new Error('Something was wrong!');
        
                commit('setNewBurguers', dataForm);
        
            } catch (error) {
                console.error('Something was wrong!');
            }
        },
        async getBurguers({ commit }) {
            try {
              const request = await fetch("//localhost:3000/burguers");
              
              if (!request.ok) throw new Error('Something was wrong!');
      
              const response = await request.json();
              
              commit('setBurguers', response);
      
            } catch (error) {
              console.error('Something was wrong!');
            }
        },
        async getIngredients({ commit }) {
            try {
                const request = await fetch("//localhost:3000/ingredients");
        
                if (!request.ok) throw new Error('Something was wrong!');
        
                const response = await request.json();
        
                commit('setIngredients', response);
        
            } catch (error) {
                console.error('Something was wrong!');
            } 
        }
    },

    // callback of commit e track
    mutations: {
        setBurguers(state, burguers) {
            state.burguers = burguers;
        },
        setNewBurguers(state, burguer) {
            state.burguers.push(burguer); 
        },
        setIngredients(state, ingredients) {
            state.ingredients = ingredients;
        }
    },
})