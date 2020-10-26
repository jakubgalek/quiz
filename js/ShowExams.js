document.addEventListener("DOMContentLoaded", () => {
    const exams = document.querySelectorAll(".exam");
    exams.forEach(exam => {
        const title = exam.querySelector('.titleOfExam')
        const testList = exam.querySelector('.exam-tests-list')

        title.addEventListener("click", () => {
            testList.classList.toggle('active')
        });
    });
    title.addEventListener("click", () => {
        testList.classList.toggle('active')
    });
});