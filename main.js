let places = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId, textToPrint);
  selectedDiv.innerHTML = textToPrint;
}

const domStringBuilder = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="place-card w-30 m-1 rounded bg-white text-center">`;
    domString += `<h3 class="bg-info text-light rounded-top">${item.city}</h3>`;
    domString += `<img src=${item.image} class="img-fluid card-image" alt="Responsive image">`
    domString += `<p>${item.country}</p>`
    domString += `<p>${item.resturant}</p>`
    domString += `</div>`
  })
  printToDom('places-container', domString);
}

function executeAfterLoad(){
  console.log('dope');
  const data = JSON.parse(this.responseText);
  places = data.places;
  domStringBuilder(places);
}

function executeIfError(){
  console.error('whack')
}

const getPlacesData = () => {
  const dataRequest = new XMLHttpRequest();
  dataRequest.addEventListener('load', executeAfterLoad);
  dataRequest.addEventListener('error', executeIfError);
  dataRequest.open('GET', './db/places.json');
  dataRequest.send();
  console.log(dataRequest);
}

const init = () => {
  getPlacesData();
}

init();