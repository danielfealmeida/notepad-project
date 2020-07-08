<template>
  <div id="app">
    <NavbarSmall/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/NavbarSmall"
import db from "./firebase/init"

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

  .card.bigger {
    width: 500px;
    height: 600px;
    border: 1px solid #BDBDBD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
  }
</style>
