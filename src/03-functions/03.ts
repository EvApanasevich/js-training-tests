import {StudentsType} from "../02-objects/02";

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentsType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}
