// Задание 1
const clientBank = {
    fullName: "Алексей",
    accountID: "987654321",
    accountBalance: 504300,
    [Symbol.for("clientId")]: 101
};

const clinicEmployee = {
    fullName: "Мария",
    jobTitle: "Врач",
    yearsOfExperience: 8,
    [Symbol.for("employeeId")]: 102
};

const russianCitizen = {
    fullName: "Светлана",
    idNumber: "098765",
    age: 25,
    [Symbol.for("citizenId")]: 103
};



// Выводим в консоль
console.log("Клиент банка:", clientBank);
console.log("Работник клиники:", clinicEmployee);
console.log("Гражданин РФ:", russianCitizen);
console.log("Символ id клиента банка:", clientBank[Symbol.for("clientId")]);
console.log("Символ id работника клиники:", clinicEmployee[Symbol.for("employeeId")]);
console.log("Символ id гражданина РФ:", russianCitizen[Symbol.for("citizenId")]);

//Задание 2 3 4 во втором файле
