<template>
  <div class="team shadow">
    <div class="title">
      <i class="iconfont icon-uf_team"></i>
      <span>团队成员</span>
    </div>
    <div class="card-wrap">
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </div>
  </div>
</template>

<script>
import MemberCard from '@/components/memberCard.vue';

export default {
  name: '',
  data() {
    return {

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
