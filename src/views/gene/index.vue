<template>
  <div class="marker">
    <div class="wrap shadow">
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
      <div class="table">
        <el-table
          :data="tableData"
          height="700"
          :header-cell-style="{ 'background-color': '#f8f8f9' }"
        >
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="GeneID"
            label="GeneID"
          >
            <template slot-scope="{ row }">
              <el-button @click="jump(row.GeneID)" type="text" style="color: #9B58FE">
                {{ row.GeneID }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="DatabaseType"
            label="DatabaseType"
          >
          </el-table-column>
          <el-table-column
            prop="AnnotationID"
            label="AnnotationID"
          >
            <template slot-scope="{ row }">
              <el-button @click="jump(row.GeneID)" type="text" style="color: #9B58FE">
                {{ row.AnnotationID }}
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="Annotation"
            label="Annotation"
          >
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
      tableData: [],
      currentPage4: 1,
    };
  },

  computed: {},

  watch: {},

  mounted() {
    for (let i = 0; i < 20; i++) {
      this.tableData.push({
        GeneID: 'ENSSSCG00000000002',
        DatabaseType: 'KEGG',
        AnnotationID: 'K10129',
        Annotation: 'G-2 and S-phase expressed protein 1',
      });
    }
  },

  methods: {
    jump(id) {
      this.$router.push(`gene/${id}`);
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
