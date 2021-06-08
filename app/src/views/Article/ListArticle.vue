<template>
  <div>
    <el-table :data="articles" border stripe highlight-current-row fit>
      <el-table-column
        prop="title"
        label="标题"
        min-width="200"
        show-overflow-tooltip
      />
      <el-table-column
        prop="body"
        label="内容"
        min-width="400"
        show-overflow-tooltip
      />
      <el-table-column
        prop="createTime"
        label="创建时间"
        min-width="200"
        show-overflow-tooltip
      >
        <template scope="scope">
          {{ scope.row.createTime | YYYYMMDDHHmm }}
        </template>
      </el-table-column>
      <el-table-column
        prop="creator"
        label="创建人"
        min-width="100"
        show-overflow-tooltip
      />
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <text-button @click="edit(scope.row._id)">编辑</text-button>
          <text-button @click="remove(scope.row._id)">删除</text-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getArticleAll, removeArticle } from './api';
import TextButton from '@/component/TextButton';
import moment from 'moment';

export default {
  components: { TextButton },
  data() {
    return {
      articles: []
    };
  },
  methods: {
    async fetch() {
      const res = await getArticleAll();
      this.articles = res.data;
    },
    edit(id) {
      this.$router.push(`/articles/${id}/edit`);
    },
    async remove(id) {
      const res = await removeArticle(id);
      if (res.code === 1000) {
        this.$message({
          message: '文章删除成功',
          type: 'success'
        });
        this.fetch();
      }
    }
  },
  created() {
    this.fetch();
  },
  filters: {
    YYYYMMDDHHmm(time) {
      const t = time || new Date(2021, 1, 1);
      return moment(t).format('YYYY-MM-DD HH:mm');
    }
  }
};
</script>
