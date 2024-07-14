let listOfIngredients=[];
let ingredientListBasedType=[]
async function getAllIngredients(){
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const data= await response.json();
    listOfIngredients=data.meals;
    console.log(listOfIngredients)
}

function displayIngredients(){
    let cartona = "";
    if (!listOfIngredients || listOfIngredients.length === 0) {
        console.error("Meal list is empty or undefined.");
        return;
    }
    for (let i = 0; i < 21; i++) {
        let desc=listOfIngredients[i].strDescription;
        let str=desc.substring(0,200)
        cartona += `
        <div class="col-md-3 text-center text-white item ingredient  position-relative overflow-hidden" data-meal-id="${listOfIngredients[i].idIngredient}" data-meal-name="${listOfIngredients[i].strIngredient}">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <p class=" fw-bolder fs-3 ">${listOfIngredients[i].strIngredient}</p>
            <p>${str}</p>
        </div>
        `;
    }
    console.log(cartona);
    console.log(document.querySelector(`.display`));
    document.querySelector(`.display`).innerHTML = cartona;
    
    $('.ingredient').on('click',function(){
        let mealName = $(this).attr('data-meal-name');
        displayIngredientBasedType(mealName);
    })
}

async function displayIngredientBasedType(type){
    const response=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${type}`)
    const data=await response.json();
    ingredientListBasedType=data.meals;
    console.log(ingredientListBasedType);



    let cartona = "";
    if (!ingredientListBasedType || ingredientListBasedType.length === 0) {
        console.error(" empty or undefined.");
        return;
    }
    let i = 0
    while ( i < 20 && i< ingredientListBasedType.length) {
        cartona += `
        <div class="col-md-3 item  meal position-relative overflow-hidden" data-meal-id="${ingredientListBasedType[i].idMeal}">
            <img src="${ingredientListBasedType[i].strMealThumb}" alt="${ingredientListBasedType[i].strMeal}" class="w-100 rounded-2">
            <div class="text-center layer position-absolute h-100 rounded-2 d-flex align-items-center fw-bolder">
                <p class="ms-3">${ingredientListBasedType[i].strMeal}</p>
            </div>
        </div>
        `;
        i++;
    }
    console.log(cartona);
    document.querySelector(`.display`).innerHTML = cartona;
}


// displayIngredientBasedType('chicken_breast');



$('.ingredients').on('click',async function(){
    $('.searchSection').addClass('d-none');
   
    await getAllIngredients()
    console.log($('.searchSection'));
    displayIngredients()
})