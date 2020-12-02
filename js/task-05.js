const inputCountry = prompt('Для расчета стоимости доставки укажите страну назначения:');
const checkingCountry = inputCountry.toLowerCase();
let country;
let cost;


switch (checkingCountry) {
    case 'китай':
        cost = 100;
        country = 'Китай';
        break;

    case 'чили':
        cost = 250;
        country = 'Чили';
        break;
        
    case 'австралия':
        cost = 170;
        country = 'Австралию';
        break;
        
    case 'индия':
        cost = 80;
        country = 'Индию';
        break;
    
    case 'ямайка':
        cost = 120;
        country = 'Ямайку';
        break;
    
    default:
        alert('В вашей стране доставка не доступна!');
}
console.log(`Доставка в ${country} будет стоить ${cost} кредитов.`);