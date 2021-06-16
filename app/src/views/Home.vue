<template>
  <div id="home">
    <jl-button />
    <jl-img />
    <jl-text />
  </div>
</template>
<script>
import registerComponents from '@/plugins/registerComponents';

export default {
  created() {
    registerComponents.init(); // 初始化jl基本组件，注册为全局组件
  }
};
</script>
