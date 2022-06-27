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
