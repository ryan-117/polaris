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
    <el-form-item label="头像">
      <el-avatar :size="60" fit="contain" :src="user.avatar">
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
      <div class="edit-avatar">
        <el-button type="text" @click="isShowAvatarSelector = true">
          修改头像
        </el-button>
      </div>
      <el-card shadow="always" v-show="isShowAvatarSelector">
        <ImgSelector @change="changeImg" />
      </el-card>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
      <el-button @click="$router.go(-1)">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { editUser, getUser } from './api';
import ImgSelector from './components/ImgSelector';

export default {
  name: 'EditUser',
  components: { ImgSelector },
  data() {
    return {
      user: {
        userName: '',
        phone: '',
        password: '',
        avatar: ''
      },
      disabled: false,
      isShowAvatarSelector: false
    };
  },
  methods: {
    async editUser() {
      const { userName, phone, password, avatar } = this.user;
      const params = {
        id: this.$route.params.id,
        userName,
        phone,
        password,
        avatar
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
        const { userName, phone, password, avatar } = res.data;
        this.user = { ...this.user, userName, phone, password, avatar };
      }
    },
    changeImg(src) {
      this.user.avatar = src;
    }
  },
  created() {
    this.fetch();
  }
};
</script>
<style lang="less" scoped>
.edit-avatar {
  display: inline-flex;
  align-items: center;
  height: 60px;
  vertical-align: top;
  margin-left: 16px;
}
</style>
