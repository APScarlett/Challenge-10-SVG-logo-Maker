//include any packages needed for the application
const inquier=require("inquirer")
const fs=require("fs")
const Triangle =require()
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