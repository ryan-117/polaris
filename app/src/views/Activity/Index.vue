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
        <el-tabs tab-position="left" type="border-card" style="height: 300px;">
          <el-tab-pane label="基础组件">
            <div class="tab-content">
              <el-button
                @click="addComponents({ name: 'JlButton' })"
                icon="el-icon-circle-plus-outline"
              >
                按钮
              </el-button>
              <el-button
                @click="addComponents({ name: 'JlImg' })"
                icon="el-icon-circle-plus-outline"
              >
                图片
              </el-button>
              <el-button
                @click="addComponents({ name: 'JlText' })"
                icon="el-icon-circle-plus-outline"
              >
                文字
              </el-button>
              <el-button
                @click="addComponents({ name: 'JlBackground' })"
                icon="el-icon-circle-plus-outline"
              >
                背景
              </el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="页面属性">页面属性</el-tab-pane>
        </el-tabs>
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
import { getActivity, editActivity } from './api';
import Editor from './Editor/Index';

export default {
  components: { Editor },
  data() {
    return {
      actInfo: []
    };
  },
  methods: {
    async saveActInfo() {
      const params = {
        actContent: JSON.stringify(this.actInfo)
      };
      const res = editActivity(this.$route.params.id, params);
      if (res) {
        this.$message.success('活动已保存');
      }
    },
    async getActivity() {
      const res = await getActivity(this.$route.params.id);
      if (res) {
        this.actInfo = JSON.parse(res.data.actContent);
      }
    },
    addComponents(com) {
      this.actInfo.push(com);
    }
  },
  created() {
    this.getActivity();
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
  background-color: #fff;
  height: calc(100vh - 60px);

  .tab-content {
    .el-button {
      margin-bottom: 8px;
      margin-left: 0;
    }
  }
}

.right {
  border-left: 1px solid #ccc;
  height: calc(100vh - 60px);
}
</style>
