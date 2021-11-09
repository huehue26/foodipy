document.getElementById("search-submit").addEventListener('click', () => {
    let search_data = document.getElementById("search-input").value;
    sessionStorage.setItem('search_input', search_data);
})

const food_search = sessionStorage.getItem('search_input')

// by food name
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food_search}`)
    .then(res => res.json())
    .then(data => {
        const recipe = data.meals;
        console.log(recipe);
        recipe.forEach(element => {
            document.getElementById('content').innerHTML +=
                `
            <div class="skj_cards">
			<img src="${element.strMealThumb}" alt="">
			<div class="skj_discription">
				<a href="./food.html">
					<div class="skj_content">
						<h1>${element.strMeal}</h1>
						<div class="skj_symbol">
							<i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
							<i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
						</div>
						<div style="display:none;">${element.idMeal}</div>
					</div>
				</a>
			</div>
		</div>
        `
        })
        $(".skj_content").click(function (e) {
			current_food_id = e.target.lastElementChild.innerText;
			sessionStorage.setItem('foodId', current_food_id);
		});
    })


// by first letter
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${food_search[0]}`)
    .then(res => res.json())
    .then(data => {
        const recipe = data.meals;
        console.log(recipe);
        recipe.forEach(element => {
            document.getElementById('content').innerHTML +=
                `
        <div class="skj_cards">
        <img src="${element.strMealThumb}" alt="">
        <div class="skj_discription">
            <a href="./food.html">
                <div class="skj_content">
                    <h1>${element.strMeal}</h1>
                    <div class="skj_symbol">
                        <i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
                        <i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
                    </div>
                    <div style="display:none;">${element.idMeal}</div>
                </div>
            </a>
        </div>
    </div>
    `
        })
        $(".skj_content").click(function (e) {
			current_food_id = e.target.lastElementChild.innerText;
			sessionStorage.setItem('foodId', current_food_id);
		});
    })

// by category
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${food_search}`)
    .then(res => res.json())
    .then(data => {
        const recipe = data.meals;
        console.log(recipe);
        recipe.forEach(element => {
            document.getElementById('content').innerHTML +=
                `
        <div class="skj_cards">
        <img src="${element.strMealThumb}" alt="">
        <div class="skj_discription">
            <a href="./food.html">
                <div class="skj_content">
                    <h1>${element.strMeal}</h1>
                    <div class="skj_symbol">
                        <i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
                        <i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
                    </div>
                    <div style="display:none;">${element.idMeal}</div>
                </div>
            </a>
        </div>
    </div>
    `
        })
        $(".skj_content").click(function (e) {
			current_food_id = e.target.lastElementChild.innerText;
			sessionStorage.setItem('foodId', current_food_id);
		});
    })


// by area
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${food_search}`)
    .then(res => res.json())
    .then(data => {
        const recipe = data.meals;
        console.log(recipe);
        recipe.forEach(element => {
            document.getElementById('content').innerHTML +=
                `
        <div class="skj_cards">
        <img src="${element.strMealThumb}" alt="">
        <div class="skj_discription">
            <a href="./food.html">
                <div class="skj_content">
                    <h1>${element.strMeal}</h1>
                    <div class="skj_symbol">
                        <i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
                        <i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
                    </div>
                    <div style="display:none;">${element.idMeal}</div>
                </div>
            </a>
        </div>
    </div>
    `
        })
        $(".skj_content").click(function (e) {
			current_food_id = e.target.lastElementChild.innerText;
			sessionStorage.setItem('foodId', current_food_id);
		});
    })

// by main ingredient
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food_search}`)
    .then(res => res.json())
    .then(data => {
        const recipe = data.meals;
        console.log(recipe);
        recipe.forEach(element => {
            document.getElementById('content').innerHTML +=
                `
    <div class="skj_cards">
    <img src="${element.strMealThumb}" alt="">
    <div class="skj_discription">
        <a href="./food.html">
            <div class="skj_content">
                <h1>${element.strMeal}</h1>
                <div class="skj_symbol">
                    <i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
                    <i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
                </div>
                <div style="display:none;">${element.idMeal}</div>
            </div>
        </a>
    </div>
</div>
`
        })
        $(".skj_content").click(function (e) {
			current_food_id = e.target.lastElementChild.innerText;
			sessionStorage.setItem('foodId', current_food_id);
		});
    })