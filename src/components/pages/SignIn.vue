<template>
  <div class="signin">
      <NavbarSmall/>
      <div class="container">
          <form @submit.prevent="sendDetails">
              <h1>Sign up</h1>
              <label for="email" class="email label">Email:</label><br/>
              <input name="email" type="email" autocomplete="off" v-model="email" class="inputCred"/><br/>
              <label for="password" class="label">Password:</label><br/>
              <input name="password" type="password" autocomplete="off" v-model="password" class="inputCred"/><br/>
              <button>SIGN UP</button><br/>
              <label class="feedback">{{ feedback }}</label>
          </form>
      </div>
  </div>
</template>

<script>
import NavbarSmall from "@/components/NavbarSmall"
import firebase from "firebase"
import axios from "axios"

export default {
  name: 'Home',
  data () {
    return {
      password: null,
      email: null,
      feedback: null
    }
  },

  components: {
    NavbarSmall
  },

  methods: {
    sendDetails() {
      if(this.email && this.password) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
          axios.post("https://notepad-server.herokuapp.com/notes/createUser", { collection: "users", email: firebase.auth().currentUser.email, user: firebase.auth().currentUser.uid })
          this.$router.push({ name: "Home" })
        })
      }
      else {
        this.feedback = "Fill in all the credentials"
      }
    }
  }
}
</script>

<style scoped>
    .container {
        margin: auto;
        margin-top: 5%;
        width: 350px;
        height: 370px;
        border: 1px solid #BDBDBD;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 10px;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        display: flex;
    }

    h1 {
        margin-bottom: 20px;
        text-align: center;
        padding-left: 20px;
    }

    label {
        text-align: left;
    }

    input {
      margin-bottom: 20px;
      margin-top: 20px;
      width: 100%;
    }

    .inputCred {
      width: 100%;
    }

    form {
      margin-left: auto;
      margin-right: auto;
    }
</style>
