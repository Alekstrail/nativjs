import * as string_decoder from "string_decoder";
import {studentType} from "./02";
export type HouseType = {
    ``
}
export type CityType = {
    title: string
    houses: Array<string>
    governmentBuildings: Array<string>
    citizensNumber: number
}
export const addSkill(student: studentType, skill:string) {
    student.technologies.push({
        id:new Date().getTime(),
        title: skill
    })
}