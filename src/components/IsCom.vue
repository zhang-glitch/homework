<template>
  <div class="is-com">
    这个添加到ul是错误的。但是通过is="vue:"形式可以防止出现错误。
    {{foo}}
    <slot name="pre"></slot>
    <slot name="next"></slot>
    <p class="son">我是</p>
  </div>
</template>

<script setup >
// import axios from 'axios'
import { useSlots, useAttrs, defineProps } from 'vue'

// 获取当前组件的插槽。
const slots = useSlots()
const attrs = useAttrs()
console.log(slots, attrs)
defineProps({
  foo: {
    type: String,
    default: '我是默认的foo',
  },
})

const fontStyle = 'blue'
// const res = await axios('http://myjson.dit.upm.es/api/bins/ksk')
// console.log(res)
</script>

<style  scoped>
.is-com {
  color: red;
}

.son {
  color: v-bind('fontStyle');
}
</style>