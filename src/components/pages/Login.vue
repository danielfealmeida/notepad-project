<template>
  <div class="signin">
      <NavbarSmall/>
      <div class="container">
          <form @submit.prevent="sendDetails">
              <h1>Log In</h1>
              <label for="email" class="email label">Email:</label><br/>
              <input name="email" type="email" autocomplete="off" v-model="email"/><br/>
              <label for="password" class="label">Password:</label><br/>
              <input name="password" type="password" autocomplete="off" v-model="password"/><br/>
              <button>SIGN UP</button><br/>
              <label class="feedback">{{ feedback }}</label>
          </form>
      </div>
  </div>
</template>

<script>
import NavbarSmall from "@/components/NavbarSmall"
import firebase from "firebase"
import animate from "animate.css"

export default {
  name: 'Home',
  data () {
    return {
        password: null,
        email: null,
        id: null,
        feedback: null,
    }
  },

  components: {
    NavbarSmall
  },

  methods: {
      sendDetails() {
          if(this.email && this.password)
          {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
                this.$router.push({ name: "Home" })
            })
          }
          else {
              this.feedback = "Fill in all the credentials."
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

    input {
      margin-bottom: 20px;
      margin-top: 20px;
      width: 100%;
    }

    form {
      margin-left: auto;
      margin-right: auto;
    }
</style>
