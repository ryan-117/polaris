<template>
  <div>
    <el-form :model="config" size="small" :inline="true">
      <el-form-item label="显示文字">
        <el-input v-model="config.text"></el-input>
      </el-form-item>
      <el-form-item label="文字颜色">
        <el-color-picker
          v-model="config.style.color"
          show-alpha
        ></el-color-picker>
      </el-form-item>
      <el-form-item label="边框颜色">
        <el-color-picker
          v-model="config.style.borderColor"
          show-alpha
        ></el-color-picker>
      </el-form-item>
      <el-form-item label="边框宽度">
        <el-input-number
          v-model="config.style.borderWidth"
          controls-position="right"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="边框圆角">
        <el-slider
          style="width: 140px;"
          v-model="config.style.borderRadius"
          :min="0"
          :max="config.style.width"
          show-tooltip
        ></el-slider>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ButtonEditor',
  computed: {
    ...mapGetters({
      config: 'selectedComponent'
    })
  }
};
</script>
