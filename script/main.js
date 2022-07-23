const quotes = [
  "If I cannot do great things, I can do small things in a great way.” - Martin Luther King Jr",
  "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.” - Reba McEntire",
  "You can't cross the sea merely by standing and staring at the water.” - Rabindranath Tagore",
  'To the mind that is still, the whole universe surrenders." - Lao Tzu',
  "If you're always trying to be normal, you will never know how amazing you can be.\" - Maya Angelou",
  "It's never too late to be what you might have been.\" - George Eliot",
  'The most authentic thing about us is our capacity to create, to overcome, to endure, to transform, to love and to be greater than our suffering." - Ben Okri',
  "If you don't like something, change it. If you can't change it, change your attitude.\” — Maya Angelou",
  "It always seems impossible until it's done.\” - Nelson Mandela",
  "We must all suffer from one of two pains: the pain of discipline or the pain of regret. The difference is discpline weighs ounces while regret weighs tons.\" - Jim Rohn",
  "Every action that you take is a vote for the type of person you want to become.\" - James Clear", 

];
function getRandomQuote() {
  //selects a random quote from the array//
  const randomIndex = Math.floor(Math.random() * quotes.length); //creates a random number from 0 to the length of the array-1//
  const quote = quotes[randomIndex]; //picking the quote corresponding to randomIndex and storing it in a new variable called quote//
  document.getElementById("theQuote").innerHTML = quote; //getting the span by its id, "theQuote" and setting its text equal to the quote//
}

setInterval(getRandomQuote, 5000); //running the function every 4 seconds to show a new quote every 4 seconds//

let submitButton = document.getElementById("submit-button");//grabbing button with id "submit-button" and storing it in variable "submitButton"
function handleClick() {
  let fullName = document.getElementById("fullName").value.trim();//getting whatever value that has been entered in text box with id="FullName" and stored in variable. Trim gets rid of whitespace
  let email = document.getElementById("email").value.trim();//getting whatever value that has been entered into input box with id="email" and stored in variable. Trim gets rid of whitespace
  let comments = document.getElementById("textBox").value.trim();//getting whatever value that has been entered in text box with id="textBox" and stored in variable. Trim gets rid of whitespace
  //Now running some checks...

  if (fullName === "") {//if name has not been entered...
    swal("Please enter your first and last name");//sends this message
    return;//makes sure the program terminates at this point
  }
  if (email === "") {//if no email entered...
    swal("Please enter your email");
    return;
  }
  if (!email.includes("@")) {//if no @ entered in email...
    swal("Please enter an email in the form of example@xyz.com");
    return;
  }
  //if all tests are passed, then do the following...
  let message1 = `Hi ${fullName}, thanks for visiting!`;//new string with the name of the person
  let message3 = `and will get back to you shortly.`;//creating another string with this message
  let message2 = "";//creating an empty string if there is a comment
  if (comments !== "") {//if comment is not empty(there is a comment)...
    message2 = "I appreciate your comments, ";//message changed b/c no comment entered
  } else if (comments === "") {//if no comment, then set message 2 and 3 as empty and only message 1 will appear
    message2 = "";
    message3 = "";
  }
  document.getElementById("message1").innerHTML = message1;//getting element with id="message1" and changing its text to content stored in variable message1
  document.getElementById("message2and3").innerHTML = message2 + message3;//same as above
  document.getElementById("messageBox").classList.remove("hidden");//grabbing the div with id="messageBox" and removing class "hidden" which makes that div with message visible
  document.getElementById("contactForm").classList.add("hidden");//adds the hidden class to the form to make it disappear when submit button is clicked
//removing all entered text by setting the value of the input boxes to an empty string...
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("textBox").value = "";
}
submitButton.addEventListener("click", handleClick);//when the button is clicked, it will run the function handleClick
