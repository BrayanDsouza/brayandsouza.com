let percentage = 0;
let timer; // Define a timer variable

function increasePercentageOnMouseMove() {
  // Check if timer is already set, if so, clear it
  if (timer) {
    clearTimeout(timer);
  }

  // Start a new timer on mouse move
  timer = setTimeout(() => {
    const percentageElement = document.querySelector(".percentage");

    if (percentage < 100) {
      // Generate a random number between 2 and 5
      const randomIncrement = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
      percentage += randomIncrement;

      // Ensure percentage does not exceed 100
      percentage = Math.min(percentage, 100);

      percentageElement.textContent = `${percentage}% complete`;
    }

    // Reset the timer after updating percentage
    timer = null;
  }, 10); // Adjust the delay (in milliseconds) as per your preference
}

// Attach the mousemove event listener to trigger the function
document
  .querySelector(".bsod")
  .addEventListener("mousemove", increasePercentageOnMouseMove);
