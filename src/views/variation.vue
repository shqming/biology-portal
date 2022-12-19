<template>
  <div class="gene">
    <div class="gene-wrap">
      <div class="search shadow">
        <span class="title">
          批次信息
        </span>
        <div class="content-wrap">
          <el-table
            :data="tableData2"
            style="width: 100%"
            max-height="460px"
          >
            <el-table-column
              prop="time"
              label="时间">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地点">
            </el-table-column>
            <el-table-column
              prop="typeInfo"
              label="表型信息">
            </el-table-column>
            <el-table-column
              prop="sampleInfo"
              label="简要信息">
            </el-table-column>
            <el-table-column
              prop="result"
              label="分析结果">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="info shadow">
        <span class="title">
          基因信息
        </span>
        <div class="content-wrap">
          <div class="base-info">
            <div>
              <span>
                共用
                <strong>134</strong>
                种方法
              </span>
            </div>
            <div>
              <span>
                测了
                <strong>256</strong>
                种数据
              </span>
            </div>
          </div>
          <div class="chart-bar">
            <ChartBar />
          </div>
        </div>
      </div>
    </div>
    <div class="batch shadow">
      <span class="title">
        SV Search
      </span>
      <div class="content-wrap">
        <div class="search-wrap">
          <el-input placeholder="请输入内容" size="medium" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search">搜索</el-button>
          </el-input>
          <el-select v-model="value1" size="medium" placeholder="请选择">
            <el-option
              v-for="item in options1"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="value2" size="medium" placeholder="请选择">
            <el-option
              v-for="item in options2"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
          <el-table
            :data="tableData"
            max-height="425px"
          >
            <el-table-column
              prop="genome"
              label="Genome"
            >
            </el-table-column>
            <el-table-column
              prop="batchId"
              label="Batch ID"
            >
            </el-table-column>
            <el-table-column
              prop="svId"
              label="SV ID"
            >
            </el-table-column>
            <el-table-column
              prop="chr"
              label="Chr"
            >
            </el-table-column>
            <el-table-column
              prop="pos"
              label="Pos"
            >
            </el-table-column>
            <el-table-column
              prop="alt"
              label="ALT"
            >
            </el-table-column>
          </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import ChartBar from '@/components/charts/bar.vue';

export default {
  name: 'variation',
  components: {
    ChartBar,
  },
  data() {
    return {
      tableData: [{
        genome: 'hg38',
        batchId: 'batch1',
        svId: 'sv1',
        chr: 'chr1',
        pos: '1000',
        alt: 'A',
      },
      {
        genome: 'hg38',
        batchId: 'batch1',
        svId: 'sv1',
        chr: 'chr1',
        pos: '1000',
        alt: 'A',
      },
      {
        genome: 'hg38',
        batchId: 'batch1',
        svId: 'sv1',
        chr: 'chr1',
        pos: '1000',
        alt: 'A',
      },
      {
        genome: 'hg38',
        batchId: 'batch1',
        svId: 'sv1',
        chr: 'chr1',
        pos: '1000',
        alt: 'A',
      },
      {
        genome: 'hg38',
        batchId: 'batch1',
        svId: 'sv1',
        chr: 'chr1',
        pos: '1000',
        alt: 'A',
      },
      {
        genome: 'hg38',
        batchId: 'batch1',
        svId: 'sv1',
        chr: 'chr1',
        pos: '1000',
        alt: 'A',
      },
      {
        genome: 'hg38',
        batchId: 'batch1',
        svId: 'sv1',
        chr: 'chr1',
        pos: '1000',
        alt: 'A',
      },
      {
        genome: 'hg38',
        batchId: 'batch1',
        svId: 'sv1',
        chr: 'chr1',
        pos: '1000',
        alt: 'A',
      },
      {
        genome: 'hg38',
        batchId: 'batch1',
        svId: 'sv1',
        chr: 'chr1',
        pos: '1000',
        alt: 'A',
      },
      {
        genome: 'hg38',
        batchId: 'batch1',
        svId: 'sv1',
        chr: 'chr1',
        pos: '1000',
        alt: 'A',
      }],
      tableData2: [
        {
          time: '2022-10-11 10:00:00',
          address: 'xx研究所',
          typeInfo: 'xinxi1',
          sampleInfo: 'xinxi2',
          result: 'RNA',
        },
        {
          time: '2022-10-11 10:00:00',
          address: 'xx研究所',
          typeInfo: 'xinxi1',
          sampleInfo: 'xinxi2',
          result: 'RNA',
        },
        {
          time: '2022-10-11 10:00:00',
          address: 'xx研究所',
          typeInfo: 'xinxi1',
          sampleInfo: 'xinxi2',
          result: 'RNA',
        },
        {
          time: '2022-10-11 10:00:00',
          address: 'xx研究所',
          typeInfo: 'xinxi1',
          sampleInfo: 'xinxi2',
          result: 'RNA',
        },
        {
          time: '2022-10-11 10:00:00',
          address: 'xx研究所',
          typeInfo: 'xinxi1',
          sampleInfo: 'xinxi2',
          result: 'RNA',
        },
        {
          time: '2022-10-11 10:00:00',
          address: 'xx研究所',
          typeInfo: 'xinxi1',
          sampleInfo: 'xinxi2',
          result: 'RNA',
        },
        {
          time: '2022-10-11 10:00:00',
          address: 'xx研究所',
          typeInfo: 'xinxi1',
          sampleInfo: 'xinxi2',
          result: 'RNA',
        },

      ],
      input3: '',
      value1: '',
      options1: [{
        value: '大黄鱼',
        label: '大黄鱼',
      }, {
        value: '大黄鱼2',
        label: '大黄鱼2',
      }, {
        value: '大黄鱼3',
        label: '大黄鱼3',
      }],
      value2: '',
      options2: [{
        value: '所有',
        label: '所有',
      }, {
        value: '特定种类',
        label: '特定种类',
      }, {
        value: '特定基因',
        label: '特定基因',
      }],
      src: 'https://cdn.pixabay.com/photo/2022/03/25/12/17/dna-7090994_640.jpg',
    };
  },
  mounted() {},
  methods: {},
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

  .gene-wrap {
    display: flex;
    gap: 16px;

    &>div {
      flex: 1;
      min-height: 500px;
      padding: 14px;
    }

    .info {
      .content-wrap {
        width: 100%;
        height: calc(100% - 40px);
        .chart-bar {
          height: calc(100% - 20px);
        }
      }

      .base-info {
        margin-top: 16px;
        display: flex;
        justify-content: space-between;
        color: #555;

        strong {
          color: #3485FB;
        }
      }
    }

    .search {
      .content-wrap {
        margin-top: 16px;
      }
    }
  }

  .batch {
    margin: 16px 0;
    height: 500px;
    padding: 16px;

    .content-wrap {
      width: calc(100% - 16px);
      height: calc(100% - 32px);
      padding: 12px 0;
      box-sizing: border-box;

      .search-wrap {
        .el-input {
          width: 500px;
        }

        &>div:not(:last-child) {
          margin-right: 24px;
        }
      }
    }
  }
}
</style>
