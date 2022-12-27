<template>
  <div class="annotation">
    <el-table
      :data="tableData"
      height="700"
      v-loading="tableLoading"
      :header-cell-style="{ 'background-color': '#f8f8f9', 'text-align': 'center'}"
    >
      <el-table-column label="Annotation Link">
        <el-table-column
          prop="link_webSite"
          label="Link WebSite"
        >
          <template slot-scope="{ row }">
            <a :href="row.link_src" target="_blank">
              {{ row.link_webSite }}
            </a>
          </template>
        </el-table-column>
        <el-table-column
          prop="simple_description"
          label="Simple Description"
        >
        </el-table-column>
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
    this.getAnnotation();
  },

  methods: {
    // 查询基因注释连接
    getAnnotation() {
      this.tableLoading = true;
      GeneApi.annotation(this.ids).then((res) => {
        const { data } = res.data;
        this.tableData = [
          {
            link_webSite: 'NCBI',
            link_src: data.NCBI_gene_url,
            simple_description: 'Proline/serine-rich coiled-coil protein 1/G2 and s phase-expressed protein 1',
          },
          {
            link_webSite: 'UNIPROT',
            link_src: data.uniprot_gene_url,
            simple_description: 'G2 and S phase-expressed protein 1',
          },
          {
            link_webSite: 'SWISSPROT',
            link_src: data.gene_card_url,
            simple_description: 'G2 and S phase-expressed protein 1. N-terminal',
          },
        ];
        this.tableLoading = false;
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.annotation {
  padding: 16px;
}
</style>
