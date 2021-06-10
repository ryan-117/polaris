<template>
  <el-form
    @submit.native.prevent="editUser"
    ref="form"
    :model="user"
    label-width="80px"
  >
    <el-form-item label="用户名">
      <el-input v-model="user.userName"></el-input>
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input style="margin-bottom:20px" v-model="user.phone"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input style="margin-bottom:20px" v-model="user.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button @click="$router.go(-1)">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { editUser, getUser } from './api';

export default {
  name: 'EditUser',
  data() {
    return {
      user: {
        userName: '',
        phone: '',
        password: ''
      },
      disabled: false
    };
  },
  methods: {
    async editUser() {
      const { userName, phone, password } = this.user;
      const params = {
        id: this.$route.params.id,
        userName,
        phone,
        password
      };
      const res = await editUser(params);
      if (res) {
        this.$message({
          message: '用户信息更新成功',
          type: 'success'
        });
        this.$router.push({ name: 'userList' });
      }
    },
    async fetch() {
      const res = await getUser(this.$route.params.id);
      if (res.code === 1000) {
        const { userName, phone, password } = res.data;
        this.user = { ...this.user, userName, phone, password };
      }
    }
  },
  created() {
    this.fetch();
  }
};
</script>
