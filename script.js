// quote API
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

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

btn.addEventListener("click", getQuote);

// change theme
const colorBtn = document.querySelector("#color-btn");
const container = document.querySelector(".container");

colorBtn.addEventListener("click", function () {
  if (container.classList.contains("dark-mode")) {
    container.classList.remove("dark-mode");
    container.classList.add("light-mode");
  } else if (container.classList.contains("light-mode")) {
    container.classList.remove("light-mode");
    container.classList.add("flower-mode");
  } else if (container.classList.contains("flower-mode")) {
    container.classList.remove("flower-mode");
    container.classList.add("sky-mode");
  } else if (container.classList.contains("sky-mode")) {
    container.classList.remove("sky-mode");
    container.classList.add("star-mode");
  } else if (container.classList.contains("star-mode")) {
    container.classList.remove("star-mode");
    container.classList.add("purple-mode");
  } else if (container.classList.contains("purple-mode")) {
    container.classList.remove("purple-mode");
    container.classList.add("blue-mode");
  } else {
    container.classList.remove("blue-mode");
    container.classList.add("dark-mode");
  }
});