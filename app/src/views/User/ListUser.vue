<template>
  <div>
    <el-table :data="userInfo" border stripe highlight-current-row fit>
      <el-table-column
        prop="userName"
        label="用户名"
        width="200"
      ></el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="200"
      ></el-table-column>
      <el-table-column
        prop="password"
        label="密码"
        width="200"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <text-button @click="edit(scope.row._id)">编辑</text-button>
          <text-button @click="remove(scope.row._id)">删除</text-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import TextButton from '@/component/TextButton';
import { getUserAll, deleteUser } from './api';

export default {
  components: { TextButton },
  data() {
    return {
      userInfo: []
    };
  },
  methods: {
    edit() {},
    async remove(id) {
      const res = await deleteUser(id);
      if (res.code === 1000) {
        this.$message({
          message: '用户删除成功',
          type: 'success'
        });
        this.fetch();
      }
    },
    async fetch() {
      const res = await getUserAll();
      if (res.code === 1000) {
        this.userInfo = res.data;
      }
    }
  },
  created() {
    this.fetch();
  }
};
</script>
