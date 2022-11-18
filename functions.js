//Задача 1. Создай функции с именами: 

function removeUser() {

}
removeUser();

function createPost () {

}

function addItem () {

}
createPost ();

function readFile () {

}
readFile ();

function getElements () {

}
getElements ();

function createParentElement () {

}
createParentElement ();

function startGame () {

}
startGame ();
// Сразу после создания каждую из функций нужно вызвать. 


/*  
Задача 2. Создай десять функций с любыми названиями (более или менее логичными). Каждая из созданных функций должна принимать по одному параметру. Выводить что-то или возвращать из функции не нужно. 
*/

function sendMessage () {

}
sendMessage ();


function appCode () {

}

function codeForInt () {

}

function seacrh () {

}

function settings () {

}

function profile () {

}

function menu () {

}

function aboutApp () {

}

function developers () {

}

function contacts () {

}

function qAndA () {

}

/* Задача 3. Создай еще 10 функций с любыми названиями. Каждая из функций должна получать параметр и просто возвращать его. Давай этим функциям и их параметрам правдоподобные названия. */

function car (m5) {
    return m5;
}

function hP (hp629) {
    return hP;
}

function phone (iPhone) {
    return phone;
}

function memory (gb256) {
   return memory;
}

function model (Pro13) {
    return model;
}

function vidCard (RTX4090) {
    return vidCard;
}

function cenProc (intel) {
    return cenProc;
}

function RAM (samsung) {
    return RAM;
}

function ssd (kingston) {
    return ssd;
}

function hdd (toshiba1tb) {
    return hdd;
}

/* Задача 4. Создай пять разных функций, каждая из которых принимает один параметр. Затем функция должна вернуть значение этого параметра, умноженное на два. Выведи результат работы функции в консоль. */

function num1 (a, b) {
    return a * b
}
    console.log(num1(1, 2));

function num2 (c, d) {
    return c * d
}
    console.log(num2(3, 4));

function num3 (e, f) {
    return e * f
}   
    console.log(num3(5, 6));

function num4 (g, h) {
    return g * h
}
    console.log(num4(7, 8));

function num5 (i, j) {
    return i * j
}
    console.log(num5(9, 10));

/* Задача 5. Создай функцию, которая принимает в качестве параметра массив и возвращает первый элемент этого массива. Вызови функцию в консоль. */

const arr = [1,2,3,4]
function array (arr) {
    return arr[0];
}
console.log(array(arr));

/* Задача 6. Создай функцию, которая принимает в качестве параметра массив и возвращает последний элемент этого массива. Вызови функцию в консоль */ 

const lastArr = [1,2,3,4]
function lasArray (lastArr) {
    return lastArr[3];
}
console.log(lasArray(lastArr));

// Задача 7. Добавь комментарии к каждой строке следующего кода: 

function printMyFullName(firstname, secondname) { //создание функции с параметром firstname, secondname.
    const fullname = firstname + secondname; //переменная со сложением параметров.
     
    return fullname; //возвращение переменной.
  } 
   
  console.log(printMyFullName('spider', 'man')); //вывод в консоль.
   
   
  function getSumOfFirstAndLastElement(arr) { //функция с параметром arr.
    if(arr.length < 2) { // условие.
      return 'минимум два элемента нужно жи есть'; //выведение строки если условие будет равно.
    } else { 
      const lastIndex = arr.length - 1; 
       
      return arr[0] + arr[lastIndex]; 
    } 
  } 
   
  console.log(getSumOfFirstAndLastElement([])); //выведение в консоль функции.
   
  console.log(getSumOfFirstAndLastElement([3, 7, 12, 8])); //выведение в консоль функции.
  
/* Напиши к следующему коду комментарий, объясняющий почему функция возвращает "html" вместо "css". */

let text = "css"; 
 
function testVariableScope() { 
  let text = "html"; 
   
  return text; 
} 
 
console.log(testVariableScope()); //'html' вывелся в консоль вместо 'css' потому что переменная 'text' была измененна в функции.