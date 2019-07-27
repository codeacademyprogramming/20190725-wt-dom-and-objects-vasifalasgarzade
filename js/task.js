"use strict";

let students = []
let inputs = document.getElementsByClassName("student-input");


let studentName = document.querySelector("#name");
let studentSurname = document.querySelector("#surname");
let studentEmail = document.querySelector("#email");
let studentBirthday = document.querySelector("#birthday");





function Student(name, surname, email, birthday) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.birthday = birthday;
};



function inalert() {
    if (document.getElementById("name").value == 0, document.getElementById("surname").value == 0, document.getElementById("email").value == 0, document.getElementById("birthday").value == 0) {
        alert("xanalari doldurduqunuzdan emin olun ..!")
    } else {
        addedStudent()

    }
}

function addedStudent() {
    let student = new Student(studentName.value, studentSurname.value, studentEmail.value, studentBirthday.value);

    students.push(student);

    let tr = document.createElement("tr");
    document.querySelector(".table-item").appendChild(tr);
    tr.innerHTML = `<td>${studentName.value}</td>
                    <td>${studentSurname.value}</td>
                    <td>${studentEmail.value}</td>
                    <td>${studentBirthday.value}</td>`

}

function filterEmail() {
    var email = document.getElementById('email');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        alert('emaili bir daha daxil et ');
        email.focus;
        return false;
    }
}