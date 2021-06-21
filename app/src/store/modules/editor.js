import allConfigs from '@/component/jl-base/defaultConfig/index';

const state = {
  pageComponents: []
};

const getters = {
  pageComponents: s => s.pageComponents
};

const mutations = {
  addComponents(s, c) {
    const component = new allConfigs[c.name]();
    s.pageComponents.push(component);
  },
  initPage(s, reqData) {
    s.pageComponents = reqData;
  }
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};
