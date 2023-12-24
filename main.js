
let counter = 0;

// REFERENCE the number container
let numberContainer = document.getElementById('number-container');
let number = document.createElement('div');

// SET number div content 
number.innerHTML = counter;
number.style.color = 'orange';
number.style.fontSize = '10rem';
numberContainer.appendChild(number);

// Buttons references
let increaseButton = document.querySelector('.increase-btn');
let decreaseButton = document.querySelector('.decrease-btn');
let resetButton = document.querySelector('.reset-btn');


// increments by 1
function increase() {
    counter = counter +1;

    number.innerHTML = counter;
    console.log('Increase button clicked!');
    console.log('Counter: ' + counter)

    if (counter > 0) {
        number.style.color = 'green';
    }

    else if (counter == 0 ){
        number.style.color = 'orange';
    }

    
}

increaseButton.addEventListener('click', increase);

// decrements by 1
function decrease() {

    counter = counter -1;
    number.innerHTML = counter;
    console.log('Counter: ' + counter);
   
     if (counter < 0 ){
        number.style.color = 'red';
    }

    else if (counter == 0) {
        number.style.color = 'orange';
    };

    
}

decreaseButton.addEventListener('click', decrease);

function reset() {
    
    counter = 0;
    number.innerHTML = counter;
    number.style.color = 'orange';
    console.log(counter);

}

resetButton.addEventListener('click',reset);








// CREATE a function called INCREMENT
    // ONCLICK add one to number variable inner HTML



// CREATE a function called RESET
    // ONCLICK change number variable inner HTML to 0



// CREATE a function called DECREMENT
    // ONCLICK decrease one to number variable inner HTML