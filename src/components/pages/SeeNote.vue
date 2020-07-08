<template>
  <div class="mkNote">
      <NavbarSmall/>
      <div class="container">
        <div class="card bigger">
          <form>
            <h3>Edit a Note</h3>
            <label for="name">Title:</label><br/>
            <input type="text" name="name" autocomplete="off" v-model="title"/><br/>
            <label for="content">Text:</label><br/>
            <textarea name="content" cols="30" rows="10" v-model="text"></textarea><br/>
          </form>
          <button @click="deleteNote">Delete</button>
        </div>
      </div>
  </div>
</template>

<script>
import NavbarSmall from "@/components/NavbarSmall"
import firebase from "firebase"
import axios from "axios"

export default {
  name: 'seeNote',
  data () {
    return {
      title: this.$route.params.id,
      text: null
    }
  },

  mounted() {
    axios.get("https://notepad-server.herokuapp.com/notes/note/" + this.$route.params.id).then(res => {
      this.title = res.data.title
      this.text = res.data.text
    })
  },

  components: {
    NavbarSmall
  },

  methods: {
    deleteNote() {
      axios.get("https://notepad-server.herokuapp.com/notes/delete/" + this.$route.params.id).then(() => {
        this.$router.push({ name: "Home" })
      })
    }
  }
}
</script>

<style scoped>
  .container {
    margin-left: 50%;
    transform: translate(-40%, 0px);
    margin-top: 3%;
    margin-bottom: 3%;
    padding: 10px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    display: flex;
  }

  h3 {
    font-size: 30px;
  }

  textarea {
    font-size: 20px;
    margin-top: 20px;
  }
  
  input {
      margin-bottom: 20px;
  }
  
  button {
    margin-top: 20px;
    height: 50px;
    width: 90px;
    border: 1px solid #BDBDBD;
    background: #2D9CDB;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    color: white;
  }
</style>
