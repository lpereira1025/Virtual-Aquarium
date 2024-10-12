<template>
  <div class="container">
    <div class="sectionFishSelect">
      <TypeOfFish v-on:addFishToAquarium="addFishToAquarium" />
    </div>

    <div class="sectionAquarium">
      <AquariumSec v-on:removeFish="removeFish" :aquarium="aquarium" />
    </div>
  </div>
</template>

<script>
import TypeOfFish from "./components/TypeOfFish.vue";
import AquariumSec from "./components/AquariumSec.vue";

export default {
  name: "App",
  data: () => {
    return {
      aquarium: []
    };
  },
  methods: {
    addFishToAquarium(fish) {
      this.aquarium.push(fish);
    },
    removeFish(fish) {
      this.aquarium.splice(this.aquarium.indexOf(fish), 1);
    }
  },
  components: { TypeOfFish, AquariumSec }
};
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #203D7F;
    color: aliceblue;
    overflow: hidden;
  }
  .sectionFishSelect{
    height: 100vh;
  }
  .sectionAquarium {
    background-image: url('./assets/bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 110vh;
  }

  .container {
    display: grid;
    grid-template-columns: 20% 80%;
  }

  @media (max-width: 1800px) {
  .container {
      grid-template-columns: 40% 60%;
    }
  }

  @media (max-width: 1024px) {
  .container {
      grid-template-columns: 40% 70%;
    }
  }
  @media (max-width: 768px) {
    body{
      overflow: auto;
    }
    .container {
      grid-template-columns: 1fr;
    }

  }
</style>
