<template>
  <div class="help">
    <iframe
      class="preview-pdf-component"
      width="100%"
      height="100%"
      scrolling="no"
      src="/pdfjs-2.5.207-es5-dist/web/viewer.html?file=/pdf/帮助文档.pdf"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: '',

  props: {},

  components: {},

  data() {
    return {
    };
  },

  computed: {},

  watch: {},

  mounted() {},

  methods: {},
};
</script>

<style lang='scss' scoped>
.help {
  padding: 24px 0;
  height: 800px;
}
</style>
