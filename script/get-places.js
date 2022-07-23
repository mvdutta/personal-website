const destinations = [
  "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/11/02/16/02/natural-1792047_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/05/30/04/36/volcano-2355772_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/12/07/22/36/boats-5813005_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/08/13/07/20/niagara-1590345_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/02/26/00/05/arizona-4880324_960_720.jpg",
];

const names = [
  "India",
  "Thailand",
  "Costa Rica",
  "Vancouver Island, BC",
  "Niagara Falls, NY",
  "Sedona, AZ",
];

const seePlacesButton = document.getElementById("seeplaces");//The button with id="seePlaces" is retrieved from the DOM and stored in the variable seePlacesButton so can now be the shorthand for the button//

const holder = document.getElementById("holder");//The empty div with id="holder" is retrieved from the DOM and stored in the variable "holder" so holder will store the images//

const populatePlaces = () => {
  if (seePlacesButton.innerHTML === "See My Places") { //If the text of the button is "see my places"...
    seePlacesButton.innerHTML = "Go Back";//change the text to "go back"
  } else { //if the button says "go back" ...
    seePlacesButton.innerHTML = "See My Places";//change text to "see my places"
    holder.replaceChildren();//This will delete all children(nested divs) of the div "holder"
    holder.style.display = "none";//Uses JS to modify the CSS of holder and add the display: none property
    return;
  }

  for (let i = 0; i < destinations.length; i++) {//for every destination in "destination"(array with the links to location images)...
    const newCard = document.createElement("div");//create a new div and store it in the variable "newCard"
    newCard.classList.add("card");//Take the new div "newCard" and give it a class "card"

    const newImg = document.createElement("img");//create a new img element and store in the variable "newImg"
    newImg.src = destinations[i];//give newImg a source which is the i-th element of destinations
    const newText = document.createElement("div");//creates a new empty div which gets stored in the variable "newText"
    newText.classList.add("card-text");//Takes the new div called "newText" and gives it a class called "card-text"
    newText.innerHTML = names[i];//changing the text inside the div and using the i-th name from the array called "names"
    newCard.appendChild(newImg);
    newCard.appendChild(newText);//append (adds) newImg and newText to the div newCard (parent div)
    holder.appendChild(newCard);//stores the completed image and caption inside the larger div called "holder"
    holder.style.display = "flex";//modify the css of holder to display flex
  }
};

seePlacesButton.addEventListener("click", populatePlaces);//Add an event listener to seePlacesButton to listen for clicks; when clicked will run the function populatePlaces//
