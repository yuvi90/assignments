class Counter {
  constructor() {
    this.count = 0;
    this.counterRef = null;
  }
  start() {
    console.log(++this.count);
    this.counterRef = setInterval(() => console.log(++this.count), 1000);
  }

  pause() {
    if (this.counterRef) {
      clearInterval(this.counterRef);
      this.counterRef = null;
    }
  }

  stop() {
    if (this.counterRef) {
      clearInterval(this.counterRef);
      this.counterRef = null;
      this.reset();
    }
  }

  reset() {
    this.count = 0;
  }
}

const counter = new Counter();
counter.start();

setTimeout(() => {
  // Timer stops and reset after 5 seconds
  counter.stop();
  setTimeout(() => {
    // Timer again starts after 2 seconds for 4 seconds
    counter.start();
    // Timer pauses after 4 seconds
    setTimeout(() => {
      counter.pause();
      // Timer remain paused for 2 seconds
      setTimeout(() => {
        // Timer again starts for 5 seconds
        counter.start();
        setTimeout(() => {
          // Timer paused and reset after 5 seconds
          counter.pause();
          counter.reset();
          console.log("Ends Here : ", counter.count);
        }, 5000);
      }, 2000);
    }, 4000);
  }, 2000);
}, 5000);
