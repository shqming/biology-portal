<template>
  <div class="layout">
    <div class="header">
      <Header />
    </div>
    <div class="main">
      <!-- <router-view /> -->
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="footer">
      <div class="footer-content">
        <div class="left">
          <div class="title">
            平台信息
            <i class="iconfont icon-pingtaixinxi" />
          </div>
          <div class="item">
            建设单位：集美大学水产学院
          </div>
          <div class="item">
            技术支持：集美大学鱼类遗传育种实验室
          </div>
        </div>
        <div class="center">
          <div class="title">
            联系我们
            <i class="iconfont icon-lianxiwomen" />
          </div>
          <div class="item">
            联系电话：0000-5555555555555
          </div>
          <div class="item">
            电子邮箱：123123123@163.com
          </div>
        </div>
        <div class="right">
          <div class="title">
            友情链接
            <i class="iconfont icon-youqinglianjie" />
          </div>
          <div class="item">
            网站1
          </div>
          <div class="item">
            网站2
          </div>
        </div>
      </div>
      <div class="cpoy-right">
        版权所有 © 2022 IPHUPUHU 京ICP备 xxxxxx 号-1
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header.vue';

export default {
  name: '',
  data() {
    return {
    };
  },
  components: {
    Header,
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
.layout {
  margin: 0 auto;
  position: relative;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    border-bottom: 1px solid rgba(60, 60, 60, .12);
    box-shadow: 0 0 3px #999;
  }

  .main {
    flex: 1;
    width: 1220px;
    margin: 0 auto;

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }
  }

  .footer {
    white-space:nowrap;
    width: 100%;
    background: #3d4c64;
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer-content {
      height: 180;
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 14px;
      display: flex;

      .center {
        margin: 0 80px;
      }
      .title {
        height: 24px;
        font-size: 18px;
        color: #ffffff;
        letter-spacing: 0;
        font-weight: 600;
        margin-bottom: 20px;

        i {
          display: inline-block;
          margin-left: 12px;
          color: #4d70c2;
        }
      }
      .item {
        font-size: 14px;
        color: #ffffff;
        letter-spacing: 0;
        line-height: 35px;
        font-weight: 400;
        cursor: pointer;
      }
    }

    .cpoy-right {
      margin-bottom: 14px;
      font-size: 12px;
      color: #999;
      letter-spacing: 0;
      line-height: 22px;
      font-weight: 400;
    }
  }
}
</style>
