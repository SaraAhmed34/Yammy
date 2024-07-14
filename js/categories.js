let categoryList = [];
let categoryListBasedType=[];

async function getListOfCategories() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data = await response.json();
    categoryList = data.categories;
    console.log(categoryList);
    return categoryList;

}


function displayListOfCategories() {
    let cartona = "";
    if (!categoryList || categoryList.length === 0) {
        console.error("category list is empty or undefined.");
        return;
    }
    for (let i = 0; i < categoryList.length; i++) {
        cartona += `
        <div class="col-md-3 item  category position-relative overflow-hidden" data-category-id="${categoryList[i].idCategory}" data-category-name="${categoryList[i].strCategory}">
            <img src="${categoryList[i].strCategoryThumb}" alt="${categoryList[i].strCategory}" class="w-100 rounded-2">
            <div class="text-center layer position-absolute h-100 rounded-2 d-flex flex-column align-items-center fw-bolder">
                <p class="ms-3">${categoryList[i].strCategory}</p>
                <p class="ms-3 text-center ">${categoryList[i].strCategoryDescription}</p>
            </div>
        </div>
        `;
    }
    console.log(cartona);
    document.querySelector(`.display`).innerHTML = cartona;
}

async function displayCategoryBasedType(type){
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
    const data=await response.json();
    categoryListBasedType=data.meals;
    console.log(categoryListBasedType);



    let cartona = "";
    if (!categoryListBasedType || categoryListBasedType.length === 0) {
        console.error(" empty or undefined.");
        return;
    }
    let i = 0
    while ( i < 20 && i< categoryListBasedType.length) {
        cartona += `
        <div class="col-md-3 item  meal position-relative overflow-hidden" data-meal-id="${categoryListBasedType[i].idMeal}">
            <img src="${categoryListBasedType[i].strMealThumb}" alt="${categoryListBasedType[i].strMeal}" class="w-100 rounded-2">
            <div class="text-center layer position-absolute h-100 rounded-2 d-flex align-items-center fw-bolder">
                <p class="ms-3">${categoryListBasedType[i].strMeal}</p>
            </div>
        </div>
        `;
        i++;
    }
    console.log(cartona);
    document.querySelector(`.display`).innerHTML = cartona;
}
// displayCategoryBasedType('Beef')
export {categoryList,getListOfCategories,displayListOfCategories,displayCategoryBasedType}