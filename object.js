const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
name = person.fullName();
console.log(person['firstName']);
console.log(person.firstName);