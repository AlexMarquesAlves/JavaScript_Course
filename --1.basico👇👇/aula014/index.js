let umaString = "O rato roeu a roupa do rei de roma";

console.log(umaString.concat(" em um lindo dia."));
console.log(umaString + " em um lindo dia.");
console.log(`${umaString} em um lindo dia.`);

console.log(umaString.indexOf("texto"));
console.log(umaString.indexOf("o", 3));

console.log(umaString.lastIndexOf("o"));
console.log(umaString.lastIndexOf("m", 3));

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace(/r/g, "p"));

console.log(umaString.length);
console.log(umaString.slice(2, 5));
console.log(umaString.slice(-5));
console.log(umaString.split(" ", 3));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
