const { it, expect, describe } = require("@jest/globals")
const Employee = require("../lib/Employee")

describe("Employee",()=>{
    describe("returns an object", ()=> {
        it("should return an object", ()=> {
            const employee = new Employee()
            expect(typeof(employee)).toEqual("object")
        
        })
    }) 
    describe("Name", ()=> {
        it("should return a name", ()=> {
            const name = "Bob"
            const employee = new Employee(name)
            expect(employee.name).toEqual(name)
        })

    })
}) 