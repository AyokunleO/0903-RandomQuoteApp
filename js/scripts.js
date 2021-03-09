

const quotes = [
    ["The secret of getting ahead is getting started.", "Mark Twain", "#7CA5B8"],
    ["I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.", "Michael Jordan", "#A9DBB8"],
    ["Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve", "Mary Kay Ash", "#D4B483"],
    ["The best time to plant a tree was 20 years ago. The second best time is now.", "Chinese Proverb", "#C1666B"],
    ["Only the paranoid survive.", "Andy Grove ", "#2E4052"]
];

// Get all the necessary Elements

const pageBg = document.querySelector(".page-bg");
const quoteText = document.querySelector("#quoteText");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getQuote);

// setInterval(getQuote, 1000);
// Generate a random number
function getQuote() {
    let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
// Get random quote values baes on the random number generated
    let randomQuote = quotes[randomQuoteIndex][0];
    let randomAuthor = quotes[randomQuoteIndex][1];
    let randomColor = quotes[randomQuoteIndex][2];

// Pass Our new text content to each elements
pageBg.style.backgroundColor = randomColor;
quoteText.textContent = randomQuote;
author.textContent = randomAuthor;
btn.style.backgroundColor = randomColor;
}

