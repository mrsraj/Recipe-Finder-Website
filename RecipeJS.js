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
                <div class='Instructions' >${element.strInstructions}</div>
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
                <div class='Instructions'>${element.strInstructions}</div>
            `;

        newDiv.innerHTML = htmlContent;
        selectDiv.appendChild(newDiv);
    });
}


let el = document.getElementById('creatorid');
el.style.display = 'none';

function hide() {

    if (el.style.display == 'none') {
        el.style.display = "block";
    }
    else {
        el.style.display = 'none';
    }
}

