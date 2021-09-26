import { createApp } from 'vue'
import App from './App.vue'
import VueEcharts from 'vue-echarts'
import 'element-plus/dist/index.css'
import { ElButton, ElUpload } from 'element-plus'

const app = createApp(App)
app.component("vue-echarts", VueEcharts)
app.use(ElButton)
app.use(ElUpload)
app.mount('#app')

// 这里必须的创建一个iframe元素。
let iframe = document.createElement("iframe");
iframe.width = 0;
iframe.height = 0;
iframe.style.display = 'none'
iframe.src = 'http://localhost:8080'
document.body.appendChild(iframe)
// 验证postMessage传参
window.addEventListener("message", (e) => {
  console.log("iframe传递数据")
  // console.log("e", e)
  if (e.origin === 'http://localhost:8080') {
    localStorage.setItem("token", e.data.token)
  }
})


