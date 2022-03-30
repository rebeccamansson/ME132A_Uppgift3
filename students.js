"use strict";


// filter all students from database and return the firs& lastname that includes input value
function getStudent() {
    let input = document.getElementById("searchbox");
    let students = DATABASE.students
        .filter((student) => student.lastName.toLowerCase().includes(input.value.toLowerCase()))

        .map(student => student)

        .sort(function (a, b) {
            if (a.firstName < b.firstName) {
                return -1
            }
            if (a.firstName > b.firstName) {
                return 1
            }
            return 0
        })


    return students;
}


function keyUp() {
    let input = document.getElementById("searchbox")
    input.addEventListener("keyup", runCreateHTML)
}

function createHTML(student, totalCredit) {

    let studentName = document.getElementById("students");
    let div = document.createElement("div");
    div.classList = ("allstudents");
    div.innerHTML = `
    <h1>${student.firstName + " " + student.lastName} 
    (Total : ${totalCredit} Credits)</h1> 
    <h2>Courses:</h2>



    `
    studentName.append(div);


}

function runCreateHTML() {
    let allText = document.getElementById("students");
    let students = getStudent();
    allText.innerHTML = "";

    for (let student of students) {
        let credits = getTotalCredit(student.courses)
        createHTML(student, credits)
        getCourseTitle(student)
    }
}

function getTotalCredit(courses) {
    let totalCredit = 0;
    courses.forEach(course => {
        totalCredit += course.passedCredits

    })
    return totalCredit;
}


function getCourseTitle(student) {
    let allText = document.getElementById("students");
    let allCourses = document.createElement("div");
    allCourses.classList.add("courseboxes");
    allText.appendChild(allCourses);

    for (let studentC of student.courses) {
        for (let courseC of DATABASE.courses) {
            if (studentC.courseId == courseC.courseId) {


                let div = document.createElement("div");
                div.classList.add("studentcourse");
                div.innerHTML =
                    `
                <p>${courseC.title} <br>
                  ${studentC.started.semester} ${studentC.started.year} (${studentC.passedCredits
                    } of ${courseC.totalCredits} credits)</p>
            
                `
                if (studentC.passedCredits == courseC.totalCredits) {
                    div.style.background = "rgb(152,251,152)";
                }
                allCourses.appendChild(div);
            }
        }

    }
    return


}
keyUp();











