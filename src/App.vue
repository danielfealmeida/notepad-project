<template>
  <div id="app">
    <NavbarSmall/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/NavbarSmall"

export default {
  name: 'App',
  components: {
    Navbar
  }
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
