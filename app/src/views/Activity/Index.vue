<template>
  <div class="editor-container">
    <Editor />
    <div class="save">
      <el-button @click="saveActInfo">保存</el-button>
    </div>
  </div>
</template>
<script>
import { addActivity } from './api';
import Editor from './Editor/Index';

export default {
  components: { Editor },
  methods: {
    async saveActInfo() {
      const params = {
        name: '新建活动',
        description: '20210617新建'
      };
      const res = addActivity(params);
      if (res) {
        this.$message.success('新建活动成功');
      }
    }
  }
};
</script>
