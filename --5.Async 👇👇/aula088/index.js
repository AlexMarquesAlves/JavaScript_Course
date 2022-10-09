function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");

    setTimeout(() => {
      resolve(msg.toUpperCase() + `- Passei na promise`);
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
const promises = [
  `primeiro Valor`,
  wait(`Promise 1`, 3000),
  wait(`Promise 2`, 500),
  wait(`Promise 3`, 1000),
  `Outro Valor,`,
];

Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });
