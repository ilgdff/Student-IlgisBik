//задание 1
const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => (item + 10) * 3);
console.log(arr2);


//задание 2
const birthYear = [2000, 2002, 2007];
const Year = new Date().getFullYear();
const ages = birthYear.map(year => Year - year);
console.log(ages); 


//задание 3
const users = [
  { name: 'Ильгис', age: 18, isAdmin: true },
  { name: 'Миша', age: 20, isAdmin: true },
  { name: 'Игорь', age: 23, isAdmin: false },
  { name: 'Матвей', age: 20, isAdmin: true },
  { name: 'Саша', age: 18, isAdmin: true },
  { name: 'Дима', age: 18, isAdmin: false },
  { name: 'Рома', age: 18, isAdmin: false },
];
const admins = users.filter(user => user.isAdmin);
if (admins.length > 0) {
  console.log("Админитсраторы:");
  admins.forEach(admin => console.log(admin.name));
} else {
  console.log("Не Администратор:");
}


//задание 4 
const grades = [5, 4, 2, 4, 4]; 
const all = grades.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); 
const mid = all / grades.length;
console.log("Средний балл:", mid);


//задание 5
const strlArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}
function convertLen(item) {
  return item.length <= 3 ? 0 : 1;
}
const lenArray = mapForEach(strlArray, convertLen);
console.log(lenArray);