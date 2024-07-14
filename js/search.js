import * as meals from './meals.js';

let mealslistLetters=[]
let mealslistName=[]
async function getmealbyletter(letter){
    const response= await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    const data= await response.json();
    mealslistLetters=data.meals;
    console.log(mealslistLetters);
    return mealslistLetters;
}



function  displaymealByLetter(){
    let cartona = "";
    if (!mealslistLetters || mealslistLetters.length === 0) {
        console.error("Meal list is empty or undefined.");
        return;
    }
    for (let i = 0; i < mealslistLetters.length; i++) {
        cartona += `
        <div class="col-md-3 item  meal position-relative overflow-hidden" data-meal-id="${mealslistLetters[i].idMeal}">
            <img src="${mealslistLetters[i].strMealThumb}" alt="${mealslistLetters[i].strMeal}" class="w-100 rounded-2">
            <div class="text-center layer position-absolute h-100 rounded-2 d-flex align-items-center fw-bolder">
                <p class="ms-3">${mealslistLetters[i].strMeal}</p>
            </div>
        </div>
        `;
    }
    console.log(cartona);
    console.log(document.querySelector(`.display`));
    document.querySelector(`.display`).innerHTML = cartona;

}



async function getmealbyname(name){
    const response= await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    const data= await response.json();
    mealslistName=data.meals;
    console.log(mealslistLetters);
    return mealslistLetters;
}



function  displaymealByName(){
    let cartona = "";
    if (!mealslistName || mealslistName.length === 0) {
        console.error("Meal list is empty or undefined.");
        return;
    }

    for (let i = 0; i < mealslistName.length; i++) {
        cartona += `
        <div class="col-md-3 item  meal position-relative overflow-hidden" data-meal-id="${mealslistName[i].idMeal}">
            <img src="${mealslistName[i].strMealThumb}" alt="${mealslistName[i].strMeal}" class="w-100 rounded-2">
            <div class="text-center layer position-absolute h-100 rounded-2 d-flex align-items-center fw-bolder">
                <p class="ms-3">${mealslistName[i].strMeal}</p>
            </div>
        </div>
        `;
    }
    console.log(cartona);
    console.log(document.querySelector(`.display`));
    document.querySelector(`.display`).innerHTML = cartona;
        $('.meal').on('click',function(){
            let mealid = $(this).attr('data-meal-id');
            meals.displayMealDetails(mealid);
        })
}

$('.saerch').on('click',function(){
    $('.searchSection').removeClass('d-none')
    $('.display').html(' ')
})

$('#searchByName').on('input', async function () {
    const searchValue = $('#searchByName').val().trim(); // Trim any leading or trailing whitespace

    if (searchValue === '') {
        $('.display').html(' ')
        return;
    }

    console.log(searchValue);
    await getmealbyname(searchValue);
    displaymealByName();
});



$('#searchByLetter').on('input', async function () {
    const searchValue = $('#searchByLetter').val().trim(); // Trim any leading or trailing whitespace

    if (searchValue === '') {
        $('.display').html(' ')
        return;
    }

    console.log(searchValue);
    await getmealbyletter(searchValue);
    displaymealByLetter();
});



