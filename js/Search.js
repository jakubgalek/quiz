document.addEventListener("DOMContentLoaded", _ => {

    const search = document.querySelector(".search");
    const searching = () => {

        let input, filter, ul, li, a, i, txtValue;
        input = search;
        filter = input.value.toUpperCase();
        ul = document.querySelector("myUL");
        li = ul.querySelectorAll('.titleOfExam');

        for (i = 0; i < li.length; i++) {
            a = li[i].querySelectorAll("a")[0];
            txtValue = a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }

    search.addEventListener('keyup', searching);

});