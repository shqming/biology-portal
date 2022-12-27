<template>
  <div class="articles">
    <el-table
      :data="tableData"
      height="700"
      v-loading="tableLoading"
      :header-cell-style="{ 'background-color': '#f8f8f9' }"
    >
      <el-table-column
        prop="article_id"
        label="articleId"
      >
      </el-table-column>
      <el-table-column
        prop="article_name"
        label="articleName"
      >
      </el-table-column>
      <el-table-column
        prop="publish_year"
        label="publishYear"
      >
      </el-table-column>
      <el-table-column
        prop="article_other_info"
        label="articleOtherInfo"
      >
      </el-table-column>
      <el-table-column
        prop="article_url"
        label="articleUrl"
      >
        <template slot-scope="{ row }">
          <a :href="row.article_url" target="_blank">
            {{ row.article_url }}
          </a>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :current-page="pageInfo.pageNum"
      :page-sizes="[10]"
      :page-size="pageInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.total"
      @current-change="handleCurrentChange"
      @prev-click="handleCurrentChange"
      @next-click="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import GeneApi from '@/api/gene';

export default {
  name: '',

  props: {
    ids: {
      type: Object,
      default: () => ({}),
    },
  },

  components: {},

  data() {
    return {
      tableData: [],
      tableLoading: false,
      pageInfo: {
        total: 0,
        pageSize: 10,
        pageNum: 1,
      },
    };
  },

  computed: {},

  watch: {},

  mounted() {
    this.getPageList();
  },

  methods: {
    // 查询基因文章信息
    async getPageList() {
      this.tableLoading = true;
      const params = {
        page: this.pageInfo.pageNum,
        gene_id: this.ids.geneID,
      };
      const res = await GeneApi.articles(params);
      const { data } = res.data;
      this.tableData = data.GeneSimpleWithSpInfo;
      this.tableData.forEach((item) => {
        item.article_name = item.article_name.replace(/"|;/g, '');
      });
      this.pageInfo.total = data.Total;
      this.tableLoading = false;
    },
    // 当前页改变时
    handleCurrentChange(val) {
      this.pageInfo.pageNum = val;
      this.getPageList();
    },
  },
};
</script>

<style lang='scss' scoped>
.articles {
  padding: 16px;
  overflow: hidden;

  .el-pagination {
    margin-top: 16px;
    float: right;
  }
}
</style>
