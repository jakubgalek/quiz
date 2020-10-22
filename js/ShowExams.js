document.addEventListener("DOMContentLoaded", () => {
    const Exam = document.querySelectorAll(".exam");
    const titleOfExamTest = document.querySelectorAll(".titleOfExamTest");


    for (let i = 0; i < Exam.length; i++) {
        Exam[i].addEventListener('click', showExams = i => {
            for (let j = 0; j < titleOfExamTest.length; j++) {
                titleOfExamTest[j].style.display = "block";
            }
        });
    }

});