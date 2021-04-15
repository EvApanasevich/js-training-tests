export type LocalCityType = {
    title: string
    country: string
}
export type AddressType = {
    street: string
    city: LocalCityType
}
export type TechnologiesType = {
    id: number
    title: string
}
export type StudentsType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

export const student: StudentsType = {
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