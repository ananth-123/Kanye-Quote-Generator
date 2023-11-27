const container = document.querySelector(".container");
const contentContainer = document.querySelector(".content-container");
const generateButton = document.querySelector(".generateButton");
const buttonContainer = document.querySelector(".button-container");

function generateButtonClicked() {
  getImage();
  getQuote();
  removeArrowBox(); 
}

function getImage() {
  console.log("image");
  let images = [
    "../images/Kw1.png",
    "../images/Kw2.png",
    "../images/Kw3.png",
    "../images/Kw4.png",
    "../images/Kw5.png",
  ];
  const randomImage = Math.floor(Math.random() * images.length);

  let image = document.querySelector(".imagekanye");
  let imagesize = document.querySelector("img");
  imagesize.style.maxHeight = "500px";
  image.src = images[randomImage];
  imagesize.style.maxWidth = "500px";
  image.alt = "Kanye West";
}

const button = document.querySelector("button");

async function getQuote() {
  const response = await fetch("https://api.kanye.rest", { method: "GET" });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const quote = await response.json();
  const quoteText = document.querySelector(".quote");
  let substring = ["I feel like me and Taylor", "eyes and explode", "marry a"];
  for (let i = 0; i < substring.length; i++)
    if (!quote.quote.includes(substring)) {
      if (quoteText !== null) {
        quoteText.textContent = quote.quote;
      } else {
        console.error("Error: quote element not found");
      }
      console.log(quote);
      return;
    } else {
      getQuote();
    }
}

function removeArrowBox() {
  const arrowBox = document.querySelector("#arrowBox");
  if (arrowBox !== null) {
    arrowBox.remove();
  }
}
