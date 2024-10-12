<template>
  <div>
    <div class="aquarium">
      <div 
        class="boxFish" 
        v-for="(fish, index) in aquarium" :key="index" 
        :class="[fish.animation, fish.class, { dead: fish.isDead }]" 
        @click="resetTimer(fish)"
      >
        <button v-if="fish.timer <= 0" class="removeFish" @click="removeFish(fish)">X</button>
        <button 
          v-if="fish.feedMeVisible" 
          class="feedMe"
          @click="resetTimer(fish)"
        >
          Feed me!
        </button>
        <img class="fishInsideAquarium" :src="fish.image" />
        <h3 class="nameOfFishInsideAquarium">{{ fish.name }}</h3>
        <div class="timer-bar">
          <div class="timer" :style="{ width: `${fish.timerWidth}%` }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["aquarium"],
  mounted() {
    this.aquarium.forEach(fish => fish.startTimer());
  },
  methods: {
    resetTimer(fish) {
      fish.resetTimer();
    },
    removeFish(fish) {
      this.$emit("removeFish", fish);
    },
  },
  beforeUnmount() {
    this.aquarium.forEach(fish => clearInterval(fish.timerInterval));
  },
};
</script>

<style>
  .aquarium {
    position: relative;
    padding: 1rem;
    width: 86%;
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
    padding: 1rem;
    position: absolute;
    animation-duration: 55s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  .boxFish.swimDiagonalUp {
    animation-name: swimDiagonalUp;
  }
  .boxFish.swimDiagonalDown {
    animation-name: swimDiagonalDown;
  }
  .boxFish.swimDiagonalDownReverse {
    animation-name: swimDiagonalDownReverse;
  }
  .boxFish.swimDiagonalUpReverse {
    animation-name: swimDiagonalUpReverse;
  }
  .boxFish.swimDiagonalMixed {
    animation-name: swimDiagonalMixed;
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
  .timer-bar {
    width: 100%;
    height: 0.4rem;
    background-color: #ddd;
    position: relative;
  }
  .timer {
    height: 100%;
    background-color: #76c7c0;
  }
  .feedMe{
    padding: 0.7rem;
    border-radius: 1rem;
    color: black;
    background-color: #ddd;
    cursor: pointer;

  }
  .boxFish.dead {
    animation: swimToBottom 3s forwards;
    position: absolute;
    bottom: 0;
  }
  .boxFish.dead.left {
    animation: swimToBottomLeft 3s forwards;
  }
  .boxFish.dead.right {
    animation: swimToBottomRight 3s forwards;
  }
  .boxFish.dead.farleft {
    animation: swimToBottomFarLeft 3s forwards;
  }
  .boxFish.dead.farRight {
    animation: swimToBottomFarRight 3s forwards;
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
  @keyframes swimDiagonalDownReverse {
    0% {
      left: 50%;
      top: 0%;
      transform: translate(-50%, 0);
    }
    25% {
      left: 0%;
      top: 50%;
      transform: translate(0, -50%);
    }
    50% {
      left: 50%;
      top: 100%;
      transform: translate(-50%, 0);
    }
    75% {
      left: calc(100% - 88px);
      top: 50%;
      transform: translate(-50%, 50%);
    }
    100% {
      left: 50%;
      top: 0%;
      transform: translate(-50%, 0);
    }
  }
  @keyframes swimDiagonalUpReverse {
    0% {
      left: 50%;
      top: 0%;
      left: 0%;
    }
    25% {
      left: 0%;
      top: 50%;
      transform: translate(0, 50%);
    }
    50% {
      left: 50%;
      top: 0%;
      transform: translate(-50%, 0);
    }
    75% {
      left: calc(100% - 88px);
      top: 50%;
      transform: translate(-50%, 50%);
    }
    100% {
      left: 50%;
      top: 0%;
      transform: translate(-50%, 0);
    }
  }
  @keyframes swimDiagonalMixed {
    0% {
      left: 50%;
      top: 100%;
      transform: translate(-50%, 0);
    }
    25% {
      left: calc(100% - 88px);
      top: 50%;
      transform: translate(-50%, -50%);
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
      top: 100%;
      transform: translate(-50%, 0);
    }
  }
  @keyframes swimToBottom {
    0% { transform: translateY(0); }
    100% { transform: translateY(100%); }
  }
  @keyframes swimToBottomLeft {
    0% { transform: translateY(0) translateX(0); }
    100% { transform: translateY(100%) translateX(-120%); }
  }
  @keyframes swimToBottomRight {
    0% { transform: translateY(0) translateX(0); }
    100% { transform: translateY(100%) translateX(90%); }
  }
  @keyframes swimToBottomFarLeft {
    0% { transform: translateY(0) translateX(0); }
    100% { transform: translateY(100%) translateX(-105%); }
  }
  @keyframes swimToBottomFarRight {
    0% { transform: translateY(0) translateX(0); }
    100% { transform: translateY(100%) translateX(175%); }
  }
</style>
