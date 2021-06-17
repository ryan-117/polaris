<template>
  <div>
    <el-table :data="activity" border stripe highlight-current-row fit>
      <el-table-column
        prop="name"
        label="活动名称"
        min-width="200"
        show-overflow-tooltip
      />
      <el-table-column
        prop="description"
        label="简介"
        min-width="400"
        show-overflow-tooltip
      />
      <el-table-column
        prop="createTime"
        label="创建时间"
        min-width="200"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
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
import { getActivityAll, removeActivity } from './api';
import TextButton from '@/component/TextButton';
import moment from 'moment';

export default {
  components: { TextButton },
  data() {
    return {
      activity: []
    };
  },
  methods: {
    async fetch() {
      const res = await getActivityAll();
      this.activity = res.data || [];
    },
    edit(id) {
      this.$router.push(`/workspace/${id}`);
    },
    async remove(id) {
      const res = await removeActivity(id);
      if (res.code === 1000) {
        this.$message({
          message: '活动模板删除成功',
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
