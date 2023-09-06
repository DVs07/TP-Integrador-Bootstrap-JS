let cardData = [];
let currentDate;

const containerCard = document.getElementById("cards-container");
const containerChecbox = document.getElementById("checkboxes-container");
const inputText = document.getElementById("inputText");

getData();
viewCard(cardData, containerCard, currentDate);
viewCheckbox(cardData, containerChecbox)

containerChecbox.addEventListener("change", filterDouble);
inputText.addEventListener("input", filterDouble);

function getData(){
    cardData = data.events;
    currentDate = data.currentDate;
    //console.log(cardData);
}

function getAllCategories(arr){
    allCategories = arr.map(arr => arr.category)
    return allCategories;
}

function allCategories(data){
        let categories = getAllCategories(data);
        const categoriesU = categories.filter((category, index) => categories.indexOf(category) === index);
        return categoriesU;
}

// ########### FILTERS ############

function filterText(data, text){
    let eFiltered = data.filter(element => element.category.toLowerCase().includes(text.toLowerCase()));
    return eFiltered;
}

function filterByCatagories(array){
    let checkboxes = Array.from(document.getElementsByClassName("form-check-input"));

    let checkboxesChecked = checkboxes.filter(checkbox => checkbox.checked);

    if(checkboxesChecked.length == 0){
        return array;
    }
    else{
        let values = checkboxesChecked.map(checkbox => checkbox.value);
        let filteredArray = array.filter(element => values.includes(element.category))    

        return filteredArray;    
    }   
}

function filterDouble(){
    let arrA = filterByCatagories(cardData);
    let arrB = filterText(arrA, inputText.value);
    viewCard(arrB, containerCard, currentDate)
}

//####### Rendered ##########

function viewCard(data, container, filter){
    if(data.length == 0){
        container.innerHTML = `
        <div class="container text-center mt-4">
        <img class="img-fluid" src="https://media.giphy.com/media/ovBZ992Uv0StO/giphy.gif">
        <h2> 🚧 No se encontraron eventos!!!
        </div>
        `
        //console.log("Array vacio!!");
    }
    else{
        let cards = "";
        data.forEach(element => {
            if(filter > element.date)
            cards += createCard(element)
        })
        container.innerHTML = cards;
    }
    //console.log(cards);
}

function viewCheckbox(data,container){
    let checkboxes = "";
    let categories = allCategories(data);
    // console.log(categories);
    categories.forEach(element => {
        // console.log(element);
        checkboxes += createCheckbox(element);
    });
    container.innerHTML = checkboxes
}

function createCard(element){
    return `
    <div class="col-sm-12 col-lg-3 col-md-6 mb-3 mt-3 mb-sm-4">
        <div class="card card-2 text-bg-dark text-center" style="width: auto;" >
            <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
                <p class="card-text">
                ${element.description}
                </p>
        </div>
        <div class="card-footer text-end d-flex justify-content-lg-between justify-content-between border-top-2">
            <span>$ ${element.price}</span>
            <a href="./details.html?_id=${element._id}" class="btn btn-primary btn-primary-2">Details</a>                        
        </div>
        </div>
    </div>`
}

function createCheckbox(element){
    return `
    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="${element}" value="${element}">
                    <label class="form-check-label" for="inlineCheckbox1">${element}</label>
                </div>`
}