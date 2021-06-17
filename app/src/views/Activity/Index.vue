<template>
  <el-container>
    <el-aside>
      <span slot="label">
        <i class="iconfont iconlist">组件列表</i>
      </span>
      <p class="sort-title">基础组件</p>
      <el-row :gutter="50">
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
            @click="addComponents({ name: 'JlBackgroundImg' })"
            type="primary"
            >背景</el-button
          >
        </el-col>
      </el-row>
    </el-aside>
    <el-main>
      <Editor />
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
