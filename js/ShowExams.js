document.addEventListener("DOMContentLoaded", () => {
    let exam = document.querySelectorAll(".exam");
    let titleOfExam = document.querySelectorAll(".titleOfExam");
    let titleOfExamTest = document.querySelectorAll(".titleOfExamTest");



    if (exam.hasChildNodes()) {
        let children = titleOfExam.childNodes;
        for (let i = 0; i < children.length; i++) {
            titleOfExam[i].addEventListener("click", () => {
                titleOfExamTest[i].className.toggle("active");
            });

        };
    };

});