<template>
  <div class="gene">
    <div class="batch shadow">
      <span class="title">
        SV Search
      </span>
      <div class="content-wrap">
        <div class="search-wrap">
          <span>基因组： </span>
          <el-select v-model="genome" filterable size="medium" placeholder="请选择">
            <el-option
              v-for="item in genomeList"
              :key="item.gnome_version_id"
              :label="item.gnome_species_name"
              :value="item.gnome_version_id">
            </el-option>
          </el-select>
          <span>染色体： </span>
          <el-select
            v-model="chr"
            filterable
            clearable
            size="medium"
            @focus="chrList = chrListTemp"
            placeholder="请选择"
          >
            <el-option
              v-for="item in chrList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input placeholder="请输入起始位置" size="medium" v-model.number="start" onkeyup="value=value.replace(/[^\d]/g,'')"/>
          <span style="padding: 0 10px">至</span>
          <el-input placeholder="请输入终止位置" size="medium" v-model.number="end" onkeyup="value=value.replace(/[^\d]/g,'')"/>
          <el-button
            type="primary"
            size="medium"
            @click="getPageList"
            icon="el-icon-search"
          >搜索</el-button>
        </div>
        <el-table
          :data="tableData"
          height="600px"
          v-loading="tableLoading"
        >
          <el-table-column
            prop="gnome_sv_id"
            label="GenomeSvId"
          >
          </el-table-column>
          <el-table-column
            prop="genome_chr_id"
            label="GenomeChrId"
          >
          </el-table-column>
          <el-table-column
            prop="gnome_version_id"
            label="GenomeVersionId"
          >
          </el-table-column>
          <el-table-column
            prop="chr_pos"
            label="ChrPos"
          >
          </el-table-column>
          <el-table-column
            prop="sv_gene_length"
            label="SvGeneLength"
          >
          </el-table-column>
          <el-table-column
            prop="gene_id"
            label="GeneId"
          >
          </el-table-column>
          <el-table-column
            prop="src_sv"
            label="SrcSv"
          >
          </el-table-column>
          <el-table-column
            prop="alt_sv"
            label="AltSv"
          >
          </el-table-column>
          <el-table-column
            prop="sv_type"
            label="SvType"
          >
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
import GenomeApi from '@/api/genome';
import VariationApi from '@/api/variation';

export default {
  name: 'variation',
  components: {
  },
  data() {
    return {
      tableData: [],
      tableLoading: false,
      pageInfo: {
        total: 0,
        pageSize: 10,
        pageNum: 1,
      },
      genome: 2022021721004,
      genomeList: [],
      chr: '',
      chrList: [],
      chrListTemp: [], // 中间变量数组
      start: '',
      end: '',

    };
  },
  watch: {
    genome: {
      handler(newValue) {
        this.getGenomeChrList(newValue);
      },
      immediate: true,
    },
  },
  mounted() {
    this.getGenome();
    this.getPageList();
  },
  methods: {
    // 获取基因组列表
    getGenome() {
      GenomeApi.list().then((res) => {
        this.genomeList = res.data.data;
      });
    },
    // 根据基因组染色体列表
    getGenomeChrList(genomeId) {
      GenomeApi.getGenomeChrList(genomeId).then((res) => {
        this.chrListTemp = res.data.data.map((item) => ({
          label: item,
          value: item,
        }));
      });
    },
    // 获取pageList
    getPageList() {
      this.tableLoading = true;
      const params = {
        // genomeVersionID: this.genome,
        // chrID: this.chr || null,
        // start: this.start || null,
        // end: this.end || null,
        page: this.pageInfo.pageNum,
      };
      VariationApi.svAllList(params).then((res) => {
        const { data } = res.data;
        this.tableData = data.GenomeSvInfos;
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
.gene {
  margin-top: 16px;

  .title {
    font-size: 18px;
    font-weight: 600;
    color: #18BAE5;
  }

  .batch {
    margin: 16px 0;
    padding: 16px;
    overflow: hidden;

    .content-wrap {
      padding: 12px 0;

      .search-wrap {
        .el-input {
          width: 180px;
        }

        .el-button {
          margin-left: 24px;
        }

        &>div:not(.el-input) {
          margin-right: 24px;
        }
      }
    }
  }

  .el-pagination {
    float: right;
    margin-top: 16px;
  }
}
</style>
