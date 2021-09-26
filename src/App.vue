<template>
  <div>
    <!-- <FileCom/> -->
    <!-- <is-com name="iscom"
            foo="foo不是">
      <template #pre>
        我是前面的内容
      </template>
      <template #next>
        我是后面的内容
      </template>
    </is-com> -->
    <!-- <HelloWorld  /> -->
    <!-- <my-time />
  <my-map /> -->
    <!-- <Icon name="iconRect"
        class="icon-rect"></Icon>
  <Icon name="icon-weixin"
        class="icon-weixin"></Icon> -->
    <div class="pp"
         @click="handleClick">
      woshiwdadw
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MyMap from './components/MyMap.vue'
// import MyTime from './components/MyTime.vue'
// import lqip from 'lqip'
// import Icon from './components/Icon.vue'
// import IsCom from './components/IsCom.vue'
// import FileCom from './components/FileCom.vue'
import axios from 'axios'
import { onMounted } from 'vue'
axios
  .get('http://127.0.0.1:7001/index', {
    withCredentials: true,
  })
  .then((res) => {
    console.log(res)
  })
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // MyTime,
    // MyMap,
    // Icon,
    // IsCom,
    // FileCom,
  },
  setup() {
    // axios
    //   .post('http://127.0.0.1:7001/second', {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log(res)
    //   })

    // axios
    //   .get('http://127.0.0.1:7001/third', {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     console.log(res)
    //   })
    onMounted(() => {
      // const pp = document.getElementsByClassName('pp')
      // pp.style.background = 'blue'
    })
    const handleClick = () => {
      const pp = document.getElementsByClassName('pp')[0]
      pp.style.background = 'blue'
    }
    return {
      handleClick,
    }
  },
}
</script>

<style lang="scss" scoped>
@import url('../src/assets/reset.css');
#app,
html,
body {
  width: 100%;
  height: 100%;
}
/* @import url('./assets/iconfont/iconfont.css'); */
/* .icon-weixin,
.icon-rect {
  width: 20px;
  height: 20px;
  color: red;
} */

// .person {
//   .son {
//     color: red;
//   }
// }

div {
  color: blue;
}
</style>
