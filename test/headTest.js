const assertEqual = require('../assertEqual');
const head = require('../head');

console.log(head([3, 2, 6]));
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");