document.addEventListener("DOMContentLoaded", () => {
    const titleOfExam = document.querySelectorAll(".titleOfExam");
    const titleOfExamTest = document.querySelectorAll(".titleOfExamTest");


    for (let i = 0; i < titleOfExam.length; i++) {
        titleOfExam[i].addEventListener('click', showExams = i => {
            for (let j = 0; j < titleOfExamTest.length; j++) {
                titleOfExamTest[j].style.display = "block";
            }
        }

        );
    }

});