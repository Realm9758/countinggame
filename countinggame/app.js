let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterMinusEleme = document.querySelector('.counter-minusr');
let counterPlusElem = document.querySelector('.counter-plus');

let count = 0;
updateDisplay();
counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});
counterMinusEleme.addEventListener("click",()=>{
    count-=count;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};