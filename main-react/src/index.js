import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css'


import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3001',
    container: '#container',
    activeRule: '/app-react',
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


