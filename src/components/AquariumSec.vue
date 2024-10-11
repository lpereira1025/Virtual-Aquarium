<template>
  <div>
    <div class="aquarium">
      <div 
        class="boxFish" 
        v-for="(fish, index) in aquarium" :key="index" :class="fish.animation">
        <button class="removeFish" v-on:click="removeFish(fish)">X</button>
        <img class="fishInsideAquarium" :src="fish.image" />
        <h3 class="nameOfFishInsideAquarium">{{fish.name}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["aquarium"],
  methods: {
    removeFish(fish) {
      this.$emit("removeFish", fish);
    }
  }
};
</script>

<style>
  .aquarium {
    position: relative;
    padding: 1rem;
    width: 90%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .boxFish {
    width: 8rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 1rem;
    padding: 1rem;
    position: absolute;
    animation: slide-slow 60s linear infinite, slide-slow-img 60s linear infinite;
  }
  .boxFish.swimDiagonalUp {
  animation: swimDiagonalUp 60s linear infinite;
  }
  .boxFish.swimDiagonalDown {
    animation: swimDiagonalDown 60s linear infinite;
  }
  .removeFish {
    background-color: red;
    color: aliceblue;
    border: none;
    padding: 0.3rem;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 20s ease-in-out, filter 20s ease-in-out;
  }
  .removeFish:hover {
    transform: scale(1.5);
  }
  .fishInsideAquarium:hover {
    transform: scale(1.1);
    filter: brightness(1.2) drop-shadow(0 0 1rem #236ecf);
  }
  .nameOfFishInsideAquarium {
    width: 100%;
    border-radius: 0.5rem;
    text-align: center;
    padding: 0.3rem;
    background-color: #090a0a75;
  }
  @keyframes slide-slow {
    0% {
    left: calc(100% - 88px);
  }
  49.99% {
    left: 0%;
  }
  50% {
    left: 0%;
  }
  99.99% {
    left: calc(100% - 88px);
  }
  100% {
    left: calc(100% - 88px);
  }
  }
  @keyframes slide-slow-img {
    0% {
    transform: scaleX(-1);
    }
    48% {
      transform: scaleX(-1);
    }
    50% {
      transform: scaleX(1);
    }
    98% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(-1);
    }
  }
  @keyframes swimDiagonalUp {
    0% {
      left: 50%;
      top: 100%;
      left: calc(100% - 88px);
    }
    25% {
      left: calc(100% - 88px);
      top: 50%;
      transform: translate(-50%, -50%);
    }
    50% {
      left: 50%;
      top: 100%;
      transform: translate(-50%, 0);
    }
    75% {
      left: 0%;
      top: 50%;
      transform: translate(0, -50%);
    }
    100% {
      left: 50%;
      top: 100%;
      transform: translate(-50%, 0);
    }
  }
  @keyframes swimDiagonalDown {
    0% {
      left: 50%;
      top: 0%;
      transform: translate(-50%, 0);
    }
    25% {
      left: calc(100% - 88px);
      top: 50%;
      transform: translate(-50%, 50%);
    }
    50% {
      left: 50%;
      top: 0%;
      transform: translate(-50%, 0);
    }
    75% {
      left: 0%;
      top: 50%;
      transform: translate(0, 50%);
    }
    100% {
      left: 50%;
      top: 0%;
      transform: translate(-50%, 0);
    }
  }
</style>
