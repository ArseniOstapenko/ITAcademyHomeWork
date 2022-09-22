let surName = prompt("Ваша Фамилия?");
let firsName = prompt("Ваше Имя?");
let patronymic = prompt("Ваше Отчество?");
let age = prompt("Возраст в годах?");
const gender = confirm("Ваш пол мужской?");

let fullDay = function () {
  let day = age * 365;
  return day;
};

let futureAge = () => Number(age) + 5;

const sex = gender ? "Мужской" : "Женский";
let pension = age >= 60 ? "Да" : "Нет";

if (surName === null || surName === "") {
  alert("Поле Фамилии не должно быть пустым!");
}

if (firsName === null || firsName === "") {
  alert("Поле Имени не должно быть пустым!");
}

if (patronymic === null || patronymic === "") {
  alert("Поле Отчества не должно быть пустым!");
}

let result = alert(
  `Ваше ФИО: ${surName} ${firsName} ${patronymic}
  Ваш возраст в годах: ${age}
  Ваш возраст в днях: ${fullDay()}
  Через 5 лет вам будет: ${futureAge()}
  Ваш пол: ${sex}
  Вы на пенсии: ${pension}`
);
