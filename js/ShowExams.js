document.addEventListener("DOMContentLoaded", () => {
    const exams = document.querySelectorAll(".exam");

    exams.forEach(exam => {
        const title = document.querySelector('.titleOfExam')
        const test = document.querySelector('.titleOfExamTest')
        title.addEventListener("click", () => {
            title.classList.toggle('active')
        });
    });
    exams.forEach(exam => {
        const title = document.querySelector('.titleOfExam')
        const test = document.querySelector('.titleOfExamTest')
        title.addEventListener("click", () => {
            title.classList.toggle('active')
        });
    });
});