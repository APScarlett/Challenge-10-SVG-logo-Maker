const Triangle=require("../lib/triangle")
const triangle=new Triangle("APS","green","red")
describe("Triangle", ()=>{
    describe("properties", ()=>{
        it("test text,textColor and shapeColor",()=>{
            
            //input is triangle.text = output TYY
            expect(triangle.text).toEqual("PLL")
            expect(triangle.textColor).toEqual("blue")
            expect(triangle.shapeColor).toEqual("black")
        })
    })
    describe("(method (is function in an object)",()=>{
        it("test render()",()=>{
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="black"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">PLL</text></svg>`)
        })
    })
})