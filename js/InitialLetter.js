document.addEventListener("DOMContentLoaded", () => {
    const titleOfExam = document.querySelectorAll(".titleOfExam");
    const initialLetter = document.querySelectorAll(".initialLetter");

    for (let i = 0; i < titleOfExam.length; i++) {
        initialLetter[i].innerText += titleOfExam[i].innerText.substr(0, 1);
    }
});