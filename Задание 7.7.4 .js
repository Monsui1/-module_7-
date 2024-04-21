function setFullName(fullName) {
    this.fullName = fullName;
}

let person = {
    name: 'Pavel'
};

let setPersonFullName = setFullName.bind(person);
setPersonFullName("John Smith");

console.log(person.fullName);