<template>
  <div class="online-use">
    <div class="container shadow">
      <div class="selector">
        <el-tag v-for="item in allParam" :key="item" @click="selectParam(item)">
          {{ item }}
        </el-tag>
      </div>
      <div class="right">
        <div class="parameter">
          <el-tag
            v-for="(item, index) in selectedParam"
            :key="item"
            closable
            @close="selectedParam.splice(index, 1)"
          >
            {{ '参数：' + item }}
          </el-tag>
          <span class="tip" v-if="!selectedParam.length">
            请选择参数
          </span>
        </div>
        <div class="email">
          邮箱：
          <el-input
            style="width: 300px"
            size="medium"
            v-model="email"
            placeholder="请输入邮箱号"
          ></el-input>
        </div>
        <div class="btns">
          <el-button type="primary" icon="el-icon-s-flag" round>保存</el-button>
          <el-button type="success" icon="el-icon-check" round>提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      allParam: [
        '基因参数1',
        '基因参数2',
        '基因参数3',
        '基因参数4',
        '基因参数5',
        '基因参数6',
        '基因参数7',
        '基因参数8',
        '基因参数9',
        '基因参数10',
      ],
      selectedParam: [],
      email: '',
    };
  },
  components: {},
  mounted() {},
  methods: {
    selectParam(item) {
      this.selectedParam.push(item);
    },
  },
};
</script>

<style lang='scss' scoped>
.online-use {
  margin: 16px 0;

  .container {
    width: 800px;
    min-height: 400px;
    margin: 0 auto;
    border-radius: 10px;
    display: flex;

    .selector {
      width: 120px;
      height: 100%;
      padding: 16px;
      border-right: 1px solid #aaa;
      display: flex;
      gap: 12px;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .el-tag {
        cursor: pointer;
      }
    }

    .right {
      padding: 16px;
      color: #666;
      font-weight: 600;
      display: flex;
      flex-direction: column;

      .parameter {
        flex: 1;
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        align-content: flex-start;

        .tip {
          color: #409EFF;
        }
      }

      .email {
        margin: 16px 0;
      }

      .btns .el-button {
        &:first-child {
          margin-right: 22px;
        }
      }
    }
  }
}
</style>
