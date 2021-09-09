<template>
  <div>
    <el-form :model="config" size="small" :inline="true">
      <el-form-item label="图片地址">
        <el-input v-model="config.src"></el-input>
      </el-form-item>
      <el-form-item label="背景颜色">
        <el-color-picker
          v-model="config.style.backgroundColor"
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
      <el-form-item label="透明度">
        <el-slider
          style="width: 140px;"
          v-model="config.style.opacity"
          :min="0"
          :step="0.1"
          :max="1"
          show-tooltip
        ></el-slider>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ImgEditor',
  computed: {
    ...mapGetters({
      config: 'selectedComponent'
    })
  }
};
</script>
