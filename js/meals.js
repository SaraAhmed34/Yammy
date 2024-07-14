// get list of meals

let mealList = [];
let meal;
async function getListOfMeals() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const data = await response.json();
    mealList = data.meals;
    console.log(mealList);
    return mealList;
}

function displayListOfMeals() {
    let cartona = "";
    if (!mealList || mealList.length === 0) {
        console.error("Meal list is empty or undefined.");
        return;
    }
    for (let i = 0; i < mealList.length; i++) {
        cartona += `
        <div class="col-md-3 item  meal position-relative overflow-hidden  " data-meal-id="${mealList[i].idMeal}">
            <img src="${mealList[i].strMealThumb}" alt="${mealList[i].strMeal}" class="w-100 rounded-2 overflow-hidden ">
            <div class="text-center layer position-absolute h-100 rounded-2 d-flex align-items-center fw-bolder">
                <p class="ms-3">${mealList[i].strMeal}</p>
            </div>
        </div>
        `;
    }
    console.log(cartona);
    document.querySelector(`.display`).innerHTML = cartona;
}

async function displayMealDetails(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    meal = data.meals;
    console.log(data.meals);
    console.log(meal);
    console.log(meal[0].strMealThumb);
    let cartona="";
    cartona=`
      
           <div class="col-md-4">
           
            <img src="${meal[0].strMealThumb}" alt="" class="w-100 rounded-2">
            <h3 class="text-white">${meal[0].strMeal}</h3>
           </div>
           <div class="col-md-8 text-white position-relative closeMeal">
           <i class="fa-solid fa-xmark text-white position-absolute end-0 "></i>
            <h4>Instructions</h4>
            <p>${meal[0].strInstructions}</p>
            <p class="fw-bolder fs-4">Area : ${meal[0].strArea}</p>
            <p class="fw-bolder fs-4">Category : ${meal[0].strCategory}</p>
            <p class="fw-bolder fs-4">Recipes :</p>
            <div class="row" id="mealRecipes">
                <div class="col-4 col-md-2 ">
                    <p class="fw-bolder bg-body-tertiary text-black text-center rounded-2 ">sdfsdf</p>
                </div>
                <div class="col-4 col-md-2 ">
                    <p class="fw-bolder bg-body-tertiary text-black text-center rounded-2 ">sdfsdf</p>
                </div>

            </div>
            <p class="fw-bolder fs-4">tags:</p>
            <div class="row " id="mealTags">
                <div class="col-4 col-md-2  text-black ">
                    <p class="fw-bolder bg-body-tertiary text-center rounded-2 ">sdfsdf</p>
                </div>
                

            </div>
            <div class="d-flex mt-3">
                <div class=" text-black text-center rounded-2 ">
                   
                    <a href="${meal[0].strSource}" class="fw-bolder btn btn-success">Source</a>
                </div>
                
                <div class=" text-black text-center rounded-2 mx-2">
                    <a href="${meal[0].strYoutube}" class="fw-bolder btn btn-danger">Youtube</a>
                </div>
            </div>
           </div>
           
    `
    document.querySelector(`.display`).innerHTML = cartona;

    let recipesHtml = "";
  let i = 1;
  while (meal[0][`strIngredient${i}`]) {
    let ingredient = meal[0][`strIngredient${i}`];
    let measure = meal[0][`strMeasure${i}`];
    recipesHtml += `
     <div class="col-4 col-md-2 ">
                   <li class="alert alert-info m-2 p-1 list-unstyled">${measure} ${ingredient}</li>
                </div>
    
    `;
    i++;
  }
  document.querySelector(`#mealRecipes`).innerHTML=recipesHtml;



  let tagsHtml = "";
  if (meal[0].strTags && meal[0].strTags.trim() !== "") {
    meal[0].strTags.split(",").forEach((tag) => {
      tagsHtml += `
      <div class="col-4 col-md-2 ">
                  <li class="alert alert-danger m-2 p-1 list-unstyled">${tag.trim()}</li>
                </div>
      `;
    });
  }
  
  document.querySelector(`#mealTags`).innerHTML=tagsHtml;
}
// displayMealDetails(52777);
export { mealList, getListOfMeals, displayListOfMeals,displayMealDetails,meal};