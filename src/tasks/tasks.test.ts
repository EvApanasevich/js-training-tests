import {ActionType, calculator, copyStudentsGroup, Group, restSum, sum} from "./tasks";

test('sum of two numbers', () => {

    const a = 10
    const b = 5

    const result = sum(a, b)

    expect(result).toBe(15)
})

test('sum of several numbers', () => {

    const a: number = 10
    const b: number = 12
    const c: number = 5
    const d: number = 8
    const e: number = 18

    expect(restSum(a, b, c)).toBe(27)
    expect(restSum(a, b, c, d, e)).toBe(53)
    expect(restSum(a, b)).toBe(22)
    expect(restSum(a, b, c, d)).toBe(35)

})
test('calculator should be ok!', () => {

    const a: number = 10
    const b: number = 5

    expect(calculator(a, b, {type: 'sum'})).toBe(15)
    expect(calculator(a, b, {type: 'mul'})).toBe(50)
    expect(calculator(a, b, {type: 'sub'})).toBe(5)
    expect(calculator(a, b, {type: 'div'})).toBe(2)
})

test('get copy group', () => {

    const stGroup: Group = [
        {name: 'Bob', friends: ['Alex', 'Kola']},
        {name: 'Alex', friends: ['Bob', 'Kola']},
        {name: 'Nick', friends: ['Alex', 'Kola']}
    ]

    const copyStGroup = copyStudentsGroup(stGroup)

    expect(stGroup).toEqual(copyStGroup)
    expect(stGroup).not.toBe(copyStGroup)
    expect(stGroup[0]).not.toBe(copyStGroup[0])
    expect(stGroup[0].friends).not.toBe(copyStGroup[0].friends)
})

