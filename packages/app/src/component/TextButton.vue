<template>
  <span class="button" @click="$emit('click')">
    <slot></slot>
  </span>
</template>
<script>
export default {
  name: 'Textbutton'
};
</script>
<style lang="less" scoped>
.button {
  font-size: 12px;
  color: #409eff;
  cursor: pointer;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
}
</style>
