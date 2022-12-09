<template>
  <div class="profile-container">
    <div class="img-container">
      <img src="~@/assets/images/member1.jpg" alt="profile image" />
    </div>
    <div class="info full-name">沈俱秦</div>
    <div class="info role">
      <i class="iconfont icon-position"></i>
      <span class="identity">香港大学生物学教授</span>
    </div>
    <div class="info detail">
      <i class="iconfont icon-jianjie"></i>
      <span>细胞信号传导通路中的酪氨酸去磷酸化酶的研究及药物筛选；
        承担本科生“膜的分子生物学”和研究生的“高级生物化学与分子”课
      </span>
    </div>
    <div class="social-container">
      <div class="contact">
        <i class="iconfont icon-ziyuan"></i>
        <span>12333333</span>
      </div>
      <div class="contact">
        <i class="iconfont icon-mail_fill"></i>
        <span>123@163.com</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
.profile-container {
  position: relative;
  background-color: #fff;
  box-sizing: border-box;
  width: 230px;
  height: 300px;
  padding: 90px 16px 20px;
  border-radius: 12px;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: box-shadow ease 0.5s;

  &:hover {
    box-shadow: 0 0 60px 5px rgba(0, 0, 0, 0.3);
  }

  .img-container {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border: 5px #fff solid;
    border-radius: 50%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.35);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 100%;
      max-width: 100%;
      transform: scale(1.1);
    }
  }

  .info {
    margin-bottom: 12px;

    i {
      margin-right: 8px;
      font-size: 1.1em;
    }

    &.full-name {
      font-size: 1.2em;
      font-weight: bold;
      letter-spacing: 1px;
      color: #555;
    }

    &.role {
      display: flex;
      justify-content: space-between;
    }

    &.detail {
      flex: 1;
    }
  }

  .social-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #777;
    font-size: 0.8em;

    i {
      margin-right: 3px;
    }
  }
}
</style>
