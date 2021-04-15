<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-row>
      <el-button>这里应该是bili的icon图标</el-button>
      <el-button type="primary">主站</el-button>
      <el-button type="success">番剧</el-button>
      <el-button type="info">游戏中心</el-button>
      <el-button type="warning">直播</el-button>
      <el-button type="danger">会员购</el-button>
      <el-button type="danger">漫画</el-button>
      <el-button type="danger">赛事</el-button>
      <el-button type="danger">下载APP</el-button>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
