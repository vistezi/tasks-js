function welcome() {
  console.log("Добро пожаловать на урок ");
}

welcome();
welcome();

function square(number) {
  return number * number;
}

console.log(square(2));
console.log(square(5));
console.log(square(12));

function sum(a, b) {
  return a + b;
}

console.log(sum(15, 25));

function rectangleArea(width, height) {
  return width * height;
}

console.log(rectangleArea(5, 8));

function checkEven(number) {
  if (number % 2 === 0) {
    return "Чётное";
  } else {
    return "Нечётное";
  }
}

console.log(checkEven(12));
console.log(checkEven(7));

function checkAge(age) {
  if (age >= 18) {
    return "Доступ разрешён";
  }
  return "Доступ запрещён";
}

console.log(checkAge(20));
console.log(checkAge(16));

function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(80, 90, 100));

function calculator(a, b, operation) {
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;

  if (operation === "/") {
    if (b === 0) return "Деление на ноль!";
    return a / b;
  }

  return "Неизвестная операция";
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 0, "/"));

function getGrade(score) {
  if (score < 0 || score > 100) {
    return "Некорректный балл";
  }

  if (score >= 90) {
    return "Отлично";
  } else if (score >= 70) {
    return "Хорошо";
  } else if (score >= 50) {
    return "Удовлетворительно";
  } else {
    return "Неудовлетворительно";
  }
}

console.log(getGrade(95));
console.log(getGrade(78));
console.log(getGrade(45));

function calculatePrice(price) {
  if (price >= 20000) {
    return price * 0.9;
  }

  return price;
}

console.log(calculatePrice(15000));
console.log(calculatePrice(30000));


function findMax(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}

console.log(findMax(12, 45, 28));


function checkAccess(age, registered, permission) {
  if (age >= 16 && registered && permission) {
    return "Доступ в лабораторию разрешён";
  }

  return "Доступ запрещён";
}

console.log(checkAccess(17, true, true));
console.log(checkAccess(15, true, true));
console.log(checkAccess(18, true, false));