<template>
  <vue-echarts :option="option"></vue-echarts>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MyTime',
  setup() {
    const option = ref({})
    option.value = {
      baseOption: {
        timeline: {
          axisType: 'category',
          autoPlay: true,
          playInterval: 1000,
          data: ['a', 'b', 'c'],
          currentIndex: 2,
          symbol: 'triangle',
          symbolRotate: 20,
        },
        title: [
          {
            subtext: '数据来自国家统计局',
          },
        ],
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['1', '2', '3'],
        },
        yAxis: {},
        series: [
          // {
          //   type: 'bar',
          // },
          {
            type: 'lines',
            // 表示起点和终点有多条线。
            // polyline: true,
            // data: [
            //   {
            //     coords: [
            //       [113.4668, 34.6234], // 起点
            //       [118.8062, 31.9208], // 终点
            //       // 如果 polyline 为 true 还可以设置更多的点
            //       [123.1238, 42.1216],
            //       [121.4648, 31.2891],
            //       [110.3893, 19.8516],
            //       [108.479, 23.1152],
            //     ],
            //   },
            // ],
            data: {
              coords: [
                [120, 66], // 起点
                [122, 67], // 终点
              ],
            },
          },
        ],
      },
      // options: [
      //   {
      //     title: {
      //       text: 'a阶段',
      //     },
      //     series: [
      //       {
      //         data: [20, 90, 43],
      //       },
      //     ],
      //   },
      //   {
      //     title: {
      //       text: 'b阶段',
      //     },
      //     series: [
      //       {
      //         data: [132, 2, 530],
      //       },
      //     ],
      //   },
      //   {
      //     title: {
      //       text: 'c阶段',
      //     },
      //     series: [
      //       {
      //         data: [32, 25, 50],
      //       },
      //     ],
      //   },
      // ],
    }
    return {
      option,
    }
  },
}
</script>

<style>
</style>
