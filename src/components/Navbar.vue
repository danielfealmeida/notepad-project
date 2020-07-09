<template>
  <div class="navbar">
    <NavbarSmall/>
    <img src="@/assets/header.png" alt="header" class="header" draggable="false">
    <div class="logo-container">
      <h1 class="logo">NotePad</h1>
    </div>
    <a href="/mknote">
      <div class="btn">
        <p>Add Note</p>
      </div>
    </a>
  </div>
</template>

<script>
import NavbarSmall from "@/components/NavbarSmall"

export default {
  name: 'Navbar',
  data () {
    return {
      
    }
  },

  components: {
    NavbarSmall
  }
}
</script>

<style scoped>
  .header {
    width: 100vw;
    height: 60vh;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  .logo {
    position: absolute;
    left: 50%;
    top: -50px;
    transform: translate(-50%, 0%);
    font-family: 'Advent Pro', sans-serif;
    font-style: normal;
    font-weight: lighter;
    font-size: 200px;
    line-height: 239px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
  }

  .btn {
    position: absolute;
    top: 55%;
    left: 65%;
    border-radius: 10%;
    width: 130px;
    height: 50px;
    background: crimson;
  }

  .btn p {
    text-align: center;
    margin: auto;
    margin-top: 8%;
    font-size: 23px;
    font-weight: regular;
    font-family: "Roboto";
    color: white;
  }
</style>
