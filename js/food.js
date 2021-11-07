let foodId = sessionStorage.getItem('foodId');

console.log(foodId);

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.meals[0]);
        document.getElementById('food_heading').innerText = data.meals[0].strMeal;
    })