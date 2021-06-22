<template>
  <div class="editing">
    <component
      :config="c"
      :is="c.name"
      :key="c.cid"
      v-for="c in pageComponents"
    />
  </div>
</template>
<script>
import registerComponents from '@/plugins/registerComponents';

export default {
  props: {
    pageComponents: {
      type: Array,
      default: () => []
    }
  },
  created() {
    registerComponents.init(); // 初始化jl基本组件，注册为全局组件
  }
};
</script>

<style lang="less" scoped>
.el-tabs {
  width: 375px;
}
.editing {
  position: relative;
  width: 375px;
  height: 667px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #d7dae2;
}
</style>
