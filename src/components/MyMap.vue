<template>
  <vue-echarts :option="option"></vue-echarts>
</template>

<script>
import { ref } from 'vue'
import * as echarts from 'echarts'
export default {
  name: 'MyMap',
  setup() {
    const option = ref({})
    fetch('/geo.json')
      .then((res) => res.json())
      .then((data) => {
        echarts.registerMap('china', data)
        option.value = {
          geo: {
            map: 'china',
          },
          series: [
            {
              type: 'map',
              mapType: 'china',
              label: {
                // show: true,
                color: '#fff',
              },
              emphasis: {
                label: {
                  color: '#fff',
                },
              },
              // 这个设置的知识每个区域的样式，而非整体的样式。
              itemStyle: {
                // areaColor: 'red',
                // shadowColor: 'red',
                // shadowBlur: 20,
                // shadowOffsetX: 10,
                // shadowOffsetY: 20,
              },
            },
            {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: [
                {
                  value: [116.407143, 39.919805],
                },
              ],
            },
          ],
        }
      })
    return {
      option,
    }
  },
}
</script>

<style>
</style>
