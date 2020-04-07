// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }

}
// let valerio = new Intern("valerio",01,"notitiami@gmail.com","UW");
// console.log(valerio.getRole());
// console.log(valerio.name);
// console.log(valerio.id);
// console.log(valerio.email);
// console.log(valerio.school);
// console.log(valerio.getSchool());

module.exports = Intern;