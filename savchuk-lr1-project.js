const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let K = 0;
let N = 0;

// Асинхронная обертка для question
function questionAsync(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
}

async function inputK() {
	let isValid = false;
	while (!isValid) {
			const input = (await questionAsync('Введите натуральное число K: ')).trim();
			
			// Проверка формата с помощью регулярного выражения
			if (!/^[1-9]\d*$/.test(input)) {
					console.log('Ошибка: K должно быть целым положительным числом без ведущих нулей!');
					continue;
			}

			// Преобразование в число и дополнительная проверка
			const number = parseInt(input, 10);
			if (isNaN(number) || number <= 0) {
					console.log('Ошибка: введите корректное натуральное число!');
					continue;
			}

			K = number;
			isValid = true;
			console.log(`Число K = ${K} успешно сохранено!`);
	}
}

async function inputN() {
    // Реализация будет добавлена позже
}

function findDigitRightToLeft() {
    // Реализация будет добавлена позже
    return -1;
}

function findDigitLeftToRight() {
    // Реализация будет добавлена позже
    return -1;
}

async function mainMenu() {
    while (true) {
        console.log("\nМеню:");
        console.log("1. Ввести натуральное число K");
        console.log("2. Ввести цифру N");
        console.log("3. Найти N-ю цифру числа K справа налево");
        console.log("4. Найти N-ю цифру числа K слева направо");
        console.log("5. Выход");

        const choice = await questionAsync("Выберите пункт меню: ");

        switch (choice) {
            case '1':
                await inputK();
                break;
            case '2':
                await inputN();
                break;
            case '3': {
                const result = findDigitRightToLeft();
                console.log(`Результат: ${result}`);
                break;
            }
            case '4': {
                const result = findDigitLeftToRight();
                console.log(`Результат: ${result}`);
                break;
            }
            case '5':
                rl.close();
                return;
            default:
                console.log("Неверный пункт меню!");
        }
    }
}

// Запуск приложения
mainMenu()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });