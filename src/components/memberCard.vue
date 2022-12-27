<template>
  <div class="profile-container">
    <div class="img-container">
      <img :src="info.avatar" object-fit="contain" alt="profile image" />
    </div>
    <div class="info full-name">{{ info.name }}</div>
    <div class="info role">
      <i class="iconfont icon-position"></i>
      <span class="identity">{{ info.identity }}</span>
    </div>
    <div class="info detail">
      <i class="iconfont icon-jianjie"></i>
      <span>{{ info.introduction }}</span>
    </div>
    <div class="social-container">
      <div class="contact">
        <i class="el-icon-s-home"></i>
        <a :href="info.url" target="_blank">{{ info.urlName }}</a>
      </div>
      <div class="contact">
        <i class="iconfont icon-mail_fill"></i>
        <span>{{ info.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
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
  width: 320px;
  height: 400px;
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
      object-fit: cover;
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
    align-items: center;
    color: #777;
    font-size: 0.8em;

    i {
      margin-right: 3px;

      &.el-icon-s-home {
        font-size: 16px;
      }
    }
  }
}
</style>
