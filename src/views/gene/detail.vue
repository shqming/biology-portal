<template>
  <div class="gene-detail">
    <div class="title shadow">
      {{ $route.params.id }}
    </div>
    <div class="content-wrap">
      <Menu :items="items" @check="check" />
      <div class="content shadow">
        <div class="content-title">
          {{ activeItem.contenTtitle }}
        </div>
        <component :is="activeItem.component" />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './components/menu.vue';
import Info from './components/info.vue';
import Sequence from './components/sequence.vue';
import Structure from './components/structure.vue';
import Annotation from './components/annotation.vue';
import Paper from './components/paper.vue';

export default {
  name: '',

  props: {},

  components: {
    Menu,
    Info,
    Sequence,
    Structure,
    Annotation,
    Paper,
  },

  data() {
    return {
      items: [
        {
          title: '信息',
          icon: 'document-copy',
          contenTtitle: '基本信息',
          component: 'info',
          active: true,
        },
        {
          title: '序列', icon: 's-unfold', contenTtitle: '相关序列', component: 'sequence',
        },
        {
          title: '结构', icon: 'c-scale-to-original', contenTtitle: '基因结构', component: 'structure',
        },
        {
          title: '注解', icon: 'warning', contenTtitle: '基因变异', component: 'annotation',
        },
        {
          title: '论文', icon: 's-data', contenTtitle: '基因论文', component: 'paper',
        },
      ],
      activeItem: '',
    };
  },

  computed: {},

  watch: {},

  mounted() {},

  methods: {
    check(item) {
      console.log(item);
      this.activeItem = item;
    },
  },
};
</script>

<style lang='scss' scoped>
.gene-detail {
  margin-top: 16px;

  .title {
    transition: .3s;
    border-radius: 5px;
    background-color: #fff;
    padding: 20px;
    padding-left: 1%;
    font-weight: 700;
    font-size: 25px;
  }

  .content-wrap {
    margin-top: 16px;
    display: flex;
    gap: 20px;

    .content {
      flex: 1;

      .content-title {
        font-size: 16px;
        height: 54px;
        line-height: 50px;
        padding-left: 30px;
        background: rgb(245, 248, 255);
        box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px;
      }
    }
  }
}
</style>
