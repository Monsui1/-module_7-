function printInfo() {
    console.log('Name: ' + this.name + ', Age: ' + this.age);
}
let person = {
    name: 'Pavel',
    age: 30
};
printInfo.call(person);