import {studentType} from "./02";
import {addSkill} from "./02_02";

let student: studentType;

beforeEach(() => {
    student = {
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
}
})
test("new tech skill should be added", () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, "JS");
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
})