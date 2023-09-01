let cardData = [];
let currentDate;
const containerCard = document.getElementById("cards-container");

getData();
viewCard(cardData, containerCard, currentDate);

function getData(){
    cardData = data.events;
    currentDate = data.currentDate;
    //console.log(cardData);
}

function viewCard(data, container, filter){
    let cards = "";
    for(let i=0; i < data.length; i++){
        if(filter > data[i].date){
            //console.log(data[i].date);
            cards += createCard(data[i])
        }
    }
    container.innerHTML = cards;
    //console.log(cards);
}

function viewCheckbox(container){
    let checkboxes = "";
    for(let i=0; i < 8; i++){
        checkboxes += createCheckbox(i) 
    }
    container.innerHTML = checkboxes
}

function createCard(objeto){
    return `
    <div class="col-sm-12 col-lg-3 col-md-6 mb-3 mt-3 mb-sm-4">
        <div class="card card-2 text-bg-dark text-center" style="width: auto;" >
            <img src="${objeto.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${objeto.name}</h5>
                <p class="card-text">
                ${objeto.description}
                </p>
        </div>
        <div class="card-footer text-end d-flex justify-content-lg-between justify-content-between border-top-2">
            <span>$ ${objeto.price}</span>
            <a href="./details.html" class="btn btn-primary btn-primary-2">Details</a>                        
        </div>
        </div>
    </div>`
}

function createCheckbox(){
    return `
    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                    <label class="form-check-label" for="inlineCheckbox1">Category</label>
                </div>`
}