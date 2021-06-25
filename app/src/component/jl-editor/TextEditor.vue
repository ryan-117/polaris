<template>
  <div>
    <span>text 编辑器</span>
    <el-form :model="config">
      <el-form-item label="显示文字">
        <el-input v-model="config.text"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TextEditor',
  computed: {
    ...mapGetters({
      config: 'selectedComponent'
    })
  }
};
</script>
