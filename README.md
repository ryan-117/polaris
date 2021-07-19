## polaris - 北极星

# 开发相关：app
## 安装依赖
```
yarn / npm install
```
## 开发模式

```
yarn dev / npm run dev / npm run serve
```
## 生产模式

```
yarn build / npm run build
```

# 开发相关：server
## 安装依赖
```
yarn / npm install
```
## 后台启动
```
yarn serve / node index.js
nodemon index.js  // 后台热更新启动
```
> 端口为localhost:3001

### 接口响应
||code|说明|
|:---:|:---:|:---:|
|>=1000|1000|响应成功|
||100*|除成功以外的业务逻辑状态|
||1010|未查询到该用户|
||1010|登录密码错误|
|<1000|999|登录token失效|