let auxA = [];let auxB = [];let auxC = [];
let dataTable = [];let pasTable = [];let uncTable = [];

const table = document.getElementById("table-data");
const pastable = document.getElementById("past-table");
const unctable = document.getElementById("up-table");

getData();

function getData(){
    fetch("https://mindhub-xj03.onrender.com/api/amazing").then(response => response.json()).then(dataAPI =>
    {   
        dataEvents = dataAPI.events;
        currentDate = dataAPI.currentDate;
        getDataTable(dataEvents);
        getPasTable(dataEvents);
    });
    
}

function getDataTable(data){
    data.sort((a,b) =>  ((b.assistance / b.capacity) * 100) - ((a.assistance / a.capacity)* 100));
    auxA.push(data[0]);
    
    data.sort((a,b) =>  (((a.assistance / a.capacity)* 100) - (b.assistance / b.capacity) * 100));
    auxB.push(data[0]);
    
    data.sort((a,b) => b.capacity - a.capacity);
    auxC.push(data[0]);
    
    viewTable(auxA, auxB, auxC, table);
}

function getPasTable(data){
    let categories = [...new Set(data.map(element => element.category))]
    
    categories.forEach(category => {
        
        let rowA = {
            category : category,
            revenues: 0,
            porAssis: 0
        }

        let rowB = {
            category : category,
            revenues: 0,
            porAssis: 0
        }
    let sRevA = 0;
    let sRevB = 0

    let dataCategories = data.filter(element => element.category == category);
    filAssis = dataCategories.filter(element => element.assistance );
    
    // console.log(filAssis);
    // console.log(filEstim);
    filAssis.forEach(element => sRevA += (element.assistance * element.price))
    // console.log(sRev);
    rowA.revenues = sRevA;
    
    sPor = 0;
    sPorB = 0;
    assis = 0;
    assisB = 0
    capac = 0;
    capacB = 0; 
    filAssis.forEach(element => assis += element.assistance );
    filAssis.forEach(element => capac += element.capacity);
    // console.log(assis);
    // console.log(capac);
    sPor = (assis / capac) * 100
    rowA.porAssis = sPor.toFixed(2);
    pasTable.push(rowA);

    
    filEstim = dataCategories.filter(element => element.estimate)
    filEstim.forEach(element => sRevB += (element.estimate * element.price))
    rowB.revenues = sRevB;

    filEstim.forEach(element => assisB += element.estimate );
    filEstim.forEach(element => capacB += element.capacity);
    sPorB = (assisB / capacB) * 100
    rowB.porAssis = sPorB.toFixed(2);
    
    uncTable.push(rowB);
});
viewPasTable(pasTable, pastable)
viewPasTable(uncTable, unctable)
}

function createPasTable(element){
    return `<tr>
    <td>${element.category}</td>
    <td>$ ${element.revenues}</td>
    <td>${element.porAssis} %</td>
</tr>`
                
}

function viewPasTable(data, container){
    html = '';
    data.forEach(element => {
            
        html += createPasTable(element)
    })
    container.innerHTML = html;
}

function createTable(elementA, elementB, elementC){
    return `
    <tr>
        <td>${elementA.name} - ${(elementA.assistance / elementA.capacity * 100)} %</td>
        <td>${elementB.name} - ${(elementB.assistance / elementB.capacity * 100)} %</td>
        <td>${elementC.name} - ${elementC.capacity}</td>
    </tr>
    `
}
function viewTable(arrA, arrB, arrC, container){
    let html ='';
    for(let i= 0; i<arrA.length;i++)
    {
        html += createTable(arrA[i], arrB[i], arrC[i])
    }

    container.innerHTML = html;
}
