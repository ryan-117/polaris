<template>
  <div id="login">
    <div class="login-container">
      <el-input placeholder="请输入用户名" v-model="name">
        <template slot="prepend">用户：</template>
      </el-input>
      <el-input placeholder="请输入密码" v-model="password">
        <template slot="prepend">密码：</template>
      </el-input>
      <div class="btns">
        <button @click="login">登录</button>
        <button @click="register">注册</button>
      </div>
      <span>默认账号：1/1</span>
    </div>
    <ul class="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import { setCookie } from '@/util/utils';

export default {
  data() {
    return {
      name: '',
      password: ''
    };
  },
  methods: {
    login() {
      const params = {
        userName: this.name,
        password: this.password
      };
      this.$api.login(params).then(res => {
        if (res.code === 1000) {
          for (let key in res.data) {
            setCookie(key, res.data[key]);
          }
          this.$router.push({ name: 'home' });
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    register() {
      const params = {
        userName: this.name,
        password: this.password
      };
      this.$api.register(params).then(res => {
        if (res.code === 1000) {
          this.$message.success(`用户${this.name}注册成功`);
          this.login();
        } else {
          this.$message.error(res.msg);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
#login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #409eff;
  background: -webkit-linear-gradient(top left, #409eff 0%, #3d5efc 100%);
  background: linear-gradient(to bottom right, #409eff 0%, #3d5efc 100%);
  opacity: 0.8;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 400px;
  margin-top: -200px;
  overflow: hidden;
  .login-container {
    width: 400px;
    z-index: 10;
    .el-input {
      margin-top: 15px;
    }
    .btns {
      margin: 14px auto;
      display: flex;
      justify-content: space-between;
      button {
        display: block;
        width: 160px;
        height: 46px;
        font-size: 18px;
        letter-spacing: 4px;
        color: #fff;
        // background-color: #fff;
        border: 0;
        border-radius: 4px;
        &:first-child {
          background-color: #19be6b;
        }
        &:last-child {
          background-color: #ff9900;
        }
      }
    }
  }
}
.bg-bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 0;
  li {
    position: absolute;
    list-style: none;
    display: block;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.15);
    -webkit-animation: square 25s infinite;
    animation: square 25s infinite;
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    &:nth-child(1) {
      left: 10%;
      bottom: -20px;
    }
    &:nth-child(2) {
      left: 20%;
      width: 80px;
      height: 80px;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
      -webkit-animation-duration: 17s;
      animation-duration: 17s;
      bottom: -80px;
    }
    &:nth-child(3) {
      left: 25%;
      bottom: -60px;
      -webkit-animation-delay: 4s;
      animation-delay: 4s;
    }
    &:nth-child(4) {
      left: 40%;
      width: 60px;
      height: 60px;
      bottom: -80px;
      -webkit-animation-duration: 22s;
      animation-duration: 22s;
      background-color: rgba(255, 255, 255, 0.25);
    }
    &:nth-child(5) {
      left: 70%;
    }
    &:nth-child(6) {
      left: 80%;
      width: 120px;
      height: 120px;
      bottom: -140px;
      -webkit-animation-delay: 3s;
      animation-delay: 3s;
      background-color: rgba(255, 255, 255, 0.2);
    }
    &:nth-child(7) {
      left: 32%;
      width: 160px;
      height: 160px;
      bottom: -160px;
      -webkit-animation-delay: 7s;
      animation-delay: 7s;
    }
    &:nth-child(8) {
      left: 55%;
      width: 20px;
      height: 20px;
      bottom: -40px;
      -webkit-animation-delay: 15s;
      animation-delay: 15s;
      -webkit-animation-duration: 40s;
      animation-duration: 40s;
    }
    &:nth-child(9) {
      left: 25%;
      width: 10px;
      height: 10px;
      bottom: -20px;
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
      -webkit-animation-duration: 40s;
      animation-duration: 40s;
      background-color: rgba(255, 255, 255, 0.3);
    }
    &:nth-child(10) {
      left: 90%;
      width: 160px;
      height: 160px;
      bottom: -160px;
      -webkit-animation-delay: 11s;
      animation-delay: 11s;
    }
  }
}
@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
    transform: translateY(-700px) rotate(600deg);
  }
}
@keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-700px) rotate(600deg);
    transform: translateY(-700px) rotate(600deg);
  }
}
</style>
