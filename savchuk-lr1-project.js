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
	let isValid = false;
	while (!isValid) {
			const input = (await questionAsync('Введите цифру N (1-9): ')).trim();
			
			// Проверка на одну цифру
			if (!/^[1-9]$/.test(input)) {
					console.log('Ошибка: N должно быть цифрой от 1 до 9!');
					continue;
			}

			N = parseInt(input, 10);
			isValid = true;
			console.log(`Цифра N = ${N} успешно сохранена!`);
	}
}

function findDigitRightToLeft(K, N) {
	if (K <= 0) {
			console.log('❌ Ошибка: Число K не инициализировано!| Сначала выполните пункт 1 меню');
			return -1;
	}

	if (N <= 0) {
			console.log('❌ Ошибка: Позиция N не задана!| Сначала выполните пункт 2 меню');
			return -1;
	}

	const strK = K.toString();
	const length = strK.length;

	if (N > length) {
			console.log(`❌ Ошибка: В числе ${K} всего ${length} цифр(ы). | Невозможно найти ${N}-ю цифру справа`);
			return -1;
	}

	const result = Number(strK[length - N]);
	console.log(`✅ Цифра №${N} справа в числе ${K}: ${result}`);
	return result;
}

function findDigitLeftToRight(K, N) {
	if (K <= 0) {
			console.log('❌ Ошибка: Число K не инициализировано! | Сначала выполните пункт 1 меню');
			return -1;
	}

	if (N <= 0) {
			console.log('❌ Ошибка: Позиция N не задана! | Сначала выполните пункт 2 меню');
			return -1;
	}

	const strK = K.toString();
	const length = strK.length;

	if (N > length) {
			console.log(`❌ Ошибка: В числе ${K} всего ${length} цифр(ы). | Невозможно найти ${N}-ю цифру слева`);
			return -1;
	}

	const result = Number(strK[N - 1]);
	console.log(`✅ Цифра №${N} слева в числе ${K}: ${result}`);
	return result;
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

module.exports = {
	findDigitRightToLeft,
	findDigitLeftToRight
};

// Запуск приложения
mainMenu()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
		});