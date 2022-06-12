const searchFood = () => {
    const searchInput = document.getElementById('search-field');
    const searchText = searchInput.value;
    searchInput.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = (allMeals) => {
    allMeals.forEach(meal => {
        const mealId = meal.idMeal;
        const searchResultContainer = document.getElementById('search-result');
        const div = document.createElement('div');
        div.innerHTML = `
        <!-- old code -->
                <div class="col">
                    <div onclick="loadMealDetails(${mealId})" class="card h-100">
                      <a class="link-style" href="#modalContainer">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal.slice(0, 20)}</h5>
                            <p class="card-text"><span>${meal.strInstructions.slice(0, 200)}</span>
                        </div>
                      </a>
                    </div>
                </div>
        <!-- old code -->
            `;
        searchResultContainer.appendChild(div);
        // console.log(meal)
    });
}
const loadMealDetails = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = meal => {
    const modalContainer = document.getElementById('modalContainer');
    const div = document.createElement('div');
    div.classList.add('card', 'w-50', 'mx-auto', 'my-5');
    div.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal.slice(0, 20)}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Youtube</a>
            </div>
        </div>
   `;
    modalContainer.appendChild(div);
}