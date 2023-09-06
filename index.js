let cardData = [];
const containerCard = document.getElementById("cards-container");
const containerChecbox = document.getElementById("checkboxes-container");
const inputText = document.getElementById("inputText");
// const searchBtn = document.getElementById('btnSearch')

getData();
viewCard(cardData, containerCard);
viewCheckbox(cardData, containerChecbox);

// containerChecbox.addEventListener("change", () =>{
//     let arrayC = filterByCatagories(cardData);
//     // console.log(arrayC);
//     let arrayS = filterText(arrayC, inputText.value);
//     viewCard(arrayS, containerCard);
// });

containerChecbox.addEventListener("change", filterDouble);
inputText.addEventListener("input", filterDouble);

// inputText.addEventListener("input",()=>{
//     let arrayC = filterByCatagories(cardData);
//     // console.log(arrayC);
//     let arrayS = filterText(arrayC, inputText.value);
//     // console.log(arrayS);
//     viewCard(arrayS, containerCard);
// });
// searchBtn.addEventListener("click", ()=>{
//     let arrayC = filterByCatagories(cardData);
//     console.log(arrayC);
//     let arrayS = search(arrayC, inputText.value);
//     viewCard(arrayS, containerCard);
// })

//######### Get data ############

function getData(){
    cardData = data.events;
    // checkboxCategory = data.events.category;   
    //console.log(cardData);
}
function getAllCategories(arr){
    const allCategories = arr.map(arr => arr.category)
    
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
    let values = checkboxesChecked.map(checkbox => checkbox.value);
    let filteredArray = array.filter(element => values.includes(element.category))    

    return filteredArray;
}

// function search(array, text){
//     return array.filter(element => element.category.toLowerCase().includes(text.toLowerCase()));
    
// }

function filterDouble(){
    let arrA = filterByCatagories(cardData);
    let arrB = filterText(arrA, inputText.value);
    viewCard(arrB, containerCard)
}

//####### Rendered ##########

function viewCard(data, container){
    if(data.length == 0){
        container.innerHTML = `
        <div class="container text-center mt-4">
        <img src="https://media.giphy.com/media/ovBZ992Uv0StO/giphy.gif">
        <h2> 🚧 No se encontraron eventos!!!
        </div>
        `
        //console.log("Array vacio!!");
    }
    else{
        let cards = "";
    data.forEach(element => {
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


//########## Create ##########
function createCard(element){
    return `
    <div class="col-sm-12 col-lg-3 col-md-6 mb-3 mt-3 mb-sm-4">
        <div class="card text-bg-dark text-center" style="width: auto;" >
            <img src="${element.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.name} </h5>
                <p class="card-text">
                ${element.description}
                </p>
        </div>
        <div class="card-footer text-end d-flex justify-content-lg-between justify-content-between border-top">
            <span>$ ${element.price}</span>
            <a href="./assets/pages/details.html?_id=${element._id}" class="btn btn-primary ">Details</a>                        
        </div>
        </div>
    </div>`
}

function createCheckbox(element){
    return `
    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="${element}" value="${element}">
                    <label class="form-check-label" for="${element}">${element}</label>
                </div>`
}