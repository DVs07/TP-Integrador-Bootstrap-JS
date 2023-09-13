let parametros = new URLSearchParams(window.location.search);
let id = parametros.get("_id");
const cardsContainer = document.getElementById("cardsContainer")

let dataEvents =[];

fetch("https://mindhub-xj03.onrender.com/api/amazing").then(response => response.json()).then(dataAPI =>
    {   
        dataEvents = dataAPI.events;
        
        let card = findCard(id);

        viewCard(card, cardsContainer);
    });
    
function findCard(id){
    return dataEvents.find(element => element._id == id);
}

function createCard(element){
    return `
    <div class="card mb-3" style="max-width: 500px;height: 400px;">
    <div class="card-body">
    <h5 class="card-title">${element.name}</h5>
                        <span class="card-text row">Category: ${element.category}</span>
                        <span class="card-text row">Date: ${element.date}</span>
                        <span class="card-text row">Description: ${element.description}</span>
                        <span class="card-text row">Place: ${element.place}</span>
                        <span class="card-text row" >Price: $${element.price}</span>
                        <span class="card-text row">Capacity: ${element.capacity}</span>
    </div>
    <img src="${element.image}" class="card-img-bottom" alt="...">
    </div>
    `
}

function viewCard(element, container){
    container.innerHTML = createCard(element);
}