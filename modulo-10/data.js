// hasId

const hasId = (object) => {
  console.log("hasId", object.hasOwnProperty("id"));
};

hasId({ name: "asad" });

// head

const head = (arr) => {
  const [first] = arr;
  console.log("head", first);
};

head([1, 2, 3, 4]);

// tail

const tail = (arr) => {
  const newArr = [...arr];
  const [first, ...rest] = newArr;
  console.log("tail", rest);
};

tail([1, 2, 3, 4]);

// swapFirstToLast

const swapFirstToLast = (arr) => {
  const newArr = [...arr];
  newArr.push(newArr.shift());
  console.log("swapFirstToLast", newArr);
};

swapFirstToLast([1, 2, 3, 4]);

// excludeId

const excludeId = (obj) => {
  const newObj = { ...obj };
  const { id, ...rest } = newObj;
  console.log("excludeId", rest);
};

excludeId({ id: 1, name: 2 });

// wordsStartingWithA

const wordsStartingWithA = (arr) => {
  console.log(
    "wordsStartingWithA",
    arr.filter((item) => item.startsWith("a"))
  );
};

wordsStartingWithA(["banana", "apple", "pineaple", "avocado"]);

// concat

const concat = (str1, str2, str3) => {
  const concatsStr = [str1, str2, str3].join(" | ");
  console.log("concat", concatsStr);
};

concat("banana", "apple", "pineaple");

// multArray

const multArray = (arr, number) => {
  const multiply = arr.map((item) => item * number);
  console.log("multArray", multiply);
};

multArray([1, 2, 3, 4], 2);

// calcMult

const calcMult = (num1, num2, num3, num4) => {
  const numbersArr = [num1, num2, num3, num4];
  const multiply = numbersArr.reduce((a, b) => a * b);

  console.log("calcMult", multiply);
};

calcMult(1, 2, 3, 4);

// EXTRA

// swapFirstSecond

const swapFirstSecond = (arr) => {
  const newArr = [...arr];
  const [first, second, ...rest] = newArr;
  const newOrder = [second, first, ...rest];
  console.log("swapFirstSecond", newOrder);
};

swapFirstSecond([1, 2, 3, 4]);

// longest

const longest = (str1, str2, str3, chart) => {
  const arr = [str1, str2, str3];

  console.log(
    "longest",
    arr.every((item) => item.startsWith(chart))
  );
};

longest("banana", "apple", "pineaple", "a");

// searchInStringV1

const searchInStringV1 = (str, chart) => {
  const arr = Array.from(str);

  const count = arr.filter((letter) => letter === chart).length;

  console.log("searchInStringV1", count);
};

searchInStringV1("banana", "a");

// searchInStringV2

const searchInStringV2 = (str, chart) => {
  const regex = new RegExp(chart, "g");
  const count = str.match(regex).length;

  console.log("searchInStringV2", count);
};

searchInStringV2("banana", "n");

// sortCharacters

const sortCharacters = (str) => {
  const arr = Array.from(str);

  console.log("sortCharacters", arr.sort());
};

sortCharacters("banana");

// shout

const shout = (str1, str2, str3) => {
  const concatsStr = [str1, str2, str3]
    .map((item) => item.toUpperCase())
    .join("! ");
  console.log("concat", concatsStr);
};

shout("banana", "apple", "pineaple");

// shoppingCart

const shoppingCart = [
  { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
  {
    category: "Carne y Pescado",
    product: "Pechuga pollo",
    price: 3.75,
    units: 2,
  },
  { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
  { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
  { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
  { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
  {
    category: "Carne y Pescado",
    product: "Secreto ibérico",
    price: 5.75,
    units: 2,
  },
];

// a

const cartIVA = () => {
  const newCart = shoppingCart.map((item) => ({
    ...item,
    iva: item.price * 0.21,
  }));

  console.log("shoppingCart a", newCart);
};

cartIVA();

// b

const cartSort = () => {
  const newCart = [...shoppingCart];
  const sort = newCart.sort((a, b) => b.units - a.units);

  console.log("shoppingCart b", sort);
};

cartSort();

// c

const cartSubtotal = () => {
  const newCart = [...shoppingCart];
  const items = newCart
    .map((item) => item.price * item.units)
    .reduce((total, unit) => unit + total);

  console.log("shoppingCart c", items);
};

cartSubtotal();

// d

const cartTotal = () => {
  const newCart = shoppingCart
    .map((item) => ({
      product: item.product,
      total: item.price * item.units,
      category: item.category,
    }))
    .sort((a, b) =>
      a.category > b.category ? 1 : b.category > a.category ? -1 : 0
    );

  console.log("shoppingCart d", newCart);
};

cartTotal();
