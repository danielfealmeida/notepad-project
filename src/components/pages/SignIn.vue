<template>
  <div class="signin">
      <NavbarSmall/>
      <div class="container">
          <form @submit.prevent="sendDetails">
              <h1>Sign up</h1>
              <label for="email">Email:</label><br/>
              <input name="email" type="email" autocomplete="off" v-model="email"/>
              <label for="password">Password:</label>
              <input name="password" type="password" autocomplete="off" v-model="password"/><br/>
              <button>SIGN UP</button>
          </form>
      </div>
  </div>
</template>

<script>
import NavbarSmall from "@/components/NavbarSmall"

export default {
  name: 'Home',
  data () {
    return {
      password: null,
      email: null
    }
  },

  components: {
    NavbarSmall
  }
}
</script>

<style scoped>
    .container {
        margin: auto;
        margin-top: 5%;
        width: 350px;
        height: 400px;
        border: 1px solid #BDBDBD;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 10px;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        display: flex;
    }

    h1 {
        margin-bottom: 40px;
        text-align: left;
        padding-left: 20px;
    }

    label {
        text-align: left;
    }

    input {
        margin-bottom: 20px;
    }

    button {
        height: 50px;
        width: 90px;
        border: 1px solid #BDBDBD;
        background: #2D9CDB;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        color: white;
    }
</style>
