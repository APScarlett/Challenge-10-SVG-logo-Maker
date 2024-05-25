//include any packages needed for the application
const inquier=require("inquirer")
const fs=require("fs")
const Triangle =require("./lib/triangle")
const Circle =require("./lib/circle")
const Square =require("./lib/square")
//bellow is an array of questions for user input
const questions=[
    {
        type:"list",
        message:"Please choose from the following shapes",
        name:"shape",
        choices:["circle","triangle","square"]
    },
    {
        type:"input",
        message:"Input a three letter text:",
        name:"text"
    },
    {
        type:"input",
        message:"Pick a text color",
        name:"textColor"
    },
    {
        type:"input",
        message:"Enter shape color:",
        name:"shapeColor"
    }
]

//requests user input
inquirer.prompt(questions)
    .then(data=>{
        if(data.shape==="circle"){
            const triangle = new Circle(data.text,data.textColor,data.shapeColor)
            fs.writeFile("./examples/circle.svg", triangle.render(), err=>{
                console.log("sucess! circle.svg has been created please check the examples folder!")
            })

        }
        else if (data.shape==="triangle"){
            const triangle = new Triangle(data.text,data.textColor,data.shapeColor)
            fs.writeFile("./examples/triangle.svg", triangle.render(), err=>{
            console.log("sucess! triangle.svg has been created please check the examples folder!")
            })
        }else{

        }
    })