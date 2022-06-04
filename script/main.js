const quotes = [
  'If I cannot do great things, I can do small things in a great way.” – Martin Luther King Jr',
  'An orange cat is cute."',
  'The earth resides in the sun."'
]
function getRandomQuote (){
  const randomIndex = Math.floor(Math.random() * quotes.length); 
  const quote =  quotes[randomIndex];
  const quoteSpan = document.getElementById("theQuote");
  quoteSpan.innerHTML= quote;
}



let submitButton = document.getElementById("submit-button");
function handleClick() {
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let textBox = document.getElementById("textBox").value;
  let message = "";
  if (fullName !== "" && email !== "" && textBox !== "") {
    message = `Hello, ${fullName}! We received your email address (${email}) and your comment (${textBox}). Thank you for your interest.`;
    alert(message);
  } else if (fullName !== "" && email !== "" && textBox === "") {
    message = `Hello, ${fullName}, we received your email address (${email}).`;
    alert(message);
  }
}

submitButton.addEventListener("click", handleClick);

