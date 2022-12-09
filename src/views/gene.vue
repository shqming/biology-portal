<template>
  <div class="gene">
    <div class="gene-wrap">
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
      <div class="search shadow">
        <span class="title">
          基因搜索
        </span>
        <div class="content-wrap">
          <div class="search-inner">
            <el-input placeholder="请输入内容" size="medium" v-model="input3" class="input-with-select">
              <el-button slot="append" icon="el-icon-search">搜索</el-button>
            </el-input>
            <el-table
              :data="tableData"
              style="width: 574px"
              max-height="425px"
            >
              <el-table-column
                prop="date"
                label="名称"
              >
              </el-table-column>
              <el-table-column
                prop="name"
                label="染色体位置"
              >
              </el-table-column>
              <el-table-column
                prop="address"
                label="全名">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <div class="batch shadow">
      <span class="title">
        批次信息
      </span>
      <div class="content-wrap">
        <div class="info1">
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
        <div class="info2">
          <div class="search-wrap">
            <el-date-picker
              v-model="value1"
              type="datetimerange"
              range-separator="至"
              size="medium"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 360px">
            </el-date-picker>
            <el-button size="medium" icon="el-icon-search">搜索</el-button>
          </div>
          <el-image :src="src"></el-image>
          <el-table
            :data="tableData3"
            style="width: 100%"
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
    </div>
  </div>
</template>

<script>
import ChartBar from '@/components/charts/bar.vue';

export default {
  name: 'gene',
  components: {
    ChartBar,
  },
  data() {
    return {
      tableData: [{
        date: 'FHL1',
        name: '9q21.3-22',
        address: '多克隆抗体',
      }, {
        date: 'FHL1',
        name: '9q21.3-22',
        address: '多克隆抗体',
      }, {
        date: 'FHL1',
        name: '9q21.3-22',
        address: '多克隆抗体',
      }, {
        date: 'FHL1',
        name: '9q21.3-22',
        address: '多克隆抗体',
      }, {
        date: 'FHL1',
        name: '9q21.3-22',
        address: '多克隆抗体',
      }, {
        date: 'FHL1',
        name: '9q21.3-22',
        address: '多克隆抗体',
      }, {
        date: 'FHL1',
        name: '9q21.3-22',
        address: '多克隆抗体',
      }, {
        date: 'FHL1',
        name: '9q21.3-22',
        address: '多克隆抗体',
      }, {
        date: 'FHL1',
        name: '9q21.3-22',
        address: '多克隆抗体',
      }, {
        date: 'FHL1',
        name: '9q21.3-22',
        address: '多克隆抗体',
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
      tableData3: [
        {
          time: '2022-10-11 10:00:00',
          address: 'xx研究所',
          typeInfo: 'xinxi1',
          sampleInfo: 'xinxi2',
          result: 'RNA',
        },
      ],
      value1: '',
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

      .search-inner {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .el-input {
          width: 70%;
          margin: 0 auto;
        }
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
      display: flex;
      gap: 16px;

      &>div {
        flex: 1;
        border-radius: 10px;
      }

      .info2 {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .search-wrap {
          display: flex;
          justify-content: center;

          .el-button {
            margin-left: 16px;
          }
        }

        .el-image {
          margin: 0 auto;
          margin-top: 16px;
          width: 80%;
          height: 280px;
          border-radius: 10px;

        }
      }
    }
  }
}
</style>
