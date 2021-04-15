import {StudentsType} from "../02-objects/02";
import {addSkill} from "./03";

let student: StudentsType

beforeEach(() => {
    student = {
        id: 1,
        name: 'Bob',
        age: 20,
        isActive: true,
        address: {
            street: 'Nezavka_10',
            city: {
                title: 'Minsk',
                country: 'Belarus'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'css'
            },
            {
                id: 2,
                title: 'html'
            },
            {
                id: 3,
                title: 'react'
            }
        ]
    }
})

test('new tech skill should be added to student', () => {
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})