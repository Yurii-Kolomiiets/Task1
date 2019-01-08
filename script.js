'use strict';

let money = + prompt('Ваш бюджет на месяц? (грн.)', '3000');
let time = prompt('Введите дату в формате YYYY-MM-DD', '2019-01-08');

// console.log('Бюджет: ' + money);
// console.log('Дата: ' + time);

let expenses = {};
for(let i = 0; i < 2; i++)
{
    let item = prompt('Введите обязательную статью расходов в этом месяце', 'питание');
    let cost = prompt('Во сколько обойдется? (грн.)', '1000');
    expenses[`${item}`] = +cost;
}
//console.dir(expenses);

let optionalExpenses ={};
let income = [];

let appData = {
    money: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: optionalExpenses,
    income: income,
    savings: false
};
//console.dir(appData);

alert('Бюджет на 1 день: ' + appData.money / 30 + 'грн.');