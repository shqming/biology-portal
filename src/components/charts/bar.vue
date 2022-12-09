<template>
<v-chart :options="polar"/>
</template>

<script>
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/line';
import echarts from 'echarts';

export default {
  components: {
    'v-chart': ECharts,
  },
  data() {
    return {
      polar: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#dddc6b',
            },
          },
        },
        legend: {
          top: '0%',
          textStyle: {
            color: '#555',
            fontSize: '12',
          },
        },
        grid: {
          left: '10',
          top: '30',
          right: '10',
          bottom: '10',
          containLabel: true,
        },

        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: 'rgba(0,0,0,.6)',
                fontSize: 12,
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(0,0,0,.2)',
              },
            },

            data: [
              '01',
              '02',
              '03',
              '04',
              '05',
              '06',
              '07',
              '08',
              '09',
              '11',
              '12',
              '13',
              '14',
              '15',
              '16',
              '17',
              '18',
              '19',
              '20',
              '21',
              '22',
              '23',
              '24',
              '25',
              '26',
              '27',
              '28',
              '29',
              '30',
            ],
          },
          {
            axisPointer: { show: false },
            axisLine: { show: false },
            position: 'bottom',
            offset: 20,
          },
        ],

        yAxis: [
          {
            type: 'value',
            axisTick: { show: false },
            axisLine: {
              lineStyle: {
                color: 'rgba(0,0,0,.1)',
              },
            },
            axisLabel: {
              textStyle: {
                color: 'rgba(0,0,0,.6)',
                fontSize: 12,
              },
            },

            splitLine: {
              lineStyle: {
                color: 'rgba(0,0,0,.1)',
              },
            },
          },
        ],
        series: [
          {
            name: '方法量',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: '#0184d5',
                width: 2,
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(1, 132, 213, 0.4)',
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(1, 132, 213, 0.1)',
                    },
                  ],
                  false,
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
              },
            },
            itemStyle: {
              normal: {
                color: '#0184d5',
                borderColor: 'rgba(221, 220, 107, .1)',
                borderWidth: 12,
              },
            },
            data: [
              30,
              40,
              30,
              40,
              30,
              40,
              30,
              60,
              20,
              40,
              20,
              40,
              30,
              40,
              30,
              40,
              30,
              40,
              30,
              60,
              20,
              40,
              20,
              40,
              30,
              60,
              20,
              40,
              20,
              40,
            ],
          },
          {
            name: '数据量',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: '#00d887',
                width: 2,
              },
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(0, 216, 135, 0.4)',
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(0, 216, 135, 0.1)',
                    },
                  ],
                  false,
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
              },
            },
            itemStyle: {
              normal: {
                color: '#00d887',
                borderColor: 'rgba(221, 220, 107, .1)',
                borderWidth: 12,
              },
            },
            data: [
              50,
              30,
              50,
              60,
              10,
              50,
              30,
              50,
              60,
              40,
              60,
              40,
              80,
              30,
              50,
              60,
              10,
              50,
              30,
              70,
              20,
              50,
              10,
              40,
              50,
              30,
              70,
              20,
              50,
              10,
              40,
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang='scss' scoped>
/**
 * 默认尺寸为 600px×400px，如果想让图表响应尺寸变化，可以像下面这样
 * 把尺寸设为百分比值（同时请记得为容器设置尺寸）。
 */
.echarts {
  width: 100%;
  height: 100%;
}
</style>
