function greet(name)
{console.log(`привет ${name}`)}

greet("алия")

function square(num){
    return num * num
}
console.log(square(6))

function sum(a , b){
    return a + b
}
console.log(sum(15 , 25))

function minutesToseconds(min)
{return min * 60}
console.log(minutesToseconds(5))

function area(side){
    return side * side 
}
console.log(area(7))

function checkNumber(num){
    if(num % 2 === 0 ){return 'четное число'}
    else{return 'не четное число'}
}
console.log(checkNumber(9))
console.log(checkNumber(8))

function checkAge(age){
    if(age >= 18){return 'совершенолетний'}
    else{return 'не совершенолетний'}
}
console.log(checkAge(17))
console.log(checkAge(19))

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

function average(a , b , c)
{return (a + b + c) / 3}
console.log(average(80 , 90 , 100))

function discount(price){
if (price >= 10000){return price * 0.9}
else{return price}}

console.log(discount(20000))

function calculator(a , b , operation){
if (operation === "+") return a + b
if (operation === '-') return a - b
if (operation === '*') return a * b
if (operation === '/'){
if ( b === 0){return'ошибка, деление на ноль'}
return a / b}
}
console.log(calculator(20, 5, "/"))

function getGrade(score){
if(score >= 90 && score <= 100)return "отлично"
if(score >= 70 && score <= 89) return "хорошо"
if(score >= 50 && score <= 69 ) return 'среднее'
if(score >= 0 && score <= 49) return 'плохо'
return "не коректный бал"}
console.log(getGrade(85))

function checkPassword(password){
    if (password.length>= 8){return "надежный пароль"}
    else{return 'пароль слишком короткий '}
}
console.log(checkPassword("JavaScript123"))

function taxiPrice(km) {
    let basePrice = 500;
    let pricePerKm = 120;
    let total = basePrice + (km * pricePerKm);
    return `${total} тенге`;
}


console.log(taxiPrice(10)); 
console.log(taxiPrice(0));  
console.log(taxiPrice(5));  



function withdraw(balance, amount) {
    if (amount <= 0) {
        return "Ошибка: некорректная сумма для снятия";
    }
    if (balance >= amount) {
        return balance - amount;
    } else {
        return "Недостаточно средств";
    }
}


console.log(withdraw(50000, 20000));
console.log(withdraw(10000, 15000));
console.log(withdraw(20000, -5000));