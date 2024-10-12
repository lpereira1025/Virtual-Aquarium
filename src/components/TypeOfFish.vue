<template>
  <section>
    <h1>Fish Type</h1>
    <div class="selectFish">
      <div
        v-for="(fish, index) in fishCollection"
        :key="index"
        :class="{ selected: selectedFish === fish }"
        @click="selectFish(fish)"
      >
        <img :src="fish.image" />
      </div>
    </div>
  </section>

  <section>
    <h1>Name</h1>
    <div class="inputAndButton">
      <input
        type="text"
        placeholder="Give a name to the fish"
        class="nameOfFish"
        v-model="fishName"
      >
      <button 
        class="buttonAddFish"
        @click="addFishToAquarium"
        :disabled="!selectedFish"
      > 
        Add Fish
      </button>
    </div>
  </section>
</template>

<script>
import Fish from '../models/Fish.js';
import GoldenPurple from '../assets/golden-purple-fish.png';
import GoldFish from '../assets/goldfish.png';
import Guppie from '../assets/Guppie.png';
import Tropical from '../assets/tropical-fish.png';
import Tuna from '../assets/tuna.png';

export default {
  emits: ['addFishToAquarium'],
  data() {
    return {
      fishCollection: [
        { name: 'Golden Purple', image: GoldenPurple, animation: 'swimDiagonalUp' },
        { name: 'Gold Fish', image: GoldFish, animation: 'swimDiagonalDown' },
        { name: 'Guppie', image: Guppie, animation: 'swimDiagonalDownReverse' },
        { name: 'Tropical', image: Tropical, animation: 'swimDiagonalUpReverse' },
        { name: 'Tuna', image: Tuna, animation: 'swimDiagonalMixed' },
      ],
      selectedFish: null,
      fishName: '',
    };
  },
  methods: {
    selectFish(fish) {
      this.selectedFish = fish;
    },
    addFishToAquarium() {
      if (this.selectedFish) {
        
        const fishToAdd = new Fish(this.fishName || 'Unnamed Fish', this.selectedFish.image, this.selectedFish.animation);
        const randomClass = this.getRandomFishClass();
        fishToAdd.class = randomClass;
        this.$emit('addFishToAquarium', fishToAdd);
        this.selectedFish = null;
        this.fishName = '';
        this.$nextTick(() => {
          fishToAdd.startTimer(); 
        });
      }
    },
    getRandomFishClass() {
      const classes = ['dead', 'left', 'right', 'farLeft', 'farRight'];
      const randomIndex = Math.floor(Math.random() * classes.length);
      return classes[randomIndex];
    },
  },
};
</script>



<style>
  section {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .selectFish {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .inputAndButton {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .nameOfFish {
    height: 4rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.7rem;
  }
  .buttonAddFish {
    height: 4rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 0.7rem;
    cursor: pointer;
    color: aliceblue;
    background-color: #CF2F23;
  }
  img {
    width: 8rem;
    border-radius: 0.5rem;
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.1);
    filter: brightness(1.2) drop-shadow(0 0 1rem #CF2F23);
  }
  .selected img {
    filter: brightness(1.2) drop-shadow(0 0 1rem #6DC8CB);
}
</style>
