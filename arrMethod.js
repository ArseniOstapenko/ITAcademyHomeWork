// 1.Клонирование массива
var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];
function arrayClone(arr) {
  return arr.slice(0);
}

var arr1 = arrayClone(vegetables);
console.log(arr1);

//2.Преобразование массива в строку
var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

var str1 = vegetables.toString();
var str2 = vegetables.join();
console.log(str1);
console.log(str2);

//3.Двоеточие между нечётными числами
const num = prompt("Введите число", 55);

function colonOdd(num) {
  let str = num.toString();
  let result = [str[0]];
  for (var i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 !== 0 && str[i] % 2 !== 0) {
      result.push(":", str[i]);
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}
console.log(colonOdd(num));

//4.Замена регистра символов
const str = prompt("Введите слово", "КаЖдЫй ОхОтНиК");

function changeRegister(str) {
  let UPPER = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
  let LOWER = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  let result = [];

  for (var i = 0; i < str.length; i++) {
    if (UPPER.includes(str[i])) {
      result.push(str[i].toLowerCase());
    } else if (LOWER.includes(str[i])) {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i]);
    }
  }
  return result.join("");
}

//5.Удалить повторяющиеся элементы массива
var arr = [
  "php",
  "php",
  "css",
  "css",
  "script",
  "script",
  "html",
  "html",
  "java",
];
function removeDuplicates(arr) {
  var obj = {},
    out = [];
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }
  for (i in obj) {
    out.push(i);
  }
  return out;
}
result = removeDuplicates(arr);
console.log(arr + "<br>");
console.log(result);

//6.Сумма элементов двух массивов

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [4, 5, 6];
var arr3 = [];
if (arr1.length > arr2.length) {
  var count = arr1.length;
} else {
  var count = arr2.length;
}
for (var i = 0; i < count; i++) {
  if (arr2[i] === undefined) {
    arr2.push(0);
  } else {
    if (arr1[i] === undefined) {
      arr1.push(0);
    }
  }
  arr3.push(arr1[i] + arr2[i]);
}
console.log(arr3);

//7.Количество повторяющихся элементов в массиве

function countIdentic(arr) {
  var clone = arr.slice(0),
    test = [],
    cur,
    count = 0;

  while (clone.length) {
    cur = clone.shift();
    if (test.indexOf(cur) === -1) {
      test.push(cur);
      if (clone.indexOf(cur) >= 0) {
        count++;
      }
    }
  }
  return console.log(count + "<br>");
}

countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8]);
countIdentic([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9]);

//8.Сортировка массива объектов

var litmir = [
  { author: "Хэленка", title: "Улетела сказка" },
  { author: "Коул Кресли", title: "Восстание Аркан" },
  { author: "Райчел Мид", title: "Золотая лилия" },
];

function compare(a, b) {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
}

litmir.sort(compare);

for (var i = 0; i < litmir.length; i++) {
  console.log(litmir[i].title);
}

//9.Найти все значения данного свойства в массиве объектов

var litmir = [
  { author: "Хэленка", title: "Улетела сказка" },
  { author: "Коул Кресли", title: "Восстание Аркан" },
  { author: "Райчел Мид", title: "Золотая лилия" },
];

function propertyValue(array, key) {
  const arr = [];
  let index = -1;
  let item;

  while (++index < array.length) {
    item = array[index];

    if (item.hasOwnProperty(key)) {
      arr[arr.length] = item[key];
    }
  }

  return arr;
}

console.log(propertyValue(litmir, "title"));
console.log(propertyValue(litmir, "author"));
