<template>
  <div class="genome">
    <div class="about">
      <h3>关于大黄鱼</h3>
      <div>
        <el-image
          :src="imgSrc"
          class="about-image"
        ></el-image>
        <p class="subscribe">
          Large yellow croaker (Larimichthys crocea (Richardson, 1846)) is a temperate-water migratory fish that is mainly distributed in the coastal areas of East China and Southeast
          Chaa it is ona of the most econom cally Insoortant marine fish io China wath an annual cultured yleld that exceeds any other net-cage-farmed marine fish species. With the recent rapid development of the culture industry, a series of problems, including lower growth rate, poor disease resistance, and lower viability, have been emerging in the cultured large yellow croaker. Therefore, genetic improvement for important economic traits has been considered a potentially effective means to overcome these problems addition, large yellow croaker is especially sensitive to air exposure and hypoxia. This makes the large yellow croaker's case suitable for investigating response mechanisms to environmental stress. Large yellow croaker (Larimichthys crocea (Richardson, 1846)) is a temperate-water migratory fish that is mainly distributed in the coastal areas of East
          China and Southeast China
        </p>
      </div>
    </div>
    <el-divider />
    <div class="summary">
      <h3>大黄鱼基因组汇总统计</h3>
      <el-descriptions class="margin-top"
        :column="1"
        border
        labelStyle="width: 370px"
      >
        <el-descriptions-item label="参考序列">
          GCA_000003025.6(Sscrofa11.1)
        </el-descriptions-item>
        <el-descriptions-item label="缩写">
          科学与技术中心
        </el-descriptions-item>
        <el-descriptions-item label="基因组大小">
          2.5Gb
        </el-descriptions-item>
        <el-descriptions-item label="基因">
          31908
        </el-descriptions-item>
        <el-descriptions-item label="染色体数目">
          20
        </el-descriptions-item>
        <el-descriptions-item label="脚手架数量">
          705
        </el-descriptions-item>
        <el-descriptions-item label="重叠群N50">
          48.2 兆字节
        </el-descriptions-item>
        <el-descriptions-item label="脚手架N50">
          88.2 兆字节
        </el-descriptions-item>
        <el-descriptions-item label="GC百分比">
          41.5
        </el-descriptions-item>
        <el-descriptions-item label="布斯科">
          C:98.2%[S:97.7%,D:0.5%],F:0.3%,M:1.6%
        </el-descriptions-item>
        <el-descriptions-item label="参考">
          <template v-for="item in reference">
            <a :key="item" href="http://" target="_blank">
              {{ item }}
              <span>, </span>
            </a>
          </template>
        </el-descriptions-item>
      </el-descriptions>
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
      reference: ['Warr A', 'Affara N', 'Aken B', 'et al.', 'Thousand Genomes Project', '2020', '9(6): giaa051'],
      imgSrc: require('@/assets/images/yu2.jpg'),
    };
  },

  computed: {},

  watch: {},

  mounted() {},

  methods: {},
};
</script>

<style lang='scss' scoped>
.genome {
  margin-top: 16px;
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);

  h3 {
    color: #18BAE5;
  }

  .about {
    &>div {
      display: flex;
      gap: 20px;
    }

    .about-image {
      flex: 1;
    }

    .subscribe {
      margin: 0;
      padding: 10px;
      flex: 1.5;
      font-size: 16px;
      line-height: 1.5;
    }
  }

  .summary {
    a {
      text-decoration-line: none;
    }
  }
}
</style>
