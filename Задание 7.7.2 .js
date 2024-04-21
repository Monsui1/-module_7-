function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Invalid operator';                
    }
}

let values = [2, 3, "+"];
let result = calculate.apply(null, values);

console.log(result);