// Initialize the variable.
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let counterValue = document.querySelector("#counterValue");
let counter = 0;
// Increment Function
increment.addEventListener('click', () =>{
    if (counter < 50){
        counter++;
        counterValue.innerText = counter;
    }
})
// Decrement Function
decrement.addEventListener('click', ()=>{
    if (counter > 0){
        counter--;
        counterValue.innerText = counter;
    }

})

