<template>
  <div class="editing">
    <component
      :config="c"
      :is="c.name"
      :key="c.cid"
      v-for="c in pageComponents"
      @click.native="selectComponent(c)"
    />
  </div>
</template>
<script>
import registerComponents from '@/plugins/registerComponents';
import { mapMutations } from 'vuex';

export default {
  props: {
    pageComponents: {
      type: Array,
      default: () => []
    }
  },
  created() {
    registerComponents.init(); // 初始化jl基本组件，注册为全局组件
    registerComponents.initEditor(); // 将jl基本组件对应的编辑器，注册为全局组件
  },
  methods: {
    ...mapMutations(['selectComponent'])
  }
};
</script>

<style lang="less" scoped>
.el-tabs {
  width: 375px;
}
.editing {
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  width: 375px;
  height: 667px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #d7dae2;
}
</style>
