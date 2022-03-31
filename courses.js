"use strict";

let input = document.getElementById("searchbox");

function getCourses() {
  let input = document.getElementById("searchbox");
  let courses = DATABASE.courses
    .filter((course) => course.title.toLowerCase().includes(input.value.toLowerCase()))
    .map(course => course)
    .sort(function (a, b) {
      if (a.title < b.title) {
        return -1
      }
      if (a.title > b.title) {
        return 1
      }
      return 0
    })






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

  if (input.value == 0) {
    courseName.innerHTML = "";

}


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
  let students = document.createElement("div");
  students.innerHTML =
    `
  <h2> Students: </h2>

`
  allStudents.appendChild(students);


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
          div.style.background = "rgb(135,206,235)";
        }

        allStudents.appendChild(div);

        if (input.value == 0) {
          allText.innerHTML = "";
      
      }
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
  let teachers = document.createElement("div");
  teachers.innerHTML =
    `
  <h2> Teachers: </h2>

`
  allTeachers.appendChild(teachers)


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
        allTeachers.appendChild(div)

        if (input.value == 0) {
          allText.innerHTML = "";
      
      }

      }
    }
  }
  return
}

function getCourseResponsible(course) {
  let allText = document.getElementById("courses");
  let allResponsibles = document.createElement("div");
  allResponsibles.classList.add("resbonsiblebox");
  allText.appendChild(allResponsibles);
  let responsibles = document.createElement("div");
  responsibles.innerHTML =
    `
  <h2> Course Responsible:</h2>

`
  allResponsibles.appendChild(responsibles);



  for (let i = 0; i < DATABASE.teachers.length; i++) {

    if (DATABASE.teachers[i].teacherId == course.courseResponsible) {
      let div = document.createElement("div");
      div.classList.add("allresponsibles");
      div.innerHTML =
        `

          <p> ${DATABASE.teachers[i].firstName} ${DATABASE.teachers[i].lastName}  (${DATABASE.teachers[i].post} )
          </p>
`
      allResponsibles.appendChild(div)

      if (input.value == 0) {
        allText.innerHTML = "";
    
    }

    }
  }

  return
}
8


keyUp();