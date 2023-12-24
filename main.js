
let counter = 0;

// REFERENCE the number container
let numberContainer = document.getElementById('number-container');
let number = document.createElement('div');

// SET number div content 
number.innerHTML = counter;
number.style.color = 'orange';
number.style.fontSize = '10rem';
number.style.opacity = '0.7';
numberContainer.appendChild(number);

// Buttons references
let increaseButton = document.querySelector('.increase-btn');
let decreaseButton = document.querySelector('.decrease-btn');
let resetButton = document.querySelector('.reset-btn');


function numColourChange() {
    if (counter > 0) {
        number.style.color = 'green';
    }
    
    else if (counter < 0) {
        number.style.color = 'red';
    }

    else if (counter == 0 ){
        number.style.color = 'orange';
    }


}

function updateNumber() {
    number.innerHTML = counter;
}

// increment
function increase() {
    counter = counter +1;

    updateNumber();
    console.log('Increase button clicked!');
    console.log('Counter: ' + counter)
    numColourChange();
    
}

increaseButton.addEventListener('click', increase);

// decrement
function decrease() {

    counter = counter -1;
    updateNumber();
    console.log('Counter: ' + counter);
    numColourChange();
  
}

decreaseButton.addEventListener('click', decrease);

// reset
function reset() {
    counter = 0;
    updateNumber()
    numColourChange();
    console.log(counter);

}

resetButton.addEventListener('click',reset);








// CREATE a function called INCREMENT
    // ONCLICK add one to number variable inner HTML



// CREATE a function called RESET
    // ONCLICK change number variable inner HTML to 0



// CREATE a function called DECREMENT
    // ONCLICK decrease one to number variable inner HTML