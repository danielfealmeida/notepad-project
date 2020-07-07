<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Advent Pro', sans-serif;
  }

  input {
    border: none;
    border-bottom: 1px solid #2D9CDB;
    width: 80%;
    height: 40px;
    font-size: 20px;
  }
</style>
