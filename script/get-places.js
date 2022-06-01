const destinations = [
  "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/11/02/16/02/natural-1792047_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/05/30/04/36/volcano-2355772_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/12/07/22/36/boats-5813005_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/08/13/07/20/niagara-1590345_960_720.jpg",
  "https://cdn.pixabay.com/photo/2020/02/26/00/05/arizona-4880324_960_720.jpg",
]

const names =[ "India", "Thailand", "Costa Rica", "Vancouver Island, BC", "Niagara Falls, NY", "Sedona, AZ",]

const seePlacesButton = document.getElementById("seeplaces")

const holder = document.getElementById("holder")

const populatePlaces = () =>{
  
  if (seePlacesButton.innerHTML==="See My Places"){
    seePlacesButton.innerHTML ="Go Back"
  } else{
   seePlacesButton.innerHTML ="See My Places"
    holder.replaceChildren();
    holder.style.display="none"
    return
  }
  
 for (let i=0; i<destinations.length;i++)  {
    const newCard = document.createElement("div")
    newCard.classList.add("card") 
    
    const newImg = document.createElement("img")
    newImg.src= destinations[i]
    const newText = document.createElement("div")
    newText.classList.add("card-text") 
    newText.innerHTML = names[i]
    newCard.appendChild(newImg)
    newCard.appendChild(newText)
    holder.appendChild(newCard)
    holder.style.display="flex"
  }
}

seePlacesButton.addEventListener("click", populatePlaces)