<script setup lang="ts">
import { reactive, ref } from 'vue'
// import type { Ref } from 'vue'
import { searchContent } from './api'
import SearchList from './List'

enum SearchType {
  fiction = 'fiction',
  comic = 'comic',
  video = 'video'
}

type SearchTypeItem = {
  label: string,
  key: string
}
type ResultItem = {
  title: string,
  author: string,
  fictionType: string,
  desc: string,
  cover: string,
  updateTime: string,
  [propsName: string]: any
}

interface IAxiosResponse {
  code: number,
  msg: string,
  data: any
}


const searchTypeList = reactive<SearchTypeItem[]>([
  {
    label: '小说',
    key: SearchType.fiction
  }, {
    label: '漫画',
    key: SearchType.comic
  }, {
    label: '视频',
    key: SearchType.video
  },
])

const search = reactive<{type: string, keyword: string}>({
  type: SearchType.fiction,
  keyword: ''
})

let list:any = ref<ResultItem[]>([])

const handleSearch = async (): Promise<void> => {
  const { type, keyword } = search
  const res: IAxiosResponse = await searchContent(type, keyword)
  if (res.code === 0) {
    list.value = res.data
    console.log(list.value);
  }
}
handleSearch()
</script>

<template>
  <div class="search">
    <div class="left">
      <el-select v-model="search.type" placeholder="请选择搜索类型">
        <el-option v-for="item in searchTypeList" :label="item.label" :value="item.key" :key="item.key"></el-option>
      </el-select>
      <el-input v-model="search.keyword" placeholder="请输入你要搜索的内容"></el-input>
    </div>
    <el-button type="primary" @click="handleSearch">查询</el-button>
  </div>
  <SearchList :ll="list.length" v-if="list.length" :list="list" />
</template>
<style lang="less" scoped>
.search {
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 0 auto;

  .left {
    display: flex;
    justify-content: space-between;
    width: 400px;
  }
}
</style>
