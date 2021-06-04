<template>
  <div id="create-user">
    <el-form ref="form" :model="user" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="user.userName"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="user.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addUser">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { addUser } from './api';

export default {
  data() {
    return {
      user: {
        userName: '',
        phone: '',
        password: ''
      }
    };
  },
  methods: {
    addUser() {
      addUser(this.user).then(res => {
        if (res.code === 1000) {
          this.$message({
            message: '用户创建成功',
            type: 'success'
          });
          this.$router.push('/user/list');
        }
      });
    }
  }
};
</script>
