document.addEventListener("DOMContentLoaded", () => {
    const titleOfExam = document.querySelectorAll(".titleOfExam");
    const titleOfExamTest = document.querySelectorAll(".titleOfExamTest");


    for (let i = 0; i < titleOfExam.length; i++) {
        titleOfExam[i].addEventListener('click', showExams(i));
    }
    function showExams(j) {
        for (let i = 0; i < titleOfExamTest.length; i++) {
            titleOfExam[j].appendChild(titleOfExamTest[i]).style.display = "block";
        }

    }


});