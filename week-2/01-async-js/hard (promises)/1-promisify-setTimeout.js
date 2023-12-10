/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  let startTime = Date.now();
  return new Promise((res, rej) => {
    setTimeout(() => {
      let endTime = (Date.now() - startTime) / 1000;
      res("Resolved in " + endTime + " ms.");
    }, n);
  });
}

console.log("Start");
wait(5000).then((res) => console.log(res));
console.log("End");
