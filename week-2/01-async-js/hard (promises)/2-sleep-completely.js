/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const start = Date.now();
  let elapsed = 0;

  while (elapsed < seconds) {
    elapsed = (Date.now() - start) / 1000;
  }
  console.log(`Waited for ${elapsed} seconds.`);
}

console.log("Start");
sleep(10);
console.log("End");
