<template>
  <div class="img-selector">
    <div
      class="img"
      fit="cover"
      v-for="(imgSrc, index) in imgList"
      :key="index"
    >
      <img :src="imgSrc" />
    </div>
  </div>
</template>
<script>
const IMG_LIST = [
  'https://static01.imgkr.com/temp/8a445a50a2a046f5b2efc42e2a650ac9.webp',
  'https://static01.imgkr.com/temp/0b5a7e4a70d84f83811700ffc3bac9a1.webp',
  'https://static01.imgkr.com/temp/da3e714778464891a1d7c4fa2634febd.webp',
  'https://static01.imgkr.com/temp/7e6e8ee0c880400da05c84b3a79b117e.webp',
  'https://static01.imgkr.com/temp/342287f7c0514554b405193bc30ba0a1.webp',
  'https://static01.imgkr.com/temp/c0fe8971d993409484b3081477c8bba9.webp',
  'https://static01.imgkr.com/temp/74b69c1283c748a0ab978b0980de294c.webp',
  'https://static01.imgkr.com/temp/81304b98e58d44348e3cf13c0a9c670f.webp',
  'https://static01.imgkr.com/temp/a0f35bef9f134d38ad1f504c6e76d0f2.webp',
  'https://static01.imgkr.com/temp/113a15c5405b448685d82046e734ca3a.webp'
];

export default {
  data() {
    return {
      imgList: IMG_LIST
    };
  }
};
</script>
<style lang="less" scoped>
.img-selector {
  width: 800px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .img {
    width: 100px;
    height: 100px;
    min-width: 100px;
    min-height: 100px;
    margin: 20px 10px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }
}
</style>
