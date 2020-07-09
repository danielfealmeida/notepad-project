<template>
  <div class="home">
    <Navbar/>
    <div class="content">
      <a :href="cardUrls[index]" v-for="(card, index) in cards" :key="index">
        <div class="card">
          <h3>{{ card.title }}</h3>
          <p>{{ card.text }}</p>
        </div>
      </a>
    </div>
    <p v-if="feedback" class="feedback">{{ feedback }}</p>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import axios from "axios"
import slugify from "slugify"
import firebase from "firebase"
import db from "@/firebase/init.js"

export default {
  name: 'Home',
  data () {
    return {
      cards: [],
      cardUrls: [],
      feedback: null
    }
  },
  
  components: {
    Navbar
  },

  mounted() {
    db.collection("notes").onSnapshot(() => {
      this.cards = [];
      this.cardUrls = [];
      axios.get("https://notepad-server.herokuapp.com/notes/" + firebase.auth().currentUser.uid).then(res => {
        res.data.forEach(card => {
          if(card.user == firebase.auth().currentUser.uid) {
            this.cards.push(card)
            this.cardUrls.push("seenote/" + card.id);
          }
        });
      })
    })
  },

  created() {
    firebase.auth().onAuthStateChanged(() => {
      if(!firebase.auth().currentUser) {
        this.cards = []
        this.cardUrls = []
        this.feedback = "You need to login to use this application."
      }
    })
  }
}
</script>

<style scoped>
  .card {
    width: 390px;
    height: 210px;
    border: 1px solid #BDBDBD;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    font-family: "Roboto";
  }

  .content {
    display: grid;
    width: 60%;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .card h3 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 57px;
    margin: 0px;
  }

  .card p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 33px;
    align-items: center;
    margin: 0px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .feedback {
    margin-right: auto;
    margin-left: auto;
    width: 400px;
    font-size: 20px;
    color: lightgray;
  }
</style>
