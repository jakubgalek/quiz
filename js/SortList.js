document.addEventListener("DOMContentLoaded", () => {
    let exams, i, switching, b, shouldSwitch;
    exams = document.querySelectorAll(".exam");
    switching = true;
    exams.forEach(exam => {
        switching = false;
        b = exams.querySelector('.titleOfExam');
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;

            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    });
});