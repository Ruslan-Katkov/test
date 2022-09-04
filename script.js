'use strict';  // использование нового стандарта ES6
/* Горячие клавиши:
npm install - g jshint // сtrl+J - открыть терминал или View - Appearance - Panel или в нижнем левом углу нажать на Errors, Warnings.
Alt + Shift + F - beautifu // Правая кнопка мыши Format Document
Ctrl + /(.) - закоментировать код. */

// Лекция 1. Переменные:

var leftBorderWidth = 1;
// var - создание переменной. 
// leftBorderWidth - название переменной, не может начинаться с числа.
/* leftBorderWidth и leftborderwidth - разные переменные из-за 
отличия регистра(загл. буква\прописная)*/
let second = 2;
/* если var обьявлена в коде. Она существует в коде везде. 
Например:*/
console.log(a);
var a = 45;
/* Консоль выдаст undefined. Т.е. определит что переменная существует.
Сделать так же с let не получится. Она создается лишь тогда, когда код
доходит до неё.
Так же , если let была создана внутри фигурных скобок {}, 
мы не сможем вывести её значение.
*/
let b = 3;
console.log(b);
// будет равно 3
{
    let c = 5;
}
console.log(c);
// будет равно undefined, т.к. она в скобках,а log(c) - нет
const pi = 3.14;
// константа



// Лекция 2 . Типы данных: 

var number = 5;             // 5
console.log("string" * 9);  // NaN
console.log(5 / 0);         // infinity
/* Числа - в этот тип данных входят целые и дробные числа,
а так же значение NaN (Not a number), которое мы получаем при
математических действиях чисел с другими типами данных.
infinity - которое можно получить при делении на ноль.*/

var string = "Hello";       // Строки
var sym = Symbol();         // Символ
var boolean = true;         // Логический тип
null;                       // не существует что либо
undefined;                  // не присвоено значение
var object = {}             // Обьект - коллекция данных

var person = {
    name: "John",               
    age: 27,                // Cвойства обьекта
    isMarried: false          
}

console.log(person.age);    // свойство age обьекта person
console.log(person["age"]); // свойство age обьекта person,
                            // вмещает большие свойства.

let arr = ["apple.png", "orange.jpg", "plum.bmp"]; //Массив
// Счёт в массиве начинается с 0.      arr[0] = apple.png
console.log(arr[2]); // plum.bmp


// Лекция 3. Динамическая типизация:
const obj = {               // вид объектов (спецобъект)
    name: "Alex"
}
               0  1  2  3
const array = [1, 3, 5, 6]; // вид объектов (спецобъект)
function                    // вид объектов (спецобъект)


// - to String - превращение переменной в строку.
//1)
console.log(typeof(String(null)));  // число обратилось в строку 
                                    // через String
// 2) Конкатинация
console.log(typeof("www"+ false));  // через "текст" + 
console.log('https://vk.com/catalog/' + 5);

//- to Number - превращение переменной в число
// 1)
console.log(typeof(Number('5')));   // число обратилось в строку 
                                    // через Number
// 2)
console.log(typeof(+"5"));          // через +
// 3)
console.log(typeof(parseInt("15px", 10))); // исключение из правил 
                                           // "текст" + даст число

let answer = +prompt("Hello?", '');        // превращаем в число
                                           // все что ввел пользователь

// - to Boolean
// 1) 
/* по умолчанию большинство объектов уже имеет 
булевое значение, например в применении if(array) - 
если переменная не 0, '', null, undefined, NaN, то 
она выполнит своё условие.*/
// даёт false
0, '', null, undefined, NaN
//строка с пробелом даст уже true ' '

let swithcer = null;                // пример null - boolean(0)

if(swithcer){                       // if(0) - не будет выполнятся
    console.log("Working...")
}

swithcer = 1;                       // if(1) - будет выполнятся
if(swithcer){
    console.log("Working...")
}

// 2)
console.log(typeof(Boolean('5')));  // число 5 станет boolean(1)
                                    // через Number
// 3)   
console.log(typeof(!!'5'));         // число 5 станет boolean(1)
                                    // через !!

//  Лекция 4. Операторы в JS:
// виды = 
let k = 10;     // присвоение значения
let m = "10";   // присвоение значения
k == m        // сравнение по значению: true(оба равны 2)
k === m        // строгое сравнение по типу данных: false(число и текст)
let incr = 10,
    decr = 10;  // Можно создавать несколько переменных через запятую

    console.log(incr++); // 11
    console.log(decr++); // 9

let isCheked = true,
    isClose = false;

console.log(isCheked && !isClose);  // оператор && даёт true, только 
                                    // когда все значения true
console.log(isCheked || !isClose);   // оператор || даёт true, если 
                                    // хотябы одно true
