let parametros = new URLSearchParams(window.location.search);
let id = parametros.get("_id");
const cardsContainer = document.getElementById("cardsContainer")

let cardData = data.events;
let card = findCard(id);

// console.log(card);
viewCard(card, cardsContainer);



function findCard(id){
    return cardData.find(element => element._id == id);
}

function createCard(element){
    return `
    <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-6">
                    <img src="${element.image}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-6">
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <span class="card-text row">Date: ${element.date}</span>
                        <span class="card-text row">Category: ${element.category}</span>
                        <span class="card-text row" >Price: $${element.price}</span>
                        
                    </div>
                </div>
            </div>
    </div>
    `
}

function viewCard(element, container){
    container.innerHTML = createCard(element);
}