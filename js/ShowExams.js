document.addEventListener("DOMContentLoaded", () => {
    const titleOfExam = document.querySelectorAll(".titleOfExam");
    const titleOfExamTest = document.querySelectorAll(".titleOfExamTest");


    const showExams = i => {
        titleOfExam[i].appendChild(titleOfExamTest).style.display = "block";
    }

    for (let i = 0; i < titleOfExam.length; i++) {
        titleOfExam[i].addEventListener('click', showExams(i));
    }


});