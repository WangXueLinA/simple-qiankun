import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css'


import { registerMicroApps, start, initGlobalState } from 'qiankun';

// 初始化全局状态
const actions = initGlobalState({
  message: '初始消息'
});

// 监听状态变化
actions.onGlobalStateChange((state, prevState) => {
  console.log('主应用react收到状态:', state);
});

// // 更新状态
// actions.setGlobalState({ message: '新消息' });

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/app-react',
    props: { 
      data: '主应用数据',
      onEvent: (data) => console.log('子应用触发事件:', data)
    }
  },
  {
    name: 'vueApp2',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/app-vue2',
  },
  {
    name: 'vueApp3',
    entry: '//localhost:8081',
    container: '#container',
    activeRule: '/app-vue3',
    props: { 
      data: '主应用数据vue3',
      onEvent: (data) => console.log('子应用触发事件vue3:', data)
    }
  },
]);

// 启动 qiankun
start();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


