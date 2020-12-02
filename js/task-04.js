const balanceOpening = 23580;
const pricePerDroid = 3000;
const input = prompt('Какое количество дроидов хотите купить?');
const totalPrice = input * pricePerDroid;
const balanceClosing = balanceOpening - totalPrice;
let message;


if (input === null) {
    message = 'Отменено пользователем!';
    } 
else if (totalPrice > balanceOpening) {
    message = 'Недостаточно средств на счету!';
    }
else {
    message = `Вы купили ${input} дроидов, на счету осталось ${balanceClosing} кредитов.`
}
console.log(message);