var arr1 = []; // создаем массив
for (var i = 0; i < 15; i++) {
    arr1.push(Math.floor(Math.random() * (30 - (-10) + 1)) + (-10)); //на рандом генерируем массив
}
console.log("Массив:", arr1); // выводим массив в консоль

var positiveSum = 0; // переменная для положит элементов
var positiveCount = 0; // для подсчета
for (var j = 0; j < arr1.length; j++) {
    if (arr1[j] > 0) { 
        positiveSum += arr1[j]; // доб. положит. элемент 
        positiveCount++; // увеличиваем счетчик 
    }
}
var averagePositive = positiveCount > 0 ? positiveSum / positiveCount : 0; // среднее арифметическое положит эл
console.log("Среднее арифметическое положительных элементов:", averagePositive); // выводим в консоль результат




var n = 15;
var arr2 = []; // создаем еще один массив
for (var i = 0; i < n; i++) {
    arr2.push(Math.floor(Math.random() * (30 - (-10) + 1)) + (-10));
}
console.log("Исходный массив:", arr2);

for (var j = 0; j < arr2.length; j++) {
    if (arr2[j] < 0) {
        arr2[j] = arr2[j] * arr2[j]; // заменяем отрицательный элемент на его квадрат
    }
}
console.log("Массив после замены отрицательных элементов:", arr2); // выводим в консоль новый массив







var arr3 = []; 
for (var i = 0; i < n; i++) {
    arr3.push(Math.floor(Math.random() * (30 - (-10) + 1)) + (-10));
}
console.log("Массив:", arr3); 

var positiveSum3 = 0, negativeSum3 = 0; //переменные для сумм
var positiveCount3 = 0, negativeCount3 = 0, zeroCount = 0; // переменные для счетчиков

for (var j = 0; j < arr3.length; j++) {
    if (arr3[j] > 0) { 
        positiveSum3 += arr3[j]; // доб к сумме положительных
        positiveCount3++; // увеличиваем счетчик положительных
    } else if (arr3[j] < 0) { // проверка, является ли элемент отрицательным
        negativeSum3 += arr3[j]; // доб к сумме отрицательных
        negativeCount3++; // увеличиваем счетчик отрицательных
    } else {
        zeroCount++; // увеличиваем счетчик нулей
    }
}


var averagePositive3 = positiveCount3 > 0 ? positiveSum3 / positiveCount3 : 0;
var averageNegative3 = negativeCount3 > 0 ? negativeSum3 / negativeCount3 : 0; //вычис ср знач


console.log("Среднее арифметическое положительных чисел:", averagePositive3);
console.log("Среднее арифметическое отрицательных чисел:", averageNegative3);
console.log("Количество нулей:", zeroCount);






var redCount = 0; // счетчик для красных значений
var trials = 1000000; // кол-во испытаний

for (var i = 0; i < trials; i++) {
    var value = Math.floor(Math.random() * 3); // генерируем массив случайного числа от 0 до 2 (красный, черный, белый)
    if (value === 0) { // если выпало красное значение (0)
        redCount++; // увеличиваем счетчик красных значений
    }
}
console.log("Максимальное количество раз, когда выпадало красное значение:", redCount);