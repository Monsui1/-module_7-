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
            throw new Error("Unknown operator: " + operator);                 
 }
}

let values = [2, 3, "+"];
let result = calculate.apply(null, values);

console.log(result);
