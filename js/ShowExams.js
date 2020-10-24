document.addEventListener("DOMContentLoaded", () => {
    const exam = document.querySelectorAll(".exam");
    const titleOfExam = document.querySelectorAll(".titleOfExam");
    const titleOfExamTest = document.querySelectorAll(".titleOfExamTest");

    exam.forEach((titleOfExam) => {
        titleOfExam.addEventListener("click", () => {
            titleOfExamTest.classList.toggle("active");
        });
    });
});
