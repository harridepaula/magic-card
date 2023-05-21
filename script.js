// quote API
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let quoteBtn = document.getElementById("quote-btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      console.log(item.content);
      console.log(item.author);
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

quoteBtn.addEventListener("click", getQuote);

// change theme
const colorBtn = document.querySelector("#color-btn");
const container = document.querySelector("body");

colorBtn.addEventListener("click", function () {
  if (container.classList.contains("dark-mode")) {
    container.classList.remove("dark-mode");
    container.classList.add("light-mode");
  } else if (container.classList.contains("light-mode")) {
    container.classList.remove("light-mode");
    container.classList.add("flower-mode");
  } else if (container.classList.contains("flower-mode")) {
    container.classList.remove("flower-mode");
    container.classList.add("rainbow-mode");
  } else if (container.classList.contains("rainbow-mode")) {
    container.classList.remove("rainbow-mode");
    container.classList.add("sky-mode");
  } else if (container.classList.contains("sky-mode")) {
    container.classList.remove("sky-mode");
    container.classList.add("glitter-mode");
  } else if (container.classList.contains("glitter-mode")) {
    container.classList.remove("glitter-mode");
    container.classList.add("purple-mode");
  } else if (container.classList.contains("purple-mode")) {
    container.classList.remove("purple-mode");
    container.classList.add("blue-mode");
  } else {
    container.classList.remove("blue-mode");
    container.classList.add("dark-mode");
  }
});


/*** SHAKE BUTTON ANIMATION ***/
// Get the "Get Magic Card" button element
const magicButton = document.getElementById('quote-btn');

// Function to add the shake class to the button
function addShakeEffect() {
    magicButton.classList.add('shake');
}

// Function to remove the shake class from the button
function removeShakeEffect() {
    magicButton.classList.remove('shake');
}

// Variable to store the timeout ID
let timeoutId;

// Function to start the timeout
function startTimeout() {
    timeoutId = setTimeout(addShakeEffect, 10000); // 10 seconds
}

// Function to clear the timeout
function clearTimeout() {
    clearTimeout(timeoutId);
}

// Event listener for button click
magicButton.addEventListener('click', () => {
    removeShakeEffect(); // Remove the shake effect when the button is clicked
    startTimeout(); // Start the timeout after the button is clicked
});

// Start the initial timeout
startTimeout();