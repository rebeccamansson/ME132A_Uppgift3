"use strict";

let input = document.getElementById("searchbox")

// filter all students from database and return the firs& lastname that includes input value
function getStudent() {
    let student = DATABASE.students
    .filter((student) => student.lastName.toLowerCase().includes(input.value))
    .map((student) => student.firstName + "" + student.lastName);

    return student;
}

input.addEventListener("keyup", function () {
    let findStudent = getStudent();
    let allText = document.getElementById("students");
    allText.innerHTML = "";
    runCreateHTML(findStudent);

    if (input.value == 0) {
        allText.innerHTML = "";

    }
})

function createHTML(student) {

    let studentName = document.getElementById("students");
    let div = document.createElement("div");
    div.innerHTML = `
    ${student} 

    `
    studentName.append(div);
    

}

function runCreateHTML(students) {
    for (let student of students) {
        createHTML(student)
    }
}