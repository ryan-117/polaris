import allConfigs from '@/component/jl-base/defaultConfig/index';

const state = {
  pageComponents: [],
  selectedComponent: {}
};

const getters = {
  pageComponents: s => s.pageComponents,
  selectedComponent: s => s.selectedComponent
};

const mutations = {
  addComponents(s, c) {
    const component = new allConfigs[c.name]();
    s.pageComponents.push(component);
  },
  initPage(s, reqData) {
    s.pageComponents = reqData;
  },
  selectComponent(s, c) {
    s.selectedComponent = c;
  }
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};
