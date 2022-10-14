let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.bn4');
let counterMinusEleme = document.querySelector('.bn5');
let counterPlusElem = document.querySelector('.bn3');
let counterPlusRand1 = document.querySelector('.bn7');
let counterPlusRand2 = document.querySelector('.bn8');
let counterPlusRand3 = document.querySelector('bn9');
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
