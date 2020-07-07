<template>
  <div class="navbar">
    <NavbarSmall/>
    <img src="@/assets/header.png" alt="header" class="header" draggable="false">
    <div class="logo-container">
      <h1 class="logo">NotePad</h1>
    </div>
    <a href="/mknote">
      <div class="round-btn">
        <p>+</p>
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

  .round-btn {
    position: absolute;
    top: 55%;
    left: 70%;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    background: crimson;
  }

  .round-btn p {
    margin-left: 30%;
    margin-bottom: 160%;
    margin-top: -5%;
    font-size: 50px;
    color: white;
  }
</style>
