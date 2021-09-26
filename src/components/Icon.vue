<template>
  <svg class="icon">
    <use :href="id"></use>
  </svg>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    name: String,
  },
  setup(props) {
    const id = ref(`#${props.name}`)
    return {
      id,
    }
  },
})
</script>

<style>
.icon {
  width: 100%;
  height: 100%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>