<template>
  <div class="download">
    <div class="des">
      <h2>下载</h2>
      <p>在这个模块中，用户可以下载不同品种鱼类的基因组、基因组变异、基因的基本信息、基因的功能注释、基因表达和文献摘要</p>
    </div>
    <div class="download-table">
      <h2>基因信息下载</h2>
      <div class="table">
        <el-table
          :data="tableData"
          height="600"
          v-loading="tableLoading"
          :header-cell-style="{ 'background-color': '#f8f8f9' }"
        >
          <el-table-column
            prop="gnome_version_id"
            label="gnomeVersionId"
          >
          </el-table-column>
          <el-table-column
            prop="gnome_sr_url"
            label="gnomeSrUrl"
            show-overflow-tooltip
          >
            <template slot-scope="{ row }">
              <span v-if="row.gnome_sr_url == 0">暂无数据</span>
              <el-button v-else @click="download(row.gnome_sr_url)" type="text">
                {{ row.gnome_sr_url }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="gnome_gff_url"
            label="gnomeGffUrl"
            show-overflow-tooltip
          >
            <template slot-scope="{ row }">
              <span v-if="row.gnome_gff_url == 0">暂无数据</span>
              <el-button v-else @click="download(row.gnome_gff_url)" type="text">
                {{ row.gnome_gff_url }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="gnome_gtf_url"
            label="gnomeGtfUrl"
            show-overflow-tooltip
          >
            <template slot-scope="{ row }">
              <span v-if="row.gnome_gtf_url == 0">暂无数据</span>
              <el-button v-else @click="download(row.gnome_gtf_url)" type="text">
                {{ row.gnome_gtf_url }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="gnome_gene_url"
            label="gnomeGeneUrl"
            show-overflow-tooltip
          >
            <template slot-scope="{ row }">
              <span v-if="row.gnome_gene_url == 0">暂无数据</span>
              <el-button v-else @click="download(row.gnome_gene_url)" type="text">
                {{ row.gnome_gene_url }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="gnome_cds_url"
            label="gnomeCdsUrl"
            show-overflow-tooltip
          >
            <template slot-scope="{ row }">
              <span v-if="row.gnome_cds_url == 0">暂无数据</span>
              <el-button v-else @click="download(row.gnome_cds_url)" type="text">
                {{ row.gnome_cds_url }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="gnome_pep_url"
            label="gnomePepUrl"
            show-overflow-tooltip
          >
            <template slot-scope="{ row }">
              <span v-if="row.gnome_pep_url == 0">暂无数据</span>
              <el-button v-else @click="download(row.gnome_pep_url)" type="text">
                {{ row.gnome_pep_url }}
              </el-button>
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
    </div>
  </div>
</template>

<script>
import DownloadApi from '@/api/download';

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
    };
  },

  computed: {},

  watch: {},

  mounted() {
    this.getPageList();
  },

  methods: {
    download(file) {
      const fileList = file.split('/');
      const fileName = fileList.pop();
      const fileDir = `${fileList.join('/')}/`;
      const url = `http://124.71.211.200:8084/v1/download/file?fileDir=${fileDir}&fileName=${fileName}`;
      window.open(url);
    },
    // 获取pageList
    getPageList() {
      this.tableLoading = true;
      const params = {
        page: this.pageInfo.pageNum,
      };
      DownloadApi.getPageList(params).then((res) => {
        const { data } = res.data;
        this.tableData = data.GnomeFiles;
        this.pageInfo.total = data.Total;
        this.tableLoading = false;
      });
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
.download {

  h2 {
    margin-top: 0;
    color: #18BAE5;
  }

  .des {
    box-sizing: border-box;
    margin-top: 24px;
    padding: 30px 30px 25px;
    height: 200px;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);

    p {
      padding: 15px;
      background-color: rgb(247, 249, 253);
    }
  }

  .download-table {
    margin: 24px 0;
    padding: 30px 30px 25px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    height: 700px;

    .el-pagination {
      float: right;
      margin-top: 16px;
    }
  }
}
</style>
