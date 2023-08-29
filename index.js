let cardData = [];
const containerCard = document.getElementById("cards-container");


getData();
viewCard(cardData, containerCard);

function getData(){
    cardData = data.events;
    //console.log(cardData);
}


function viewCard(data, container){
    let cards = "";
    for(element of data){
        cards += createCard(element)
    }
    container.innerHTML = cards;
    //console.log(cards);
}


function createCard(objeto){
    return `
    <div  class="col-sm-12 col-lg-3 col-md-6 mb-3 mt-3 mb-sm-4 col-xl-3">    
    <div class="card text-bg-dark text-center" style="width: auto;" >
    <img src="${objeto.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${objeto.name}</h5>
        <p class="card-text">
            ${objeto.description}
        </p>
    </div>
    <div class="card-footer text-end d-flex justify-content-lg-between justify-content-between border-top">
        <span>$ ${objeto.price}</span>
        <a href="./assets/pages/details.html" class="btn btn-primary ">Details</a>                        
    </div>
    </div>
    </div>`
}