const Square=require("../lib/square")
const square=new Square("TYY","purple","yellow")
describe("Circle", ()=>{
    describe("properties", ()=>{
        it("test text,textColor and shapeColor",()=>{
            
            //input is square.text = output TYY
            expect(square.text).toEqual("PLL")
            expect(square.textColor).toEqual("blue")
            expect(square.shapeColor).toEqual("black")
        })
    })
    describe("(method (is function in an object)",()=>{
        it("test render()",()=>{
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">PLL</text></svg>`)
        })
    })
})