const ADMIN_PASSWORD = 'jqueryismyjam';
const input = prompt('Введите пароль:');
let message;

if (input === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}

else if (input === null) {
    message = 'Отменено пользователем!';
}
else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
