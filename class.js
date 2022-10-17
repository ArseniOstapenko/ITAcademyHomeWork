// class Worker {
//   constructor(name, surname, rate, days) {
//     this.name = name;
//     this.surname = surname;
//     this.rate = rate;
//     this.days = days;
//   }
//   salary() {
//     let result = this.rate * this.days;
//     return result;
//   }
// }

// let worker_1 = new Worker("Арсений", "Остапенко", 999.9, 31);

// console.log(worker_1.name);
// console.log(worker_1.surname);
// console.log(worker_1.rate);
// console.log(worker_1.days);
// console.log(worker_1.salary());

class MyString {
  constructor() {}
  reverse(str) {
    let reversStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversStr += str[i];
    }
    return reversStr;
  }
  ucFirst(str) {
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
  }
  ucWords(str) {
    let arr = str.split(" ");
    let strArr = [];
    for (let i = 0; i < arr.length; i++) {
      let a = arr[i];
      let newStr = a[0].toUpperCase() + a.slice(1);
      strArr.push(newStr);
    }
    return strArr.join(" ");
  }
}

let string_1 = new MyString();
console.log(string_1.reverse("abcde"));
console.log(string_1.ucFirst("abcde"));
console.log(string_1.ucWords("abcde abcde abcde'"));
