var current_food_id
// indian food
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`)
	.then(res => res.json())
	.then(data => {
		const recipe = data.meals;
		for (var i = 0; i < 10; i++) {
			document.getElementById('indian_foods').innerHTML +=
		`
		<div class= "img_and_name">
			<div class="skj_cards">
				<img src="${recipe[i].strMealThumb}" alt="">
				<div class="skj_discription">
					<a href="./food.html">
						<div class="skj_content">
							<div class="skj_symbol">
								<i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
								<i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
							</div>
							<div style="display:none;">
								${recipe[i].idMeal}
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="cake_name">
				<h1">${recipe[i].strMeal}</h1>
			</div>
		</div>
	`
		}
		$(".skj_content").click(function (e) {
			current_food_id = e.target.lastElementChild.innerText;
			sessionStorage.setItem('foodId', current_food_id);
		});
	});

// italian food
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian`)
	.then(res => res.json())
	.then(data => {
		const recipe = data.meals;
		for (var i = 0; i < 10; i++) {
			document.getElementById('italian_foods').innerHTML +=
				`
			<div class= "img_and_name">
				<div class="skj_cards">
					<img src="${recipe[i].strMealThumb}" alt="">
					<div class="skj_discription">
						<a href="./food.html">
							<div class="skj_content">
								<div class="skj_symbol">
									<i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
									<i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
								</div>
								<div style="display:none;">
									${recipe[i].idMeal}
								</div>
							</div>
						</a>
					</div>
				</div>
				<div class="cake_name">
					<h1">${recipe[i].strMeal}</h1>
				</div>
			</div>
	`
		}
		$(".skj_content").click(function (e) {
			current_food_id = e.target.lastElementChild.innerText;
			sessionStorage.setItem('foodId', current_food_id);
		});
	});

// chinese food
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese`)
	.then(res => res.json())
	.then(data => {
		const recipe = data.meals;
		for (var i = 0; i < 10; i++) {
			document.getElementById('chinese_foods').innerHTML +=
				`
			<div class= "img_and_name">
				<div class="skj_cards">
					<img src="${recipe[i].strMealThumb}" alt="">
					<div class="skj_discription">
						<a href="./food.html">
							<div class="skj_content">
								<div class="skj_symbol">
									<i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
									<i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
								</div>
								<div style="display:none;">
									${recipe[i].idMeal}
								</div>
							</div>
						</a>
					</div>
				</div>
				<div class="cake_name">
					<h1">${recipe[i].strMeal}</h1>
				</div>
			</div>
`
		}
		$(".skj_content").click(function (e) {
			current_food_id = e.target.lastElementChild.innerText;
			sessionStorage.setItem('foodId', current_food_id);
		});
	});

// american food
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=American`)
	.then(res => res.json())
	.then(data => {
		const recipe = data.meals;
		for (var i = 0; i < 9; i++) {
			document.getElementById('american_foods').innerHTML +=
				`
			<div class= "img_and_name">
				<div class="skj_cards">
					<img src="${recipe[i].strMealThumb}" alt="">
					<div class="skj_discription">
						<a href="./food.html">
							<div class="skj_content">
								<div class="skj_symbol">
									<i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
									<i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
								</div>
								<div style="display:none;">
									${recipe[i].idMeal}
								</div>
							</div>
						</a>
					</div>
				</div>
				<div class="cake_name">
					<h1">${recipe[i].strMeal}</h1>
				</div>
			</div>
	`
		}
		$(".skj_content").click(function (e) {
			current_food_id = e.target.lastElementChild.innerText;
			sessionStorage.setItem('foodId', current_food_id);
		});
	});


document.getElementById("search-submit").addEventListener('click',() => {
	let search_data=document.getElementById("search-input").value;
	sessionStorage.setItem('search_input',search_data);
})