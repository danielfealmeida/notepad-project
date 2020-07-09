<template>
  <div id="app">
    <NavbarSmall/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/NavbarSmall"
import db from "./firebase/init"
import dotenv from "dotenv"
dotenv.config()

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
    padding:6px; 
    font-size:20px; 
    text-align:left; 
    border-width:1px; 
    border-radius:10px; 
    border-style:solid; 
    border-color:#7ddcff;  
    font-weight:normal; 
    font-style:none; 
    text-align: center; 
  } 

  .label {
    justify-content: left;
    text-align: left;
    color: gray;
    margin-right: 60%;
  }

  .email {
    position: relative;
    left: 0px;
    margin-right: 75%;
    margin-left: 0%;
  }
		 
  input:focus { 
    outline: none; 
  } 

  .card.bigger {
    width: 500px;
    height: 600px;
    border: 1px solid #BDBDBD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
  }

  button {
    height: 50px;
    width: 100px;
    border: 1px solid #BDBDBD;
    background: #2D9CDB;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: white;
    border-radius: 15%;
  }

  .feedback {
    position: relative;
    color: red;
    top: 10px;
  }
</style>
