"use strict";


// filter all students from database and return the firs& lastname that includes input value
function getStudent() {
    let input = document.getElementById("searchbox");
    let students = DATABASE.students
        .filter((student) => student.lastName.toLowerCase().includes(input.value.toLowerCase()))

        .map(student => student)
        

    return students;
}

function keyUp(){
let input = document.getElementById("searchbox")
input.addEventListener("keyup", runCreateHTML ) 
}

function createHTML(student, totalCredit) {

    let studentName = document.getElementById("students");
    let div = document.createElement("div");
    div.classList = "allstudents";
    div.innerHTML = `
    <p>${student.firstName + " " + student.lastName} </p>
    <p>(Total : ${totalCredit} Credits)</p>

    `
    studentName.append(div);


}

function runCreateHTML() {
    let allText = document.getElementById("students");
    let students = getStudent() ;
    allText.innerHTML = "";
    
    for (let student of students) {
        let credits = getTotalCredit(student.courses)
        createHTML (student,credits)
    }
}


function getTotalCredit(courses) {
    let totalCredit = 0;
    courses.forEach (course => {
        totalCredit += course.passedCredits
    })
    return totalCredit;
}

keyUp ();




        


           


