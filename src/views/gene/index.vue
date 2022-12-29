<template>
  <div class="marker">
    <div class="wrap shadow">
      <div class="search-wrap">
        <span>基因组： </span>
        <el-select v-model="genomeID" filterable clearable size="medium" placeholder="请选择">
          <el-option
            v-for="item in genomeList"
            :key="item.gnome_version_id"
            :label="item.gnome_species_name"
            :value="item.gnome_version_id">
          </el-option>
        </el-select>
        <el-input placeholder="请输入基因名" size="medium" v-model="geneName" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="getPageList">搜索</el-button>
        </el-input>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          height="700"
          v-loading="tableLoading"
          row-key="id"
          :tree-props="{children: 'GeneWithGnome'}"
          :header-cell-style="{ 'background-color': '#f8f8f9' }"
        >
          <el-table-column
            prop="GeneName"
            label="GeneName"
          >
          </el-table-column>
          <el-table-column
            prop="GeneAllName"
            label="GeneAllName"
          >
          </el-table-column>
          <el-table-column
            label="GeneWithGnome"
          >
            <el-table-column
              prop="gnome_gene_id"
              label="GnomeGeneId"
            >
              <template slot-scope="{ row }">
                <el-button @click="jump(row)" type="text" style="color: #9B58FE">
                  {{ row.gnome_gene_id }}
                </el-button>
              </template>
            </el-table-column>
            <el-table-column
              prop="gene_id"
              label="GeneId"
            >
            </el-table-column>
            <el-table-column
              prop="gnome_version_id"
              label="Gnome"
            >
              <template slot-scope="{ row }">
                <span>
                  {{ row.gnome_version_id | getGenomeName }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              prop="gnome_chr_id"
              label="GnomeChrId"
            >
            </el-table-column>
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
    </div>
  </div>
</template>

<script>
import GeneApi from '@/api/gene';
import { mapState } from 'vuex';

const shortid = require('shortid');

export default {
  name: '',

  props: {},

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
      genomeID: 2022021721001,
      geneName: '',
    };
  },

  computed: {
    ...mapState(['genomeList']),
  },

  watch: {},

  mounted() {
    const { genomeID, geneName } = this.$route.query;
    this.genomeID = genomeID ? Number(genomeID) : '';
    this.geneName = geneName || '';
    this.getPageList();
  },

  methods: {
    // 跳转到基因详情
    jump(row) {
      this.$router.push({
        path: 'geneDetail',
        query: {
          genomeVersionID: row.gnome_version_id,
          genomeGeneID: row.gnome_gene_id,
          geneID: row.gene_id,
        },
      });
    },
    // 获取pageList
    async getPageList() {
      this.tableLoading = true;
      let res = null;
      if (this.genomeID === '' && this.geneName === '') {
        res = await GeneApi.allList({ page: this.pageInfo.pageNum });
      } else if (this.genomeID && this.geneName) {
        const params = {
          genomeVersionID: this.genomeID,
          geneName: this.geneName,
          page: this.pageInfo.pageNum,
        };
        res = await GeneApi.search(params);
      } else {
        this.$message({
          type: 'error',
          showClose: true,
          message: '若选择基因组则必须输入基因名！',
        });
      }
      this.tableLoading = false;
      if (res?.data?.data?.GeneListOnePage) {
        const { data } = res.data;
        this.tableData = this.addRandomId(data.GeneListOnePage);
        this.pageInfo.total = data.Total;
      } else {
        this.tableData = [];
        this.pageInfo.total = 0;
        this.pageInfo.pageNum = 1;
      }
    },
    // 当前页改变时
    handleCurrentChange(val) {
      this.pageInfo.pageNum = val;
      this.getPageList();
    },
    // 给tableList每一项以及子项添加随机id
    addRandomId(data) {
      data.forEach((item) => {
        item.id = shortid.generate();
        if (item.GeneWithGnome) {
          item.GeneWithGnome.forEach((child) => {
            child.id = shortid.generate();
          });
        }
      });
      return data;
    },
  },
};
</script>

<style lang='scss' scoped>
.wrap {
  margin: 20px 0;
  padding: 20px;
  height: 800px;

  .search-wrap {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-input {
      width: 500px;
    }

    &>div:not(:last-child) {
      margin-right: 24px;
    }
  }

  .table {
    margin-top: 20px;

    .el-pagination {
      float: right;
      margin-top: 16px;
    }
  }
}
</style>
