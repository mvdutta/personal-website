// $("#submit-button").click(function(){
//   let fullName = document.getElementById("fullName").value;
//   // let fullName = ("#fullName").val();
//   // let email = ('#email').val();
//   // let textBox = ('#textBox').val();
//  alert(fullName);
//  console.log(fullName)
//   // alert("Hello!")
// });
let submitButton = document.getElementById("submit-button")
function handleClick() {
  let fullName = document.getElementById("fullName").value;
  let email = document.getElementById("email").value;
  let textBox = document.getElementById("textBox").value;
  const message = `Hello, ${fullName}, we received your email address (${email}) and your comment (${textBox}).`
  alert(message);
}

submitButton.addEventListener('click',handleClick);