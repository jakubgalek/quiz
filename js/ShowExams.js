document.addEventListener("DOMContentLoaded", () => {
    const Exam = document.querySelectorAll(".exam");
    const titlesOfExamTest = document.querySelectorAll(".titleOfExamTest");


    for (let i = 0; i < Exam.length; i++) {
        Exam[i].addEventListener('click', showExams = i => {
            for (let j = 0; j < titlesOfExamTest.length; j++) {
                titlesOfExamTest[j].style.display = "block";
            }
        });
    }

});