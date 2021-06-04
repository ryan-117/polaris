<template>
  <div>
    <el-table stripe :data="userInfo">
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
    </el-table>
  </div>
</template>
<script>
import { getUserAll } from './api';

export default {
  data() {
    return {
      userInfo: []
    };
  },
  methods: {},
  created() {
    getUserAll().then(res => {
      if (res.code === 1000) {
        this.userInfo = res.data;
      }
    });
  }
};
</script>
