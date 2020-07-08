<template>
  <div class="navbar">
    <div class="nav-links">
      <ul>
        <li class='logo'><a href="/">NotePad</a></li>
        <li><a href="/">Home</a></li>
        <li v-if="!isAuth"><a href="/signin">Sign up</a></li>
        <li v-if="!isAuth"><a href="/login">Log in</a></li>
        <li v-if="isAuth"><a @click="logout">Log out</a></li>
        <li v-if="isAuth"><a>{{ userEmail }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"

export default {
  name: 'Navbar',
  data () {
    return {
      isAuth: null,
      userEmail: null
    }
  },

  mounted() {
    firebase.auth().onAuthStateChanged(() => {
      this.isAuth = firebase.auth().currentUser
      this.userEmail = firebase.auth().currentUser.email
    })
  },

  methods: {
    logout() {
      firebase.auth().signOut();
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

  .logo {
    margin-top: 0.5%;
    font-size: 50px;
  }
</style>
