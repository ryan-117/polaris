<template>
  <el-container>
    <el-aside class="left">
      <span>组件列表</span>
      <p class="sort-title">基础组件</p>
      <el-row>
        <el-col :span="10">
          <el-button @click="addComponents({ name: 'JlButton' })" type="primary"
            >按钮</el-button
          >
        </el-col>
        <el-col :span="10">
          <el-button @click="addComponents({ name: 'JlImg' })" type="primary"
            >图片</el-button
          >
        </el-col>
        <el-col :span="10">
          <el-button @click="addComponents({ name: 'JlText' })" type="primary"
            >文字</el-button
          >
        </el-col>
        <el-col :span="10">
          <el-button
            @click="addComponents({ name: 'JlBackground' })"
            type="primary"
            >背景</el-button
          >
        </el-col>
      </el-row>
    </el-aside>
    <el-main>
      <Editor :actInfo="actInfo" />
      <div class="save">
        <el-button @click="saveActInfo">保存</el-button>
      </div>
    </el-main>
    <div class="right">youce</div>
  </el-container>
</template>
<script>
import { addActivity } from './api';
import Editor from './Editor/Index';

export default {
  components: { Editor },
  data() {
    return {
      actInfo: [{ name: 'JlText' }, { name: 'JlImg' }, { name: 'JlButton' }]
    };
  },
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
    },
    addComponents(com) {
      this.actInfo.push(com);
    }
  }
};
</script>
<style lang="less" scoped>
.left {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
