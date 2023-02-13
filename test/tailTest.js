const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail([5,6,7]), [6, 7]);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
