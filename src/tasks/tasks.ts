export const sum = (a: number, b: number) => {
    return a + b
}


// ...numbers - остаточные параметры которые могут передаваться в функцию
export const restSum = (...numbers: Array<number>) => {
    return numbers.reduce((acc, el) => acc + el)
}


 export type ActionType = {
    type: 'sum' | 'mul' | 'sub' | 'div'
}
export const calculator = (a: number, b: number, action: ActionType) => {
switch (action.type) {
    case 'sum' :
        return a + b
    case 'mul' :
        return a * b
    case 'sub' :
        return a - b
    case 'div' :
        return a / b
    default:
        return 'Unknown type of action'
}
}

export type Student = {
    name: string
    friends: Array<string>
}
export type Group = Array<Student>

export const copyStudentsGroup = (group: Group): Group => {
return group.map(st => ({...st, friends: [...st.friends]}))
}