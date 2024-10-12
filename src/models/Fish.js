import DeadImage from '../assets/dead.png';

export default class Fish {
  constructor(name, image, animation) {
    this.name = name || 'Unnamed Fish';
    this.image = image;
    this.animation = animation;
    this.isAlive = true;
    this.isDead = false;
    this.deadImage = DeadImage;
    this.timer = 15;
    this.timerWidth = 100;
    this.timerInterval = null;
    this.feedMeVisible = true;
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      this.timer--;
      this.timerWidth = (this.timer / 15) * 100;
      console.log(`Timer: ${this.timer}, Timer Width: ${this.timerWidth}`);

      if (this.timer === 7) {
        this.feedMeVisible = true;
      }

      if (this.timer <= 0) {
        clearInterval(this.timerInterval);
        this.die();
      }
    }, 1000);
  }

  feed() {
    this.feedMeVisible = false;
    this.timer = 15; 
    this.timerWidth = 100; 
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.startTimer();
  }

  die() {
    this.isDead = true;
    this.image = this.deadImage;
    clearInterval(this.timerInterval);
    this.feedMeVisible = false;
    this.animation = 'swimToBottom';
  }
}
