async function defaultFun() {
    let selectDiv = document.getElementById('result');
    selectDiv.textContent = "";
    const searchInput = document.getElementById("search").value;
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
    let data = await response.json();

    data.meals.forEach((element) => {
        let newDiv = document.createElement('div');
        newDiv.className = 'cardAll';

        let htmlContent = `
                <h2>${element.strMeal}</h2>
                <img src="${element.strMealThumb}" alt="${element.strMeal}">
                <p>${element.strInstructions}</p>
            `;

        newDiv.innerHTML = htmlContent;
        selectDiv.appendChild(newDiv);
    });
}

defaultFun();

async function searchMeal() {
    let selectDiv = document.getElementById('result');
    selectDiv.textContent = "";
    const searchInput = document.getElementById("search").value;
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
    let data = await response.json();

    data.meals.forEach((element) => {
        let newDiv = document.createElement('div');
        newDiv.className = 'cardAll';

        let htmlContent = `
                <h2>${element.strMeal}</h2>
                <img src="${element.strMealThumb}" alt="${element.strMeal}">
                <p>${element.strInstructions}</p>
            `;

        newDiv.innerHTML = htmlContent;
        selectDiv.appendChild(newDiv);
    });
}

