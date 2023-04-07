import {studentType} from "../02/02";

export const addSkill = (student: studentType, skill:string) => {
    student.technologies.push({
        id:new Date().getTime(),
        title: skill
    })
}