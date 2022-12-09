<template>
  <div class="outer">
    <div class="logo">
      <i class="iconfont icon-weishengwuweishengwujianyan"></i>
      <span class="name">集美大学鱼类遗传育种实验室</span>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#fff"
      text-color="#333"
      active-text-color="#18BAE5"
      menu-trigger="click"
      router
      unique-opened
    >
      <el-menu-item index="/home">首页</el-menu-item>
      <el-submenu index="genome">
        <template slot="title">基因组</template>
        <el-menu-item index="/home/genome-1">选项1</el-menu-item>
        <el-menu-item index="/home/genome-2">选项2</el-menu-item>
        <el-menu-item index="/home/genome-3">选项3</el-menu-item>
        <el-menu-item index="/home/genome-4">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/gene">基因</el-menu-item>
      <el-menu-item index="/home/variation">变异</el-menu-item>
      <el-submenu index="tools">
        <template slot="title">工具</template>
        <el-menu-item index="/home/onlineUse">在线使用</el-menu-item>
        <el-menu-item index="/home/tools-2">选项2</el-menu-item>
        <el-menu-item index="/home/tools-3">选项3</el-menu-item>
        <el-menu-item index="/home/tools-4">选项4</el-menu-item>
        <el-menu-item index="/home/tools-5">选项5</el-menu-item>
        <el-menu-item index="/home/tools-6">选项6</el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/download">下载</el-menu-item>
      <el-menu-item index="/home/team">团队</el-menu-item>
      <el-menu-item index="/home/help">帮助</el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: '',
  data() {
    return {
      activeIndex: '/home',
    };
  },
  components: {},
  mounted() {},
  watch: {
    $route(to) {
      this.activeIndex = to.path;
    },
  },
  methods: {
  },
};
</script>

<style lang='scss' scoped>
.outer {
  height: 100%;
  width: 1220px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .logo {
    color: #18BAE5;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .iconfont {
      font-size: 32px;
      margin-right: 12px;
    }

    .name {
      font-size: 18px;
      font-weight: 600;
    }
  }

  ::v-deep .el-menu {
    .el-menu-item,
    .el-submenu__title {
      font-size: 16px;
      font-weight: 600;
    }
  }
}
</style>
