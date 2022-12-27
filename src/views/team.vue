<template>
  <div class="team shadow">
    <div class="title">
      <i class="iconfont icon-uf_team"></i>
      <span>团队成员</span>
    </div>
    <div class="card-wrap">
      <MemberCard v-for="(info, index) in infos" :key="index" :info="info"/>
    </div>
  </div>
</template>

<script>
import MemberCard from '@/components/memberCard.vue';

export default {
  name: '',
  data() {
    return {
      infos: [
        {
          name: '王志勇',
          avatar: require('@/assets/images/team/1王志勇.jpg'),
          identity: '集美大学教授',
          introduction: '方向：水产生物遗传育种学、水产生物技术：水产经济动植物种质特性评价和遗传改良技术研究；水产动植物繁殖和养殖技术；水产养殖动物的分子／细胞／数量／种群遗传学、基因组学和蛋白质组学； 水生生物的分子分类、分子生态和分子系统学。中国水产学会海水养殖分会和水产生物技术专业委员会副主任委员（2017~）、福建省遗传学会副理事长（2017~）、福建省动物学会理事。',
          url: 'http://fishery.jmu.edu.cn/info/1007/6829.htm',
          urlName: '王志勇-水产学院',
          email: 'zywang@jmu.edu.cn',
        },
        {
          name: '方铭',
          avatar: require('@/assets/images/team/2方铭.jpg'),
          identity: '集美大学教授',
          introduction: '方向：动物分子育种、动物经济性状遗传解析、人类疾病遗传解析。博士生导师，闽江学者特聘教授（2017），入选福建省百千万人才工程计划，福建省高层次人才B类，入选第十批厦门市双百计划，福建水产学会理事。',
          url: 'http://fishery.jmu.edu.cn/info/1007/6836.htm',
          urlName: '方铭-水产学院',
          email: 'fangming618@126.com',
        },
        {
          name: '李完波',
          avatar: require('@/assets/images/team/3李完波.jpg'),
          identity: '集美大学副教授',
          introduction: '主要研究方向为动物遗传育种和生物信息学，熟练掌握正向遗传学研究手段和大规模测序技术在动物遗传学和基因组学中的应用，包括全基因组重测序、外显子测序、RNA-seq、ChIP-seq等。同时，对常规分子生物学实验操作也较为熟练。',
          url: 'http://fishery.jmu.edu.cn/info/1008/6855.htm',
          urlName: '李完波-水产学院',
          email: 'li.wanbo@foxmail.com',
        },
        {
          name: '韩芳',
          avatar: require('@/assets/images/team/4韩芳.jpg'),
          identity: '集美大学教授',
          introduction: '长期从事鱼类分子免疫技术和分子育种技术，涉及到分子免疫学、分子生物学、微生物学。方向：水产动物免疫学：功能基因及表达调控机制、蛋白质功能及互作研究水产病原微生物学：细菌和病毒感染宿主的机制。-seq、ChIP-seq等。同时，对常规分子生物学实验操作也较为熟练。',
          url: 'http://fishery.jmu.edu.cn/info/1007/6843.htm',
          urlName: '韩芳-水产学院',
          email: 'hanfangyc@jmu.edu.cn',
        },
        {
          name: '张东玲',
          avatar: require('@/assets/images/team/5张东玲.png'),
          identity: '集美大学副教授',
          introduction: '方向：鱼类遗传育种：利用多种组学方法对鱼类多种性状进行良种选育；鱼类基因组学：组装鱼类基因组，挖掘功能基因； 鱼类抗病免疫：利用多种分子生物学方法对鱼类免疫基因进行功能研究。硕士生导师，福建省科技特派员。',
          url: 'http://fishery.jmu.edu.cn/info/1008/6856.htm',
          urlName: '张东玲-水产学院',
          email: '342312933@qq.com',
        },
        {
          name: '翁朝红',
          avatar: require('@/assets/images/team/6翁朝红.jpg'),
          identity: '集美大学教授',
          introduction: '方向：1、鲎保护生物学2、观赏水族养殖学3、水产动物发育调控和生物技术',
          url: 'https://fishery.jmu.edu.cn/info/1007/6840.htm',
          urlName: '翁朝红-水产学院',
          email: 'wengzhaohong@jmu.edu.cn',
        },
      ],
    };
  },
  components: {
    MemberCard,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
.team {
  margin: 16px 0;
  padding: 16px;
  min-height: 800px;
  // background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  border-radius: 5px;

  .title {
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: rgb(27, 22, 22);
    font-size: 22px;
    font-weight: 800;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 4px;
      width: 220px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #18BAE5;
      border-radius: 0 0 15px 15px;
    }

    .iconfont {
      font-size: 100%;
      margin-right: 12px;
      color: #18BAE5;
    }
  }

  .card-wrap {
    margin: 100px 16px 16px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 100px 50px;
  }
}
</style>
