document.getElementById("search-submit").addEventListener('click', () => {
    document.getElementById('content').innerHTML = "";
    let search_data = document.getElementById("search-input").value;
    sessionStorage.setItem('search_input', search_data);
    print_data()
})

document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('content').innerHTML = "";
        let search_data = document.getElementById("search-input").value;
        sessionStorage.setItem('search_input', search_data);
        console.log(search_data);
        print_data()
    }
});

print_data()

function print_data() {
    const food_search = sessionStorage.getItem('search_input')
    console.log(food_search);

    // by food name
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food_search}`)
        .then(res => res.json())
        .then(data => {
            const recipe = data.meals;
            recipe.forEach(element => {
                document.getElementById('content').innerHTML +=
                    `
            <div class="skj_cards">
			<img src="${element.strMealThumb}" alt="">
        <h1 class="meal_heading">${element.strMeal}</h1>
			<div class="skj_discription">
				<a href="./food.html">
					<div class="skj_content">
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
            recipe.forEach(element => {
                document.getElementById('content').innerHTML +=
                    `
        <div class="skj_cards">
        <img src="${element.strMealThumb}" alt="">
        <h1 class="meal_heading">${element.strMeal}</h1>
        <div class="skj_discription">
            <a href="./food.html">
                <div class="skj_content">
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
            recipe.forEach(element => {
                document.getElementById('content').innerHTML +=
                    `
        <div class="skj_cards">
        <img src="${element.strMealThumb}" alt="">
        <h1 class="meal_heading">${element.strMeal}</h1>
        <div class="skj_discription">
            <a href="./food.html">
                <div class="skj_content">
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
            recipe.forEach(element => {
                document.getElementById('content').innerHTML +=
                    `
        <div class="skj_cards">
        <img src="${element.strMealThumb}" alt="">
        <h1 class="meal_heading">${element.strMeal}</h1>
        <div class="skj_discription">
            <a href="./food.html">
                <div class="skj_content">
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
            recipe.forEach(element => {
                document.getElementById('content').innerHTML +=
                    `
    <div class="skj_cards">
    <img src="${element.strMealThumb}" alt="">
        <h1 class="meal_heading">${element.strMeal}</h1>
        <div class="skj_discription">
        <a href="./food.html">
            <div class="skj_content">
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
}

// getting filter data
fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    .then(res => res.json())
    .then(data => {
        const d = data.meals;
        d.forEach(element => {
            document.getElementById('by-region').innerHTML +=
                `
                <h1>
                    <input id="${element.strArea}" type="checkbox" class="filter-input" />
                    <p>${element.strArea}</p>
                </h1>
        `
        });
    })

fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    .then(res => res.json())
    .then(data => {
        const d = data.meals;
        d.forEach(element => {
            document.getElementById('by-category').innerHTML +=
                `
                <h1>
                    <input id="${element.strCategory}" type="checkbox" class="filter-input" />
                    <p>${element.strCategory}</p>
                </h1>
        `
        });
    })

// submitting filter 
document.getElementById('filter-search').addEventListener('click', () => {
    const inputs = document.getElementsByClassName("filter-input")
    document.getElementById('content').innerHTML = "";
    for (var i = 0; i < 14; i++) {
        if (inputs[i].checked) {
            console.log(inputs[i].id);
            print_data_of_category(inputs[i].id);
        }
    }
    for (var i = 14; i < 41; i++) {
        if (inputs[i].checked) {
            console.log(inputs[i].id);
            print_data_of_region(inputs[i].id);
        }
    }
})

function print_data_of_category(category) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const recipe = data.meals;
            recipe.forEach(element => {
                document.getElementById('content').innerHTML +=
                    `
    <div class="skj_cards">
    <img src="${element.strMealThumb}" alt="">
        <h1 class="meal_heading">${element.strMeal}</h1>
        <div class="skj_discription">
        <a href="./food.html">
            <div class="skj_content">
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
}

function print_data_of_region(region) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${region}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const recipe = data.meals;
            recipe.forEach(element => {
                document.getElementById('content').innerHTML +=
                    `
    <div class="skj_cards">
    <img src="${element.strMealThumb}" alt="">
        <h1 class="meal_heading">${element.strMeal}</h1>
        <div class="skj_discription">
        <a href="./food.html">
            <div class="skj_content">
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
}