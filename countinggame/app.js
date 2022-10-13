let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterMinusEleme = document.querySelector('.counter-minusr');
let counterPlusElem = document.querySelector('.counter-plus');
let counterPlusRand1 = document.querySelector('.counter-rand1');
let counterPlusRand2 = document.querySelector('.counter-rand2');
let counterPlusRand3 = document.querySelector('.counter-rand3');
let counterPlusRand4 = document.querySelector('.counter-rand4');

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
counterPlusRand1.addEventListener("click",()=>{
    var y = Math.floor(Math.random() * 10 + 1);
    count+=y;
    updateDisplay();
});
counterPlusRand2.addEventListener("click",()=>{
    var y = Math.floor(Math.random() * 100 + 1);
    count+=y;
    updateDisplay();
});
counterPlusRand3.addEventListener("click",()=>{
    var y = Math.floor(Math.random() * 1000 + 1);
    count+=y;
    updateDisplay();
});
counterPlusRand4.addEventListener("click",()=>{
  var max = document.getElementById('guessFieldMax').value;
  var min = document.getElementById('guessFieldMin').value;
  var i = Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  count+=i;
  updateDisplay();
});



function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};
