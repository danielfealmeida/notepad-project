<template>
  <div class="home">
    <Navbar/>
    <div class="content">
      <a href="" v-for="(card, index) in cards" :key="index">
        <div class="card">
          <h3>NOTE</h3>
          <p>CONTENT</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"

export default {
  name: 'Home',
  data () {
    return {
      cards: [1, 2, 3, 4]
    }
  },
  
  components: {
    Navbar
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
    font-family: Advent Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 38px;
    line-height: 57px;
    margin: 0px;
  }

  .card p {
    font-family: Advent Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 33px;
    align-items: center;
    margin: 0px;
  }

  a {
    text-decoration: none;
    color: black;
  }
</style>
