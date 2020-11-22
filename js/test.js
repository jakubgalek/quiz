document.addEventListener("DOMContentLoaded", _ => {
const qNum = document.querySelector('.questionNumber');
const qTxt = document.querySelector('.questionText');
const answer = [];
function Answer(number, dom, captionDom, caption) {
    this.number = number;
    this.dom = dom;
    this.caption = caption;
    this.captionDom = captionDom;
}
const answDom = document.querySelectorAll('.answer');
const answTextDom = document.querySelectorAll('.answerText');
answDom.forEach((item, i) => {
    answer[i] = new Answer(i+1,item);
});
 
 
 
function startGame() {
 
}
});