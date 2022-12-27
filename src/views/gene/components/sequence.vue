<template>
  <div class="sequence">
    <div class="left">
      <div class="seq">
        <span class="title">All Sequence</span>
        <span class="btn">gDNA</span>
      </div>
      <div class="seq">
        <span class="title">Transcript Sequence</span>
        <span class="btn">gCDS</span>
      </div>
      <div class="seq">
        <span class="title">Protein Sequence</span>
        <span class="btn">Sequence</span>
      </div>
    </div>
    <div class="right">
      <el-input
        type="textarea"
        rows="10"
        v-model="info.AllSeq"
      >
      </el-input>
      <el-input
        type="textarea"
        rows="10"
        v-model="info.TranscriptSeq"
      >
      </el-input>
      <el-input
        type="textarea"
        rows="10"
        v-model="info.ProteinSeq"
      >
      </el-input>
    </div>
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
      textarea1: '123',
      info: {
        AllSeq: '',
        TranscriptSeq: '',
        ProteinSeq: '',
      },
    };
  },

  computed: {},

  watch: {},

  mounted() {
    this.getGeneSequence();
  },

  methods: {
    // 查询基因序列
    async getGeneSequence() {
      const res = await GeneApi.sequences(this.ids);
      if (res && res.data) {
        this.info = res.data.data;
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.sequence {
  padding: 16px;
  height: 800px;
  display: flex;
  gap: 20px;

  .left {
    width: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(245, 248, 255);

    .seq {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;

      .title {
        font-size: 18px;
        font-weight: 700;
      }

      .btn {
        cursor: pointer;
        display: inline-block;
        width: 140px;
        height: 48px;
        background-color: #5c8ce5;
        line-height: 48px;
        text-align: center;
        color: #fff;
      }
    }
  }

  ::v-deep .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .el-textarea {
      flex: 1;
      .el-textarea__inner {
        height: 100%;
      }
    }
  }
}
</style>
