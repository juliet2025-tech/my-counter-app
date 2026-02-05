
let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateColor() {
  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "blue";
  } else {
    countDisplay.style.color = "black";
  }
}

function increase() {
  count++;
  countDisplay.textContent = count;
  updateColor();
}

function decrease() {
    count--;
    countDisplay.textContent = count;
    updateColor();
  }


function reset() {
  count = 0;
  countDisplay.textContent = count;
  updateColor();
}

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
countDisplay.style.color = "red";
