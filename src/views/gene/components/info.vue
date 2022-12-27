<template>
  <div class="info">
    <el-descriptions class="margin-top"
        :column="1"
        border
        :labelStyle="{ width: '370px' }"
      >
        <el-descriptions-item label="GenomeGeneID">
          {{ info.GenomeGeneID }}
        </el-descriptions-item>
        <el-descriptions-item label="SpeciesID">
          {{ info.SpeciesID }}
        </el-descriptions-item>
        <el-descriptions-item label="ChrID">
          {{ info.ChrID }}
        </el-descriptions-item>
        <el-descriptions-item label="Start">
          {{ info.Start }}
        </el-descriptions-item>
        <el-descriptions-item label="End">
          {{ info.End }}
        </el-descriptions-item>
        <el-descriptions-item label="GeneName">
          {{ info.GeneName }}
        </el-descriptions-item>
        <el-descriptions-item label="GeneAllName">
          {{ info.GeneAllName }}
        </el-descriptions-item>
        <el-descriptions-item label="AllSeqLength">
          {{ info.AllSeqLength }}
        </el-descriptions-item>
        <el-descriptions-item label="LongestTranscriptLength">
          {{ info.LongestTranscriptLength }}
        </el-descriptions-item>
        <el-descriptions-item label="LongestProteinLength">
          {{ info.LongestProteinLength }}
        </el-descriptions-item>
        <el-descriptions-item label="Description">
          {{ info.Description }}
        </el-descriptions-item>
      </el-descriptions>
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
      info: {},
    };
  },

  computed: {},

  watch: {},

  mounted() {
    this.getGeneInfo();
  },

  methods: {
    // 查询某基因简要信息
    async getGeneInfo() {
      const res = await GeneApi.information(this.ids);
      if (res && res.data) {
        this.info = res.data.data;
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.info {
  padding: 16px;
}
</style>
