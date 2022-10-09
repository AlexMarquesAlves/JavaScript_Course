function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);
    return;

    setTimeout(() => {
      resolve(msg.toUpperCase() + `- Passei na promise`);
      return;
    }, time);
  });
}

/**
 * Promise.all
 * Promise.race
 * Promise.resolve
 * Promise.reject
 */

// Promise.all
const promisesAll = [
  `primeiro Valor`,
  wait(`Promise 1`, 3000),
  wait(`Promise 2`, 500),
  wait(`Promise 3`, 1000),
  wait(`Promise 4`, 1000),
  `Outro Valor,`,
];

Promise.all(promisesAll)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });

// Promise.race
const promisesRace = [
  wait(`Promise 1`, rand(1, 5)),
  wait(`Promise 2`, rand(1, 5)),
  wait(`Promise 3`, rand(1, 5)),
  // wait(1000, 1000),
];

Promise.race(promisesRace)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });
