<template>
  <div class="structure">
    <el-table
      :data="tableData"
      height="700"
      v-loading="tableLoading"
      :header-cell-style="{ 'background-color': '#f8f8f9' }"
    >
      <el-table-column
        prop="gnome_gene_id"
        label="gnomeGeneId"
      >
      </el-table-column>
      <el-table-column
        prop="gnome_gene_exon_id"
        label="gnomeGeneExonId"
      >
      </el-table-column>
      <el-table-column
        prop="gnome_gene_exon_order"
        label="gnomeGeneExonOrder"
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
        label="length"
      >
        <template slot-scope="{ row }">
          <span>
            {{ row.end - row.start + 1 }}
          </span>
        </template>
      </el-table-column>
    </el-table>
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
    };
  },

  computed: {},

  watch: {},

  mounted() {
    this.getGeneStructure();
  },

  methods: {
    // 查询基因外显子结构
    getGeneStructure() {
      this.tableLoading = true;
      GeneApi.structure(this.ids).then((res) => {
        this.tableData = res.data.data.GenomeGeneExon ?? [];
        this.tableLoading = false;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.structure {
  padding: 16px;
}
</style>
