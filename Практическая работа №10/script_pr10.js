class User {
    constructor(username){
     this.Name = username;
     document.write(this.Name);}
 };

let string = prompt("Введите строчку");  //из 7 прак
let reversedString = string.split('').reverse().join('');
if (string.toLowerCase() === reversedString.toLowerCase()) {
    alert("Строчка - палиндром");
} else {
    alert("Строчка - не палиндром");
} 
  let name = new User (prompt ("Напишите свое имя"));
 let user2name = "Вася";
 
 class User2 {
     constructor(user2name){
         this.user = 'Привет, ' + user2name;
         alert(this.user)
     }
 }
 let user2 = new User2(user2name);
 
 
 let zxc = prompt("Введите имя еще одного пользователя"); 
 
 class User3 {
   constructor(zxc){
     this.user3 = zxc;
   }
   reverseUser3(){
     this.user3 = this.user3.split('').reverse().join('');
     alert(this.user3);
   }
 }
 
 let user3 = new User3(zxc); 
 user3.reverseUser3();