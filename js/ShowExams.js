document.addEventListener("DOMContentLoaded", () => {
    const titleOfExam = document.querySelectorAll(".titleOfExam");
    const titleOfExamTest = document.querySelectorAll(".titleOfExamTest");

    const showExams = i => {
        for (let j = 0; j < titleOfExamTest.length; j++) {
            titleOfExam[i].contains(titleOfExamTest).style.display = "block";
        }
    }
    for (let i = 0; i < titleOfExam.length; i++) {
        titleOfExam[i].addEventListener('click', showExams(i));
    }

});