import DeadImage from '../assets/dead.png';

export default class Fish {
  constructor(name, image, animation) {
    this.name = name || 'Unnamed Fish';
    this.image = image;
    this.animation = animation;
    this.isDead = false;
    this.deadImage = DeadImage;
    this.timer = 0;
    this.timerWidth = 0;
    this.timerInterval = null;
    this.feedMeVisible = false;
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timer < 15) {
        this.timer++;
        this.timerWidth = (this.timer / 15) * 100;

        if (this.timer === 7) {
          this.feedMeVisible = true;
        }
      }

      if (this.timer >= 15) { 
        clearInterval(this.timerInterval);
        this.die();
      }
    }, 1000);
  }

  feed() {
    this.feedMeVisible = false;
    this.timer = 0; 
    this.timerWidth = 0; 
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