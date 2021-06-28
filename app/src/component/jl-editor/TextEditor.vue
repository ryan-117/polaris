<template>
  <div>
    <el-form :model="config" size="small" :inline="true">
      <el-form-item label="文字内容">
        <el-input v-model="config.text"></el-input>
      </el-form-item>
      <el-form-item label="文字颜色">
        <el-color-picker
          v-model="config.style.color"
          show-alpha
        ></el-color-picker>
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
