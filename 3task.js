function calculateDiscount(price, discount) {
    if (discount < 0 || discount > 100) {
        return "Ошибка: скидка должна быть в диапазоне от 0 до 100%";
    }
    let discountAmount = (price * discount) / 100;
    let finalPrice = price - discountAmount;

    return finalPrice;
}

console.log(calculateDiscount(20000, 15));   
console.log(calculateDiscount(20000, 150));

function getStudentLevel(score) {
    if (score >= 90 && score <= 100) {
        return { level: "Отличный уровень", advice: "Продолжайте в том же духе, попробуйте углубленное изучение!" };
    } else if (score >= 70 && score < 90) {
        return { level: "Хороший уровень", advice: "Закрепите материал и обратите внимание на сложные темы." };
    } else if (score >= 50 && score < 70) {
        return { level: "Средний уровень", advice: "Рекомендуется повторить теорию и решить больше практических задач." };
    } else if (score >= 0 && score < 50) {
        return { level: "Низкий уровень", advice: "Требуется серьезная работа над базовыми понятиями." };
    } else {
        return { level: "Некорректный балл", advice: "Введите число от 0 до 100." };
    }
}

console.log(getStudentLevel(85));

function generatePassword(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
    let password = "";

    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    return password;
}

console.log(generatePassword(10));

function countVowelsAndConsonants(text) {
    let vowels = "аеёиоуыэюяaeiou";
    let consonants = "бвгджзклмнпрстфхцчшщbcdfghjklmnpqrstvwxyz";
    
    let vCount = 0;
    let cCount = 0;

    text = text.toLowerCase();

    for (let char of text) {
        if (vowels.includes(char)) {
            vCount++;
        } else if (consonants.includes(char)) {
            cCount++;
        }
    }

    return { гласные: vCount, согласные: cCount };
}

console.log(countVowelsAndConsonants("JavaScript"));


function findCheapestProduct(products) {
    if (products.length === 0) {
        return null;
    }

    let cheapest = products[0];

    for (let product of products) {
        if (product.price < cheapest.price) {
            cheapest = product;
        }
    }

    return cheapest;
}

console.log(findCheapestProduct(products));


function calculateAttendance(total, attended) {
    if (total <= 0 || attended < 0 || attended > total) {
        return "Ошибка данных";
    }

    let percent = (attended / total) * 100;
    let status = "";

    if (percent >= 85) {
        status = "Высокая посещаемость";
    } else if (percent >= 60) {
        status = "Средняя посещаемость";
    } else {
        status = "Низкая посещаемость";
    }

    return {
        percent: percent.toFixed(1) + "%",
        status: status
    };
}

console.log(calculateAttendance(40, 36));

function getSuccessfulStudents(students) {
    return students
        .filter(student => student.score >= 70)
        .sort((a, b) => b.score - a.score); 
}

console.log(getSuccessfulStudents(students));

function transfer(amount) {
    if (amount <= 0) {
        return "Некорректная сумма для перевода";
    }
    if (amount > balance) {
        return "Недостаточно средств для перевода";
    }

    balance -= amount;
    return `Успешно переведено: ${amount}. Остаток на счете: ${balance}`;
}

console.log(transfer(20000));

function isPalindrome(text) {

    let cleanText = text.toLowerCase().replace(/[^a-zа-яё0-9]/g, "");
    let reversed = cleanText.split("").reverse().join("");

    return cleanText === reversed;
}

console.log(isPalindrome("А роза упала на лапу Азора")); 

function updateStudentScore(name, newScore) {
    let student = students.find(s => s.name === name);
    if (!student) {
        return "Студент не найден";
    }
    student.score = newScore;
    return `Оценка студента ${name} обновлена до ${newScore}`;
}

console.log(updateStudentScore("Алия", 95));
showStudents();

