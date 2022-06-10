const quotes = [
  "If I cannot do great things, I can do small things in a great way.” - Martin Luther King Jr",
  "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.” - Reba McEntire",
  "You can’t cross the sea merely by standing and staring at the water.” - Rabindranath Tagore",
  'To the mind that is still, the whole universe surrenders." - Lao Tzu',
  "If you're always trying to be normal, you will never know how amazing you can be.\" - Maya Angelou",
  "It's never too late to be what you might have been.\" - George Eliot",
  'The most authentic thing about us is our capacity to create, to overcome, to endure, to transform, to love and to be greater than our suffering." - Ben Okri',
  "If you don’t like something, change it. If you can’t change it, change your attitude.” — Maya Angelou",
  "It always seems impossible until it's done.” - Nelson Mandela",
];
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteSpan = document.getElementById("theQuote");
  quoteSpan.innerHTML = quote;
}

setInterval(getRandomQuote, 4000);

let submitButton = document.getElementById("submit-button");
function handleClick() {
  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let comments = document.getElementById("textBox").value.trim();
  if (fullName === ""){
    swal("Please enter your first and last name")
    return
  }
  if (email === ""){
    swal("Please enter your email")
    return
  }
  if (!email.includes("@") ){
    swal("Please enter an email in the form of example@xyz.com")
    return
  }
  let message1 = `Hi ${fullName}!`
  let message3 = `I will get back to you at ${email} shortly.`
  let message2 = ""
  if (comments !== "") {
    message2 = "Thanks for your comments! "
  }
  document.getElementById("message1").innerHTML=message1
  document.getElementById("message2and3").innerHTML=message2+message3
  document.getElementById("messageBox").classList.remove("hidden")
  document.getElementById("contactForm").classList.add("hidden")
  
}
submitButton.addEventListener("click", handleClick);
