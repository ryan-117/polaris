<template>
  <div>
    <el-form :model="config" size="small" :inline="true">
      <el-form-item label="文字内容">
        <el-input v-model="config.text" />
      </el-form-item>
      <el-form-item label="文字颜色">
        <el-color-picker v-model="config.style.color" show-alpha />
      </el-form-item>
      <el-form-item label="字体大小">
        <el-input-number
          v-model="config.style.fontSize"
          controls-position="right"
        />
      </el-form-item>
      <el-form-item label="文字行高">
        <el-input-number
          v-model="config.style.lineHeight"
          controls-position="right"
        />
      </el-form-item>
      <el-form-item label="对齐方式">
        <el-radio-group v-model="config.style.textAlign" size="mini">
          <el-radio-button label="left" name="ad"></el-radio-button>
          <el-radio-button label="center"></el-radio-button>
          <el-radio-button label="right"></el-radio-button>
        </el-radio-group>
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
