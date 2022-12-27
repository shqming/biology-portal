<template>
  <div class="marker">
    <div class="wrap shadow">
      <div class="search-wrap">
        <span>基因组： </span>
        <el-select v-model="genomeid" filterable size="medium" placeholder="请选择">
          <el-option
            v-for="item in genomeList"
            :key="item.gnome_version_id"
            :label="item.gnome_species_name"
            :value="item.gnome_version_id">
          </el-option>
        </el-select>
        <span>标记类型： </span>
        <el-select v-model="typeID" filterable clearable size="medium" placeholder="请选择">
          <el-option
            v-for="item in typeList"
            :key="item.maker_type_id"
            :label="item.maker_type_name"
            :value="item.maker_type_id">
          </el-option>
        </el-select>
        <el-button
          type="primary"
          size="medium"
          @click="getPageList"
          icon="el-icon-search"
        >搜索</el-button>
      </div>
      <div class="table">
        <el-table
          :data="tableData"
          height="700"
          v-loading="tableLoading"
          :header-cell-style="{ 'background-color': '#f8f8f9' }"
        >
          <el-table-column
            prop="maker_id"
            label="makerId"
          >
            <template slot-scope="{ row }">
              <span style="color: #9B58FE">
                {{ row.maker_id }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="gnome_version_id"
            label="gnomeVersionId"
          >
          </el-table-column>
          <el-table-column
            prop="maker_type_id"
            label="makerTypeId"
          >
            <template slot-scope="{ row }">
              <span style="color: #9B58FE">
                {{ row.maker_type_id }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="gnome_chr_id"
            label="gnomeChrId"
          >
          </el-table-column>
          <el-table-column
            prop="start"
            label="start"
          >
          </el-table-column>
          <el-table-column
            prop="end"
            label="end"
          >
          </el-table-column>
          <el-table-column
            prop="description"
            label="description"
          >
          </el-table-column>
          <el-table-column
            prop="seq_url"
            label="seqUrl"
            show-overflow-tooltip
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
import MolecularMarkerApi from '@/api/molecularMarker';
import GenomeApi from '@/api/genome';

export default {
  name: 'MolecularMarker',

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
      genomeid: 2022021721004,
      genomeList: [],
      typeID: '',
      typeList: [],
    };
  },

  computed: {},

  watch: {
    genomeid: {
      handler(newValue) {
        this.getTypeList(newValue);
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
    // 根据基因组id获取分子标记类型列表
    getTypeList(genomeId) {
      MolecularMarkerApi.getTypeList(genomeId).then((res) => {
        this.typeList = res.data.data;
      });
    },
    // 获取pageList
    getPageList() {
      this.tableLoading = true;
      const params = {
        genomeVersionID: this.genomeid,
        typeID: this.typeID,
        page: this.pageInfo.pageNum,
      };
      MolecularMarkerApi.getPageList(params).then((res) => {
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
