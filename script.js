const button = document.querySelector("button");



async function getQuote() {
  const response = await fetch("https://api.kanye.rest", { method: "GET" });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const quote = await response.json();
  const quoteText = document.querySelector(".quote");
  if (quoteText !== null) {
    quoteText.textContent = quote.quote;
} else {
    console.error('Error: quote element not found');
}
  console.log(quote);
}

