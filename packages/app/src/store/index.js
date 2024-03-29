import Vue from 'vue';
import Vuex from 'vuex';
import editor from './modules/editor';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    editor
  }
});
