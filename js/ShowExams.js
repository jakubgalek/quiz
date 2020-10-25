document.addEventListener("DOMContentLoaded", () => {
    let exam = document.querySelectorAll(".exam");
    let titleOfExam = document.querySelectorAll(".titleOfExam");
    let titleOfExamTest = document.querySelectorAll(".titleOfExamTest");

    titleOfExam.addEventListener("click", () => {

        if (exam.hasChildNodes()) {
            let children = titleOfExam.childNodes;
            for (let i = 0; i < children.length; i++) {
                titleOfExamTest[i].className.toggle("active");
            };
        };
    });

});