function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
/*
function wait(msg, time) {
  setTimeout(() => {
    console.log(msg);
  }, time);
}

wait("Frase 1", rand(1, 3));
wait("Frase 2", rand(1, 3));
wait("Frase 3", rand(1, 3));
*/

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, time);
  });
}

wait("Frase 1", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return wait("Frase 2", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return wait(22222, rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Frase 4");
  })
  .catch((e) => {
    console.log("ERRO", e);
  });
