//1
const fruits = ["apple", "banana", "orange", "grape", "mango"];

let string = "";
for (let i = 0; i < fruits.length; i++) {
  string += fruits[i] + (i < fruits.length - 1 ? "," : "");
}

console.log(string);
//

let string2 = fruits.join(",");

console.log(string2);

//2
let cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
//3
let cardToRemove = 3;
cards.splice(cardToRemove, 1);
console.log(cards);
//4
let index = 5;
let cardToInsert = "Карточка-6";
cards.splice(index, 0, cardToInsert);
console.log(cards);
//5
let index2 = 3;
let cardToUpdate = "Карточка-4";
cards.splice(index2, 0, cardToUpdate);
console.log(cards);
