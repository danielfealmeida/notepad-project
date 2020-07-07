<template>
  <div class="navbar">
    <div class="nav-links">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/signin">Sign up</a></li>
        <li><a href="/login">Log in</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  .nav-links {
    background: #2D9CDB;
    width: 100vw;
    height: 80px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    display: flex;
    margin: 0px;
    margin-left: auto;
    margin-right: auto;
    height: 100px;
    padding: 0px;
  }

  li {
    display: inline-block;
    list-style: none;
    font-family: 'Advent Pro', sans-serif;
    font-size: 30px;
    color: #FFFFFF;
    width: 100vw;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
