
let counter = 0;


// CREATE a number variable by dynamically creating a div under number-container

// REFERENCE the number container
let numberContainer = document.getElementById('number-container');
console.log(numberContainer)

// CREATE new div dynamically called number
let number = document.createElement('div');
console.log(number)
// SET number div content 
number.innerHTML = counter;

// APPEND new number div to the number container referenced earlier
numberContainer.appendChild(number);

// Buttons references
let increaseButton = document.querySelector('.increase-btn');
console.log(increaseButton);


function increment() {
    counter = counter +1;
    number.innerHTML = counter;
    console.log('Increase button clicked!');
    console.log('Counter: ' + counter)
    
}

increaseButton.addEventListener('click', increment);

function decrement() {
    counter = counter -1;
    number.innerHTML = counter;
    console.log('Counter: ' + counter);
}








// CREATE a function called INCREMENT
    // ONCLICK add one to number variable inner HTML



// CREATE a function called RESET
    // ONCLICK change number variable inner HTML to 0



// CREATE a function called DECREMENT
    // ONCLICK decrease one to number variable inner HTML