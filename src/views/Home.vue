<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.axios.get("http://localhost:3000/popular").then(res => {
      console.log(res.data);
    });
  }
};
</script>

<style>
</style>