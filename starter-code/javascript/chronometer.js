class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 1;
  }

  startClick() {
    let a = this;
    this.intervalId = setInterval(function () {
      return a.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    if (this.currentTime >= 60) {
      return this.currentTime = Math.floor(this.currentTime / 60);
    }
    return 0;
  }

  getSeconds() {
    if (this.currentTime > 60) {
      return this.currentTime = this.currentTime % 60;
    }
    return this.currentTime;
  }

  twoDigitsNumber(value) {
    if (value < 10) {
      return `0` + `${value}`;
    }
    return `${value}`;
  }

  resetClick() {
    this.currentTime = 0;
  }

  stopClick() {
    clearInterval()
  }
  
  splitClick() {}
};


