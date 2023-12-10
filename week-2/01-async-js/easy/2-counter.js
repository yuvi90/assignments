function counter(limit) {
  let count = 1;
  let timerId = null;
  return {
    start() {
      if (count > limit) return;
      console.log(count);
      timerId = setTimeout(() => {
        ++count;
        this.start();
      }, 1000);
    },

    stop() {
      if (timerId) {
        clearTimeout(timerId);
        count = 1;
        timerId = null;
      }
    },
  };
}

const myCounter = counter(10);
myCounter.start();

setTimeout(() => {
  myCounter.stop();
  setTimeout(() => {
    myCounter.start();
  }, 3000);
}, 5000);
