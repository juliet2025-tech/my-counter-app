let count = 0;
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");


// Step 3: Make functions for each button
function increase() {
  count++;
  countDisplay.textContent = count;
}

function decrease() {
  count--;
  countDisplay.textContent = count;
}

function reset() {
  count = 0;
  countDisplay.textContent = count;
}

// Step 4: Connect buttons to functions
increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);



