let areasList = [];
let areaListBasedType=[];

async function getListOfAreas() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const data = await response.json();
    areasList = data.meals
    ;
    console.log(areasList);
    console.log(areasList[0]);
    return areasList;

}
getListOfAreas()

function displayListOfAreas() {
    let cartona = "";
    if (!areasList || areasList.length === 0) {
        console.error("area list is empty or undefined.");
        return;
    }
    for (let i = 0; i < areasList.length; i++) {
        cartona += `
        <div class="col-md-3 item  area position-relative overflow-hidden text-white"  data-area-name="${areasList[i].strArea}">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
            <p>${areasList[i].strArea}</p>
        </div>
        `;
    }
    console.log(cartona);
    document.querySelector(`.display`).innerHTML = cartona;
}

async function displayAreaBasedType(type){
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`)
    const data=await response.json();
    areaListBasedType=data.meals;
    console.log(areaListBasedType);



    let cartona = "";
    if (!areaListBasedType || areaListBasedType.length === 0) {
        console.error(" empty or undefined.");
        return;
    }
    let i = 0
    while ( i < 20 && i< areaListBasedType.length) {
        cartona += `
        <div class="col-md-3 item  meal position-relative overflow-hidden" data-meal-id="${areaListBasedType[i].idMeal}">
            <img src="${areaListBasedType[i].strMealThumb}" alt="${areaListBasedType[i].strMeal}" class="w-100 rounded-2">
            <div class="text-center layer position-absolute h-100 rounded-2 d-flex align-items-center fw-bolder">
                <p class="ms-3">${areaListBasedType[i].strMeal}</p>
            </div>
        </div>
        `;
        i++;
    }
    console.log(cartona);
    document.querySelector(`.display`).innerHTML = cartona;
}
// displayAreaBasedType('Canadian')
export {areasList,areaListBasedType,getListOfAreas,displayAreaBasedType,displayListOfAreas}