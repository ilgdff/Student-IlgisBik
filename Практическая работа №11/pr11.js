// Задание 1 / Операции
const addNumbers = (num1, num2) => num1 + num2;
const subtractNumbers = (num1, num2) => num1 - num2;
const multiplyNumbers = (num1, num2) => num1 * num2;
const divideNumbers = (num1, num2) => num2 !== 0 ? num1 / num2 : 'Ошибка: деление на ноль';





// Задание 2 / Проверка
const validateAnswer = function(userAnswer, correctAnswer) {
    return userAnswer === correctAnswer;
};




// Задание 3 / Проверка на палиндром
const checkPalindrome = (name) => {
    const sanitizedName = name.toLowerCase().replace(/\s/g, '');
    return sanitizedName === sanitizedName.split('').reverse().join('');
};




// Задание 4 / Среднее значение массива
const calculateAverage = (numbersArray) => numbersArray.reduce((total, number) => total + number, 0) / numbersArray.length;




// Задание 5 / Количество дней до нового года
const calculateDaysUntilNewYear = () => {
    const currentDate = new Date();
    const nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);
    return Math.ceil((nextNewYear - currentDate) / (1000 * 60 * 60 * 24));
};



// Задание 6 / Пустая функция
const noOperation = () => undefined;



// Задание 7 / Функции для работы с массивом
const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfArray = (array) => array.reduce((total, number) => total + number, 0);
const filterEvenNumbers = (array) => array.filter(number => number % 2 === 0);
const doubleNumbers = (array) => array.map(number => number * 2);




// Вызываем результаты в консоль
console.log('Умножение чисел: ', multiplyNumbers(10, 2));
console.log('Проверка теста: ', validateAnswer(5, 9));
console.log('Палиндром фамилии: ', checkPalindrome('Левел'));
console.log('Среднее значение массива: ', calculateAverage([4, 2, 2, 1, 9, 5, 3]));
console.log('Дней до нового года: ', calculateDaysUntilNewYear());
console.log('Пустая функция: ', noOperation());
console.log('Сумма массива: ', sumOfArray(numberList));
console.log('Четные числа: ', filterEvenNumbers(numberList));
console.log('Умножение на 2: ', doubleNumbers(numberList));