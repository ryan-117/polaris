<script setup lang="ts">
import { ref, reactive } from 'vue'

// defineProps<{ msg: string }>()
enum Search {
  fiction = '小说',
  comic = '漫画',
  video = '视频'
}
const searchType = ref(Search.fiction)
const searchTypeList = reactive<any[]>([
  {
    label: '小说',
    key: Search.fiction
  }, {
    label: '漫画',
    key: Search.comic
  }, {
    label: '视频',
    key: Search.video
  },
])

const searchValue = ref('')
</script>

<template>
  <el-select v-model="searchType" placeholder="请选择搜索类型">
  <el-option v-for="item in searchTypeList" :label="item.label" :value="item.key" :key="item.key"></el-option>
  </el-select>
  <el-input v-model="searchValue"></el-input>
</template>

<style scoped>
</style>
