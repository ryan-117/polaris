<template>
  <div>
    <el-table :data="articles" border>
      <el-table-column prop="title" label="标题" width="200"> </el-table-column>
      <el-table-column prop="body" label="内容" width="200"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row._id)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="remove(scope.row._id)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getArticleAll, removeArticle } from './api';

export default {
  data() {
    return {
      articles: []
    };
  },
  methods: {
    fetch() {
      getArticleAll().then(res => {
        this.articles = res.data;
      });
    },
    edit(id) {
      this.$router.push(`/articles/${id}/edit`);
    },
    remove(id) {
      removeArticle(id).then(res => {
        if (res.code === 1000) {
          this.$message({
            message: '文章删除成功',
            type: 'success'
          });
          this.fetch();
        }
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>
