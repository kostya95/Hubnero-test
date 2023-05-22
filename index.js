// задание №1
const mixedList = [1, "wq", "q3r", 89, 3];
const numberList = (arr) => arr.filter((el) => typeof el === "number");
const filterdNumberList = numberList(mixedList);
console.log(filterdNumberList);

// задание №2
function accum(str) {
  const strArr = [];
  for (let i = 0; i < str.length; i++) {
    strArr.push(str[i].toUpperCase().padEnd(i + 1, str[i].toLowerCase()));
  }
  return strArr.join("-");
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

// задание №3
const totalPrice = (arr) =>
  arr.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);

const products = [
  { name: "Футболка", price: 20, quantity: 2 },
  { name: "Джинсы", price: 50, quantity: 1 },
  { name: "Носки", price: 5, quantity: 10 },
  { name: "Штаны", price: 30, quantity: 1 },
];
console.log(totalPrice(products));
