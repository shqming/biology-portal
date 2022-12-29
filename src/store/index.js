import Vue from 'vue';
import Vuex from 'vuex';

import GenomeApi from '@/api/genome';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    genomeList: [],
  },
  mutations: {
    setGenomeList(state, genomeList) {
      state.genomeList = genomeList;
    },
  },
  actions: {
    async getGenomeList({ commit }) {
      const res = await GenomeApi.list();
      const genomeList = res.data.data;
      commit('setGenomeList', genomeList);
    },
  },
  modules: {
  },
});
