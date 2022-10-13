// 1. Кланирование массива
// let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
// function arrayClone(arr) {
//   return arr.slice(0);
// }

// var arr1 = arrayClone(vegetables);
// console.log(arr1);

// 2. Преобразование массива в строку
// let vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

// let str1 = vegetables.toString();
// let str2 = vegetables.join();

// console.log(str1); // "Капуста, Репа, Редиска, Морковка"
// console.log(str2); // "Капуста, Репа, Редиска, Морковка

// 3. Двоеточие между нечётными числами
// const num = prompt("Введите число", 55);

// const colonOdd = (number) => {
//   return number
//     .split("")
//     .map((item, index, array) => {
//       const condition = [item, array[index + 1]].every(
//         (item) => item % 2 !== 0
//       );
//       if (condition && !(index === array.length - 1)) {
//         return `${item}:`;
//       }
//       return item;
//     })
//     .join("");
// };

// const result = colonOdd(num);
// console.log(result);

//4. Замена регистра символов

// const str = prompt("Введите слово", "КаЖдЫй ОхОтНиК");
// const changeRegister = (string) => {
//   return string
//     .split("")
//     .map((item) => {
//       if (item === item.toUpperCase()) {
//         return item.toLowerCase();
//       }
//       return item.toUpperCase();
//     })
//     .join("")
//     .split();
// };

// const result = changeRegister(str);
// console.log(result);

//5.Удалить повторяющиеся элементы массива

// let arr = [
//   "php",
//   "php",
//   "css",
//   "css",
//   "script",
//   "script",
//   "html",
//   "html",
//   "java",
// ];
// const removeDuplicates = (array) => {
//   let res = array.filter((item, index) => array.indexOf(item) === index);
//   return res;
// };

// const result = removeDuplicates(arr);
// console.log(result);

//6. Сумма элементов двух массивов

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6];
// let arr3 = [];

// const sum = (array1, array2) => {
//   let res = array1.map((item, index) => (item += array2[index] || 0));
//   return res;
// };

//7. Количество повторяющихся элементов в массиве

// const countIdentic = (array) => {
//   return array.reduce((acc, item, index) => {
//     acc += item === array[index + 1] ? 1 : 0;
//     return acc;
//   }, 0);
// };

// countIdentic_1([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]);
// countIdentic_2([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9]);

// //8.Сортировка массива по убыванию

// let numbers = [3, 8, 7, 6, 5, -4, 3, 2, 1];

// let compareNumbers = (arr) => {
//   return arr.sort((item, index) => {
//     return item - index;
//   });
// };
// console.log(compareNumbers(numbers));

//9.Сортировка массива объектов

// let litmir = [
//   { author: "Хэленка", title: "Улетела сказка" },
//   { author: "Коул Кресли", title: "Восстание Аркан" },
//   { author: "Райчел Мид", title: "Золотая лилия" },
// ];

// let compare = (a, b) => {
//   if (a.title < b.title) {
//     return -1;
//   } else if (a.title > b.title) {
//     return 1;
//   } else {
//     return 0;
//   }
// };
// litmir.sort(compare);

// for (let i = 0; i < litmir.length; i++) {
//   console.log(litmir[i].title);
// }

// Восстание Аркан Золотая лилия Улетела сказка

//10.Найти все значения данного свойства в массиве объектов

// let litmir = [
//   { author: "Хэленка", title: "Улетела сказка" },
//   { author: "Коул Кресли", title: "Восстание Аркан" },
//   { author: "Райчел Мид", title: "Золотая лилия" },
// ];

// let propertyValue = (array, key) => {
//   return array.map((a) => a[key]);
// };

// console.log(propertyValue(litmir, "title"));
// console.log(propertyValue(litmir, "author"));
