"use strict";

function getCourses() {
  let input = document.getElementById("searchbox");
  let courses = DATABASE.courses
    .filter((course) => course.title.toLowerCase().includes(input.value.toLowerCase()))
    .map(course => course)




  console.log(courses)
  return courses
}


function keyUp() {
  let input = document.getElementById("searchbox")
  input.addEventListener("keyup", runCreateHTML)
}

function createHTML(course) {

  let courseName = document.getElementById("courses");
  let div = document.createElement("div");
  div.classList = ("allcourses");
  div.innerHTML = `
  <h1>${course.title} (${course.totalCredits} credits) </h1>




  `
  courseName.append(div);


}

function runCreateHTML() {
  let allText = document.getElementById("courses");
  let courses = getCourses();
  allText.innerHTML = "";

  for (let course of courses) {
    createHTML(course)
    getAllStudents(course)
    getTeachers(course)
    getCourseResponsible(course)


  }
}

function getAllStudents(course) {
  let allText = document.getElementById("courses");
  let allStudents = document.createElement("div");
  allStudents.classList.add("studentboxes");
  allText.appendChild(allStudents);

  for (let student of DATABASE.students) {
    for (let studentC of student.courses) {
      if (studentC.courseId == course.courseId) {


        let div = document.createElement("div");
        div.classList.add("studentcourse");
        div.innerHTML =
          `
              <p>${student.firstName} ${student.lastName} (${studentC.passedCredits} credits) <br>
              ${studentC.started.semester} ${studentC.started.year}
              </p>
`
        if (studentC.passedCredits == course.totalCredits) {
          div.style.background = "rgb(152,251,152)";
        }

        allStudents.appendChild(div);
      }
    }

  }
  return
}

function getTeachers(course) {
  let allText = document.getElementById("courses");
  let allTeachers = document.createElement("div");
  allTeachers.classList.add("teachersbox");
  allText.appendChild(allTeachers);


  for (let i = 0; i < DATABASE.teachers.length; i++) {
    for (let j = 0; j < course.teachers.length; j++) {
      if (DATABASE.teachers[i].teacherId == course.teachers[j]) {
        let div = document.createElement("div");
        div.classList.add("allteachers");
        div.innerHTML =
          `
          <p> ${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName} (${DATABASE.teachers[i].post} )
          </p>
`
allTeachers.appendChild (div)

      }
    }
  }
  return
}

function getCourseResponsible(course) {
  let allText = document.getElementById("courses");
  let allResponsibles = document.createElement("div");
  allResponsibles.classList.add("resbonsiblebox");
  allText.appendChild( allResponsibles);


  for (let i = 0; i < DATABASE.teachers.length; i++) {
    
      if (DATABASE.teachers[i].teacherId == course.courseResponsible){
        let div = document.createElement("div");
        div.classList.add("allresponsibles");
        div.innerHTML =
          `
          <p> ${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName}  (${DATABASE.teachers[i].post} )
          </p>
`
allResponsibles.appendChild (div)

      }
    }
  
  return
}
8


keyUp();