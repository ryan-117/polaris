<template>
  <el-container>
    <el-header class="workspace-header">
      <div class="logo">jl-template</div>
      <div class="btns">
        <el-button size="small">预览</el-button>
        <el-button size="small" type="primary" @click="saveActInfo"
          >保存</el-button
        >
      </div>
    </el-header>
    <el-container>
      <el-aside class="left">
        <span>组件列表</span>
        <p class="sort-title">基础组件</p>
        <el-row>
          <el-col :span="10">
            <el-button
              @click="addComponents({ name: 'JlButton' })"
              type="primary"
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
      </el-main>
      <el-aside class="right">
        <span>属性配置</span>
      </el-aside>
    </el-container>
  </el-container>
</template>
<script>
import { addActivity } from './api';
import Editor from './Editor/Index';
import moment from 'moment';

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
        name: `${moment(+new Date()).format('YYYY-MM-DD')}新建活动`,
        description: '基础模板新建活动'
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
.workspace-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}

.left {
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.right {
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
</style>
