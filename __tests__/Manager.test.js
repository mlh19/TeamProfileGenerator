// const { it, expect, describe } = require("@jest/globals")
const Manager = require("../lib/Manager")
// Import Manager class
describe("Manager",() => {
    describe("returns an object", () => {
        it("should return an object", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const officeNumber = "303"
            const manager = new Manager(name, id, email, officeNumber)
            expect(typeof(manager)).toEqual("object")
        })
    }) 

    describe("Name", () => {
        it("should return a name", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const officeNumber = "303"
            const manager = new Manager(name, id, email, officeNumber)
            expect(manager.name).toEqual(name)
        })
    })

    describe("Id", () => {
        it("should return an id", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const officeNumber = "303"
            const manager = new Manager(name, id, email, officeNumber)
            expect(manager.id).toEqual(id)
        })
    })

    describe("Email", () => {
        it("should return an email", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const officeNumber = "303"
            const manager = new Manager(name, id, email, officeNumber)
            expect(manager.email).toEqual(email)
        })
    }) 
    
    describe("officeNumber", () => {
        it("should return a number", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const officeNumber = "303"
            const manager = new Manager(name, id, email, officeNumber)
            expect(manager.officeNumber).toEqual(officeNumber)
        })
    })
}) 