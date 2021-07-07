<template>
  <el-container class="container">
    <el-aside width="200px" class="left">
      <el-menu router :default-openeds="['2']">
        <el-submenu index="1">
          <template slot="title">
            <em class="el-icon-s-custom" />用户管理
          </template>
          <el-menu-item index="/user/list">用户列表</el-menu-item>
          <el-menu-item index="/user/create">新增用户</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <em class="el-icon-picture-outline-round" />活动模板
          </template>
          <el-menu-item index="/activity/list">活动列表</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="header">
        <el-dropdown>
          <div class="drop">
            <em class="el-icon-setting edit" />
            <span class="nickname">{{ userName }}</span>
            <img class="my-avatar" :src="avatar" alt="用户头像" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="editUser">
              我的资料
            </el-dropdown-item>
            <el-dropdown-item @click.native="exit">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { getCookie, clearAllCookie } from '@/util/utils';
import { getUserInfo } from '@/service/api/user';

export default {
  data() {
    return {
      userName: '',
      avatar: ''
    };
  },
  created() {
    this.getMyInfo();
  },
  methods: {
    exit() {
      clearAllCookie();
      this.$router.replace({ name: 'login' });
    },
    async getMyInfo() {
      const res = await getUserInfo();
      if (res) {
        const { userName, avatar } = res.data;
        this.userName = userName;
        this.avatar = avatar;
      }
    },
    editUser() {
      const id = getCookie('userId');
      this.$router.push({ name: 'editUser', params: { id } });
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  text-align: right;
  font-size: 12px;
}
.left {
  color: #333;
  background-color: rgb(238, 241, 246);
}

.container {
  height: 100vh;
  border: 1px solid #eee;
}

.drop {
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .nickname {
    margin: 0 8px;
    font-weight: 700;
  }

  .my-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #ccc;
  }
}
</style>
