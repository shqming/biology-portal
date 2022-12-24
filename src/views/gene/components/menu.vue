<template>
  <div class="menu">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="item shadow"
      :class="{ active: active === item.title }"
      @click="Check(item)"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  components: {},

  data() {
    return {
      active: '',
    };
  },

  computed: {},

  watch: {},

  mounted() {
    const activeItem = this.items.filter((item) => item.active === true)[0];
    this.Check(activeItem);
  },

  methods: {
    Check(item) {
      this.active = item.title;
      this.$emit('check', item);
    },
  },
};
</script>

<style lang='scss' scoped>
.menu {
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    width: 226px;
    height: 50px;
    font-size: 18px;
    background-color: #fff;

    &:hover {
      cursor: pointer;
      background-color: #5c8ce5;
      color: #fff;
    }

    &:not(:first-child) {
      margin-top: 16px;
    }
  }

  .active {
    background-color: #5c8ce5;
    color: #fff;
  }
}
</style>
