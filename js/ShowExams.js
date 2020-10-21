document.addEventListener("DOMContentLoaded", () => {
    const titleOfExam = document.querySelectorAll(".titleOfExam");
    const titleOfExamTest = document.querySelectorAll(".titleOfExamTest");

    function showExams() {
        for (let i = 0; i < titleOfExam.length; i++) {
            titleOfExamTest[i].style.display = "block";
        }

    }

    titleOfExam.addEventListener('click', showExams);
});