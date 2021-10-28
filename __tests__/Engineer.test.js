// const { it, expect, describe } = require("@jest/globals")
const Engineer = require("../lib/Engineer")
// Import Engineer class
describe("Engineer",() => {
    describe("returns an object", () => {
        it("should return an object", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const githubUsername = "engineer123"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(typeof(engineer)).toEqual("object")
        })
    }) 

    describe("Name", () => {
        it("should return a name", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const githubUsername = "engineer123"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(engineer.name).toEqual(name)
        })
    })

    describe("Id", () => {
        it("should return an id", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const githubUsername = "engineer123"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(engineer.id).toEqual(id)
        })
    })

    describe("Email", () => {
        it("should return an email", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const githubUsername = "engineer123"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(engineer.email).toEqual(email)
        })
    })
    
    describe("githubUsername", () => {
        it("should return a username", () => {
            const name = "Bob"
            const id = "10"
            const email = "test@test.com"
            const githubUsername = "engineer123"
            const engineer = new Engineer(name, id, email, githubUsername)
            expect(engineer.githubUsername).toEqual(githubUsername)
        })
    })    
}) 