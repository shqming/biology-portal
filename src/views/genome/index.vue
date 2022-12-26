<template>
  <div class="genome">
    <div class="about">
      <h3>关于{{ data.gnome_name }}</h3>
      <div>
        <el-image
          :src="data.gnome_pic_url"
          class="about-image"
          :preview-src-list="[data.gnome_pic_url]"
        ></el-image>
        <p class="subscribe">
          {{ data.description }}
        </p>
      </div>
    </div>
    <el-divider />
    <div class="summary">
      <h3>{{ data.gnome_name }}基因组汇总统计</h3>
      <el-descriptions class="margin-top"
        :column="1"
        border
        :labelStyle="{ width: '370px' }"
      >
        <el-descriptions-item label="参考序列">
          GCA_000003025.6(Sscrofa11.1)
        </el-descriptions-item>
        <el-descriptions-item label="缩写">
          科学与技术中心
        </el-descriptions-item>
        <el-descriptions-item label="基因组大小">
          {{ data.gnome_size }} 字节
        </el-descriptions-item>
        <el-descriptions-item label="基因编号">
          {{ data.gnome_gene_num }}
        </el-descriptions-item>
        <el-descriptions-item label="染色体数目">
          20
        </el-descriptions-item>
        <el-descriptions-item label="脚手架数量">
          705
        </el-descriptions-item>
        <el-descriptions-item label="重叠群N50">
          {{ data.gnome_contig_N50 }} 字节
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
import GenomeApi from '@/api/genome';

export default {
  name: '',

  props: {},

  components: {},

  data() {
    return {
      reference: ['Warr A', 'Affara N', 'Aken B', 'et al.', 'Thousand Genomes Project', '2020', '9(6): giaa051'],
      imgSrc: require('@/assets/images/yu2.jpg'),
      data: {},
    };
  },

  computed: {},

  watch: {
    $route: {
      handler() {
        this.getDetail();
      },
      immediate: true,
    },
  },

  mounted() {},

  methods: {
    getDetail() {
      const { id } = this.$route.params;
      GenomeApi.genomeDetail(id).then((res) => {
        this.data = res.data.data;
      });
    },
  },
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
