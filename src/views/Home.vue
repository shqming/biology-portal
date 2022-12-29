<template>
  <div class="home">
    <el-carousel>
      <el-carousel-item v-for="src in imgs" :key="src">
        <el-image :src="src" fill="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
    <div class="search-wrap">
      <span>基因组： </span>
      <el-select v-model="genomeID" filterable clearable size="medium" placeholder="请选择">
        <el-option
          v-for="item in genomeList"
          :key="item.gnome_version_id"
          :label="item.gnome_species_name"
          :value="item.gnome_version_id">
        </el-option>
      </el-select>
      <el-input placeholder="请输入内容" v-model="geneName" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="jump">搜索</el-button>
      </el-input>
    </div>
    <div class="content-box">
      <div class="section1">
        <h2>分布地区</h2>
        <p>为暖温性近海中下层集群性洄游鱼类，分布于中国和朝鲜。在中国主要分布于南海、东海和黄海南部。</p>
        <h2>营养价值</h2>
        <p>肉质细嫩，味道鲜美，富含蛋白质，是人类较为理想的动物性蛋白源，同时大黄鱼鱼卵油在促进人体健康、降低发炎反应、调节血脂和降低血管疾病发病率方面具有重要作用。</p>
        <h2>养殖地位</h2>
        <p>养殖规模不断扩大，已形成巨大的养殖规模，成为中国最大宗单一海水养殖鱼类，2020年养殖总量25.40万吨，养殖产量居海水养殖鱼类首位。</p>
      </div>
      <div class="section2">
        <el-image
          style="width: 100%; height: 100%"
          :src="imgSrc"
          :preview-src-list="[imgSrc]"
        >
        </el-image>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      imgs: [
        require('../assets/images/yu.png'),
        'https://cdn.pixabay.com/photo/2017/02/01/13/53/analysis-2030265_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/03/21/10/26/environmental-protection-683437_1280.jpg',
        'https://cdn.pixabay.com/photo/2018/09/06/18/49/bacteria-3658992_1280.jpg',
      ],
      imgSrc: require('../assets/images/区域2.jpg'),
      genomeID: '',
      geneName: '',
    };
  },
  components: {
  },
  computed: {
    ...mapState(['genomeList']),
  },
  mounted() {
  },
  methods: {
    // 跳转到基因
    jump() {
      this.$router.push({
        path: 'home/gene',
        query: {
          genomeID: this.genomeID,
          geneName: this.geneName,
        },
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.home {
  ::v-deep .el-carousel {
    margin-top: 2px;
    height: 300px;

    .el-carousel__container {
      height: 100%;
    }

    .el-image {
      width: 100%;
      height: 100%;
    }
  }

  .search-wrap {
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-select {
      margin-right: 24px;
    }

    .el-input {
      width: 50%;
    }
  }

  .content-box {
    height: 500px;
    display: flex;
    margin-bottom: 16px;

    .section1 {
      flex: 1.5;
      margin-right: 24px;

      h2 {
        color: #18BAE5;
      }
    }

    .section2 {
      flex: 1;
    }
  }
}

</style>
