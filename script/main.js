const quotes = [
  'If I cannot do great things, I can do small things in a great way.” - Martin Luther King Jr',
  'To succeed in life, you need three things: a wishbone, a backbone and a funny bone.” - Reba McEntire',
  'You can’t cross the sea merely by standing and staring at the water.” - Rabindranath Tagore',
  'To the mind that is still, the whole universe surrenders." - Lao Tzu',
  'If you\'re always trying to be normal, you will never know how amazing you can be." - Maya Angelou',
  'It\'s never too late to be what you might have been." - George Eliot',
  'The most authentic thing about us is our capacity to create, to overcome, to endure, to transform, to love and to be greater than our suffering." - Ben Okri',
  'If you don’t like something, change it. If you can’t change it, change your attitude.” — Maya Angelou',
  'It always seems impossible until it\'s done.” - Nelson Mandela'
]
function getRandomQuote (){
  const randomIndex = Math.floor(Math.random() * quotes.length); 
  const quote =  quotes[randomIndex];
  const quoteSpan = document.getElementById("theQuote");
  quoteSpan.innerHTML= quote;
}

setInterval(getRandomQuote,4000)



let submitButton = document.getElementById("submit-button");
function handleClick() {
  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let textBox = document.getElementById("textBox").value.trim();
  let message = "";
  if (fullName !== "" && email !== "" && textBox !== "") {
    message = `Hello, ${fullName}! We received your email address (${email}) and your comment (${textBox}). I'll get back to you soon!`;
  swal(message);
  } else if (fullName !== "" && email !== "" && textBox === "") {
    message = `Hello, ${fullName}, we received your email address (${email}).`;
  swal(message);
  }
}

submitButton.addEventListener("click", handleClick);

