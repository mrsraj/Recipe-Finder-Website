async function searchMeal() {

    let mealspage = document.getElementById("meal-container");
    // mealspage.innerHTML = '';

    const searchInput = document.getElementById("search").value;

     

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);

    let Data = await response.json();
    console.log(Data);
    console.log(Data.meals);
    mealspage.textContent="Data.meals";

   

    // finalData.meals.forEach((Data) => {
    //     console.log(Data.strMeal);

    //     let data1 = document.createElement('p');
    //     data1.innerHTML = Data.strMeal;
    //     mealspage.appendChild('data1')

    // });
    

    // if (finalData.meals) {
    //     data.forEach(meal => {
    //         const mealDiv = document.createElement('div');
    //         mealDiv.classList.add('meal');
    //         mealDiv.innerHTML = `
    //     <h3>${meal.strMeaL}</h3>
    //     <img src = "${meal.strMeaLThumb}">
    //     <p>${meal.strInstructions}</p>

    //     `;
    //         div.appendChild(mealDiv);
    //     })
    // }
    // else {
    //     div.innerHTML = '<p>No meals found. please try again.</p>';
    // }

}














// .then(response => response.json())
// .then(data =>{
//     console.log(data);

//    if(data.meals)
//    {
//     data.forEach(meal => {
//         const mealDiv = document.createElement('div');
//         mealDiv.classList.add('meal');
//         mealDiv.innerHTML = `
//         <h3>${meal.strMeaL}</h3>
//         <img src = "${meal.strMeaLThumb}">
//         <p>${meal.strInstructions}</p>

//         `;
//         div.appendChild(mealDiv);
//
//    }
//    else{
//        div.innerHTML='<p>No meals found. please try again.</p>';
//    }
// })