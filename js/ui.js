/// <reference types="../@types/jquery/" />

import * as meals from './meals.js';
import * as category from "./categories.js"
import * as area from "./areas.js"

const loader = $('.loader');

// Function to display all meals and attach click handlers
async function displayAllMeals() {
    loader.removeClass('d-none'); // Show loader
    await meals.getListOfMeals();
    await meals.displayListOfMeals();
    loader.addClass('d-none'); // Hide loader
    attachMealClickHandlers();
}

// Function to display meal details and handle close event
async function displayDetailsMealClose(mealid) {
    loader.removeClass('d-none'); // Show loader
    await meals.displayMealDetails(mealid);
    loader.addClass('d-none'); // Hide loader
    // Ensure only one handler is attached
    $(document).off('click', '.closeMeal').on('click', '.closeMeal', async function() {
        await displayAllMeals();
    });
}

// Function to display all categories and attach click handlers
async function displayAllCategories() {
    loader.removeClass('d-none'); // Show loader

    await category.getListOfCategories();
    await category.displayListOfCategories();
    loader.addClass('d-none'); // Hide loader
    showspecificCategory();
}



// Function to attach click event to meal elements
function attachMealClickHandlers() {
    $(document).off('click', '.meal').on('click', '.meal', async function() {
        loader.removeClass('d-none'); // Show loader
        let mealid = $(this).attr('data-meal-id');
        console.log(mealid);
        await displayDetailsMealClose(mealid);
        loader.addClass('d-none'); // Hide loader
    });
}

// Function to attach click event to category elements
function showspecificCategory() {
    $(document).off('click', '.category').on('click', '.category', async function() {
        let categoryName = $(this).attr('data-category-name');
        console.log(categoryName);
        loader.removeClass('d-none'); // Show loader
        await category.displayCategoryBasedType(categoryName);
        loader.addClass('d-none'); // Hide loader

        // Reattach the meal click handlers for meals in the specific category
        attachMealClickHandlers();
    });
}

// Function to display all areas and attach click handlers
async function displayAllAreas() {
    loader.removeClass('d-none'); // Show loader
    await area.getListOfAreas();
   await area.displayListOfAreas();
    loader.addClass('d-none'); // Hide loader
    showSpecificArea();
}

// Function to attach click event to area elements
function showSpecificArea() {
    $(document).off('click', '.area').on('click', '.area', async function() {
        let areaName = $(this).attr('data-area-name');
        console.log(areaName);
        loader.removeClass('d-none'); // Show loader
        await area.displayAreaBasedType(areaName);
        loader.addClass('d-none'); // Hide loader

        // Reattach the meal click handlers for meals in the specific area
        attachMealClickHandlers();
    });
}

// Initial setup
$(document).ready(async function() {
    await displayAllMeals(); // Initially display all meals
    // Attach click event to categories button (or any other user action element)
    $(document).on('click', '.categories', async function() {
        $('.searchSection').addClass('d-none')
        await displayAllCategories();
    });
    // Attach click event to areas button (or any other user action element)
    $(document).on('click', '.areas', async function() {
        $('.searchSection').addClass('d-none')
        await displayAllAreas();
    });
});





// //   START close Open side menu////
let menuWidth=$('.menu').innerWidth();
console.log(menuWidth)

// $('aside').css({
//     "transform":`translate(-${menuWidth}px)`
// })
// $('.menu').css("width","0px")
// Open side menu
$('.open').on('click',function(){
    $('aside').css({
        "left": `${menuWidth}px`
    })
    $('.menu').css({
         "transform":`translate(0px)`
    })
    $('.menu ul li').eq(0).show(500 , function(){
        $('.menu ul li').eq(1).show(500 , function(){
            $('.menu ul li').eq(2).show(500,function(){
                $('.menu ul li').eq(3).show(500,function(){
                    $('.menu ul li').eq(4).show(500)
                })
            })
        })
    });
    $('.close').removeClass('d-none');
    $('.open').addClass('d-none')
})

// Close side menu

$('.close').on('click',function(){
    $('aside').css({
        "left": `0px`
    })
    $('.menu').css({
         "transform":`translate(-100%)`
    })
    $('.menu ul li').eq(0).hide(500, function() {
        $('.menu ul li').eq(1).hide(500, function() {
            $('.menu ul li').eq(2).hide(500, function() {
                $('.menu ul li').eq(3).hide(500, function() {
                    $('.menu ul li').eq(4).hide(500);
                });
            });
        });
    });
    
    $('.close').addClass('d-none');
    $('.open').removeClass('d-none')
})



// // //   START close Open side menu////



