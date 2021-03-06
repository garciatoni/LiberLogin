import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
axios.defaults.withCredentials = true;
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        auth: false,
        token: sessionStorage.getItem('token'),
        politica: false

    },
    mutations: {
        SET_USER(state, user, token) {
            state.user = user;
            state.auth = Boolean(user);
            state.token = token;
        },
        SET_POLITICA(state, politica) {
            state.politica = politica;
        },
        //Mutación que verifica si el usuario esta conectado e inicializa el store de vuex.
        login(state, token) {
            window.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            axios.get('/api/user').then((res) => {
                let user = res.data;
                state.user = user;
                state.auth = Boolean(user);
                state.token = token;
                sessionStorage.setItem('token', token);

            }).catch(() => {
                console.log('fallo al logear');
                // this.$store.commit("SET_USER", null, null)
            })
        }
    },
    getters: {

    },
    actions: {
        getUser({
            state
        }) {
            return state.user.id
        }
    },
    modules: {}
})

export default store;