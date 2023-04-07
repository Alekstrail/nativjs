import {isNumber} from "util";

export type cityType = {
    title: string
    countryTitle: string
}
export type AdressType = {
    streetTitle: string
    city: cityType
}
export type TechType  = {
    id: number
    title: string

}
export type studentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AdressType
    technologies: Array<TechType>
}


const students: studentType = {
    id: 1
    name: 'Sania',
    age: 33,
    isActive:true,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Kovdor",
            countryTitle: "Canada"
        }
    },
    technologies: [
        {
            id:1,
            title: "HTML"
        },
        {id:2,
        title: "CSS"
        },
        {
            id:3,
            title: "React"
        }
    ]
}

