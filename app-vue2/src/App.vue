<template>
  <div id="app">
    <nav>
      <h1 style="color: red; fontSize: 50px">App-Vue2 - 我是 8080 端口</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app-p{
  color: red;
}
</style>
