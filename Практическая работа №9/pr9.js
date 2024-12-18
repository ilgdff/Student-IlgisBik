const customer = {
    lastName: "Бикбаев",
    firstName: "Ильгис",
    patronymic: "Русланович",
    city: "Москва",
    email: "email.ilgis@yandex.ru"
   };
   
   console.log(customer.lastName, customer.firstName, customer.patronymic);
  
  
  
  
  
  let customer1 = {
      name: "Илья",
      age: 18,
    isAdmin: false
   };
   let order = {
  num: 1,
  numorder: 2,
  items: ["Паста", "Стейк", "Суп"],
  status: "Готовится"
   }
   let restaurant = {
      name: "Турандонт",
      address: "Тверской бульвар, 26/3", 
      city: "Москве",
      time: "22:46"
   };
   if (order.status === "Готовится") {
    console.log(`Вы заказывали заказ -  ${order.items} от клиента ${customer1.name} в ресторане ${restaurant.name} в ${restaurant.city} по адресу ${restaurant.address} в ${restaurant.time}.`);
  }
  
  
  
  
  
  
  
  function User(name) {
      this.name = name;
      this.isAdmin=false;
    }
    
    const mates = new User("Миша");
    const mates2 = new User("Саша");
    const mates3 = new User("Кирилл");
    const mates4 = new User("Мухамед");
    const mates5 = new User("Игорь");
    const mates6 = new User("Егор");
    const mates7 = new User("Исмаил");
    const mates8 = new User("Ваня");
    const mates9 = new User("Даша");
    const mates10 = new User("Толик");
    const mates11 = new User("Рома");
    const mates12 = new User("Вика");
  
    
    console.log("Студенты группы ИСП-310:", mates.name, mates2.name, mates3.name, mates4.name, mates5.name, mates6.name, mates7.name, mates8.name, mates9.name, mates10.name, mates11.name, mates12.name);
    
  
  
  
  
  
  
  
    function Student (lname, fname, college, spec, group) {
      this.lname = lname;
      this.fname = fname;
      this.college = college;
      this.spec = spec;
      this.group = group;
    
      this.sayHi = function() {
        console.log(`Меня зовут ${this.lname} ${this.fname}, я обучаюсь в ${this.college} на специальности ${this.spec} в группе ${this.group}!`);
      };
    }
    const stud = new Student("Бикбаев", "Ильгис", "УКИТ", "Веб-разработчик", "ИСП-310");
    stud.sayHi(); 
  
    