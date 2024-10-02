// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default function() {
  const Store = new Vuex.Store({
    state: {
      user: null // Here we will store the information of the logged in user
    },
    mutations: {
      // Mutation to set the user when he/she logs in
      setUser(state, user) {
        state.user = user;
      }
    },
    getters: {
      // Getter to get the nickname of the logged in user
      getNickname(state) {
        return state.user ? state.user.nickname : '';
      }
    }
  });

  return Store;
}