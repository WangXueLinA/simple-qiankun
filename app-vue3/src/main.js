import App from './App.vue'
import { createApp } from 'vue'

/* eslint-disable */
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let instance = null

function render(props = {}) {
  instance = createApp(App)
  const { container } = props;
  instance.mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  //console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  //console.log('[vue] props from main framework', props);
  render(props)
}
export async function unmount() {
  instance.unmount()
  //instance = null
}
