const { html } = require("./base");
// const regExp3 = /<.+>.+<\/.+>/g; // greedy
const regExp3 = /<.+?>.+?<\/.+?>/g; // non-greedy

console.log(html);
console.log(html.match(regExp3));
