<template>
  <div class="download">
    <div class="des">
      <h2>下载</h2>
      <p>在这个模块中，用户可以下载不同品种的大黄鱼的基因组、基因组变异、基因的基本信息、基因的功能注释、基因表达和文献摘要</p>
    </div>
    <div class="download-table">
      <h2>基因信息下载</h2>
      <div class="table">
        <el-table
          :data="tableData"
          height="500"
          header-cell-style="background-color: #f8f8f9;"
        >
          <el-table-column
            prop="Species"
            label="Species"
          >
          </el-table-column>
          <el-table-column
            prop="Genome"
            label="Genome"
          >
            <template slot-scope="{ row }">
              <el-button @click="download" type="text">
                {{ row.Genome }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="cDNA"
            label="cDNA"
          >
            <template slot-scope="{ row }">
              <el-button @click="download" type="text">
                {{ row.cDNA }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="CDS"
            label="CDS"
          >
            <template slot-scope="{ row }">
              <el-button @click="download" type="text">
                {{ row.CDS }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="ncRNA"
            label="ncRNA"
          >
            <template slot-scope="{ row }">
              <el-button @click="download" type="text">
                {{ row.ncRNA }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="Protein"
            label="Protein"
          >
            <template slot-scope="{ row }">
              <el-button @click="download" type="text">
                {{ row.Protein }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="GenomeAnnotation"
            label="GenomeAnnotation"
          >
            <template slot-scope="{ row }">
              <el-button @click="download" type="text">
                {{ row.GenomeAnnotation }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="GeneDescription"
            label="GeneDescription"
          >
            <template slot-scope="{ row }">
              <el-button @click="download" type="text">
                {{ row.GeneDescription }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="FunctionalAnnotation"
            label="FunctionalAnnotation"
          >
            <template slot-scope="{ row }">
              <el-button @click="download" type="text">
                {{ row.FunctionalAnnotation }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          :current-page="currentPage4"
          :page-sizes="[10, 25, 50]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="30">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',

  props: {},

  components: {},

  data() {
    return {
      tableData: [],
      currentPage4: 1,
    };
  },

  computed: {},

  watch: {},

  mounted() {
    for (let i = 0; i < 20; i++) {
      this.tableData.push({
        Species: 'Sus scrofa',
        Genome: 'FASTA',
        cDNA: 'FASTA',
        CDS: 'FASTA',
        ncRNA: 'FASTA',
        Protein: 'FASTA',
        GenomeAnnotation: 'GTF/ GFF',
        GeneDescription: 'TSV',
        FunctionalAnnotation: 'TSV',
      });
    }
  },

  methods: {
    download() {
      window.open('https://sqm-imghosting.oss-cn-shanghai.aliyuncs.com/pdfjs/Sus_scrofa.Sscrofa11.1.104.gtf.gz');
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
    height: 600px;

    .el-pagination {
      float: right;
      margin-top: 16px;
    }
  }
}
</style>
