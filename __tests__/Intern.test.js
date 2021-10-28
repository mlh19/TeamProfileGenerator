// const { it, expect, describe } = require("@jest/globals")
const Intern = require("../lib/Intern")
// Import Intern class
describe("Intern",() => {
    describe("returns an object", () => {
        it("should return an object", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const school =  "UTSA"
            const intern = new Intern(name, id, email, school)
            expect(typeof(intern)).toEqual("object")
        })
    }) 
    describe("Name", () => {
        it("should return a name", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const school =  "UTSA"
            const intern = new Intern(name, id, email, school)
            expect(intern.name).toEqual(name)
        })
    })
    describe("Id", () => {
        it("should return an id", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const school =  "UTSA"
            const intern = new Intern(name, id, email, school)
            expect(intern.id).toEqual(id)
        })
    })
    describe("Email", () => {
        it("should return an email", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const school =  "UTSA"
            const intern = new Intern(name, id, email, school)
            expect(intern.email).toEqual(email)
        })
    })
    describe("School", () => {
        it("should return a school", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const school =  "UTSA"
            const intern = new Intern(name, id, email, school)
            expect(intern.school).toEqual(school)
        })
    })    
}) 