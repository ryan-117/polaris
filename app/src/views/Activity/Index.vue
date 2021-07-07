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
            </div>
          </el-tab-pane>
          <el-tab-pane label="页面属性">
            <el-form :model="actInfo">
              <el-form-item label="活动名称">
                <el-input v-model="actInfo.name"></el-input>
              </el-form-item>
              <el-form-item label="活动描述">
                <el-input
                  v-model="actInfo.description"
                  type="textarea"
                ></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-aside>
      <el-main>
        <Editor :pageComponents="pageComponents" />
      </el-main>
      <el-aside class="right">
        <el-tabs v-model="rightActivetab" type="border-card">
          <el-tab-pane label="属性配置" name="propertyConfig">
            <component :is="selectedComponent.editor"></component>
          </el-tab-pane>
          <el-tab-pane label="分享配置" name="shareConfig">
            分享配置
          </el-tab-pane>
        </el-tabs>
      </el-aside>
    </el-container>
  </el-container>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
import { getActivity, editActivity } from '@/service/api/activity';
import Editor from './Editor/Index';

export default {
  components: { Editor },
  data() {
    return {
      actInfo: {
        name: '',
        description: ''
      },
      rightActivetab: 'propertyConfig'
    };
  },
  computed: {
    ...mapGetters(['pageComponents', 'selectedComponent'])
  },
  methods: {
    ...mapMutations(['addComponents', 'initPage']),
    async saveActInfo() {
      const { name, description } = this.actInfo;
      const params = {
        name,
        description,
        actContent: JSON.stringify(this.pageComponents)
      };
      const res = editActivity(this.$route.params.id, params);
      if (res) {
        this.$message.success('保存成功');
      }
    },
    async getActivity() {
      const res = await getActivity(this.$route.params.id);
      if (res) {
        const { name, description, actContent } = res.data;
        this.initPage(JSON.parse(actContent));
        this.actInfo.name = name;
        this.actInfo.description = description;
      }
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
  padding: 15px;
}
</style>
