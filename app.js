const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
            // const outputPath = path.join(OUTPUT_DIR, "team.html");​
            // For some misterious reason this line of code produces this error:
            /* SyntaxError: Invalid or unexpected token
                at wrapSafe (internal/modules/cjs/loader.js:1071:16)
                at Module._compile (internal/modules/cjs/loader.js:1121:27)
                at Object.Module._extensions..js (internal/modules/cjs/loader.js:1177:10)
                at Module.load (internal/modules/cjs/loader.js:1001:32)
                at Function.Module._load (internal/modules/cjs/loader.js:900:14)
                at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
                */
const render = require("./lib/htmlRenderer");
console.log(path.join(OUTPUT_DIR, "team.html"));

let valerio = new Engineer("valerio",01,"notitiami@gmail.com","valvarius");
let mario = new Manager("Mario", 75, "mario@alice.it", 01);
let gianpaolo = new Intern("Gian Paolo", 50, "mousefilm@gmail.com", "UW")




const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the name of the Employee?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is their ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is their email Address?"
    },
    {
        type: 'list',
        name: 'type',
        message: "Select type of Employee?",
        choices:["Engineer","Manager","Intern"]
    }

];

const engineerQuestion = [
    {type: 'input',
    name: 'github',
    message: "What is the Engineer's GitHub Profile?"
    },
    {
        type: 'confirm',
        name: 'more',
        message: "Would you like to add another Employee?"
    }
];
const internQuestion = [
    {type: 'input',
    name: 'school',
    message: "What is the name of the Intern's School?"
    },
    {
        type: 'confirm',
        name: 'more',
        message: "Would you like to add another Employee?"
    }
];
const managerQuestion = [
    {type: 'input',
    name: 'office',
    message: "What is the Manager's office number?"
    },
    {
        type: 'confirm',
        name: 'more',
        message: "Would you like to add another Employee?"
    }
];







  


let list = [];

function ask() {
    inquirer
    .prompt(questions)
    .then (answers => {
        let name = answers.name;
        let id = answers.id;
        let email = answers.email;
        

        console.log(name);
        

        let employ = new Employee (name,id,email,);


         if (answers.type == 'Engineer'){
            inquirer
            .prompt(engineerQuestion)
            .then(answer=> {

                
                github = answer.github;
                
                let engin = new Engineer(employ.name,employ.id,employ.email,github);
                console.log(engin);
                list.push(engin);
                console.log("List:");
                console.log(list);

                more = answer.more;
                if (more) 
                    ask();
                else {
                    write();

                    console.log("Your web Page is ready");
                }
                
                
                
            })
            .catch(error => {
                if(error.isTtyError) {
                  // Prompt couldn't be rendered in the current environment
                } else {
                  // Something else when wrong
                }
              });
        }

        else if (answers.type == 'Intern'){
            inquirer
            .prompt(internQuestion)
            .then(answer=> {

                
                school = answer.school;
                
                let student = new Intern(employ.name,employ.id,employ.email,school);
                console.log(student);
                list.push(student);
                console.log("List:");
                console.log(list);

                more = answer.more;
                if (more) 
                    ask();
                    else {
                        write();
    
                        console.log("Your web Page is ready");
                    }
                
                
                
            })
            .catch(error => {
                if(error.isTtyError) {
                  // Prompt couldn't be rendered in the current environment
                } else {
                  // Something else when wrong
                }
              });
        }

        else if (answers.type == 'Manager'){
            inquirer
            .prompt(managerQuestion)
            .then(answer=> {

                
                office = answer.office;
                
                let mana = new Manager(employ.name,employ.id,employ.email,office);
                console.log(mana);
                list.push(mana);
                console.log("List:");
                console.log(list);

                more = answer.more;
                if (more) 
                    ask();
                    else {
                        write();
    
                        console.log("Your web Page is ready");
                    }
                
                
                
            })
            .catch(error => {
                if(error.isTtyError) {
                  // Prompt couldn't be rendered in the current environment
                } else {
                  // Something else when wrong
                }
              });
        }

        

        

    }).catch(error => {
            if(error.isTtyError) {
              // Prompt couldn't be rendered in the current environment
            } else {
              // Something else when wrong
            }
          });
}
ask();


// console.log(render(list));
function write() {
    fs.writeFile(path.join(OUTPUT_DIR, "team.html"),render(list), function (err) {
        if (err) {
            console.log("file not written")
            throw error;
        }
        console.log("File succesfully written!!");
        
    });
}



