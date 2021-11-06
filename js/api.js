const app_id="a93836d4"
const app_key="3a8ea30a81648b6ae026c047d475d9c8"

// indian food
fetch(`https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q="indian"`)
.then(res => res.json())
.then(data =>{
	const food=data.hits;
	console.log(food);
	for(var i=3;i<7;i++) {
		const recepie=food[i].recipe;
		console.log(recepie);
		document.getElementById('indian_foods').innerHTML +=
		`
			<div class="skj_cards">
				<img src="${recepie.image}" alt="">
				<div class="skj_discription">
					<a href="./food.html">
						<div class="skj_content">
							<h1>${recepie.label}</h1>
							<div class="skj_symbol">
								<i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
								<i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
							</div>
						</div>
					</a>
				</div>
			</div>
		`
	}
});


// chinese food
fetch(`https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q="chinese"`)
.then(res => res.json())
.then(data =>{
	const food=data.hits;
	console.log(food);
	for(var i=4;i<8;i++) {
		const recepie=food[i].recipe;
		console.log(recepie);
		document.getElementById('chinese_foods').innerHTML +=
		`
			<div class="skj_cards">
				<img src="${recepie.image}" alt="">
				<div class="skj_discription">
					<a href="./food.html">
						<div class="skj_content">
							<h1>${recepie.label}</h1>
							<div class="skj_symbol">
								<i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
								<i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
							</div>
						</div>
					</a>
				</div>
			</div>
		`
	}
});


// italian food
fetch(`https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q="italian"`)
.then(res => res.json())
.then(data =>{
	const food=data.hits;
	console.log(food);
	for(var i=0;i<4;i++) {
		const recepie=food[i].recipe;
		console.log(recepie);
		document.getElementById('italian_foods').innerHTML +=
		`
			<div class="skj_cards">
				<img src="${recepie.image}" alt="">
				<div class="skj_discription">
					<a href="./food.html">
						<div class="skj_content">
							<h1>${recepie.label}</h1>
							<div class="skj_symbol">
								<i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
								<i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
							</div>
						</div>
					</a>
				</div>
			</div>
		`
	}
});


// american food
fetch(`https://api.edamam.com/search?app_id=${app_id}&app_key=${app_key}&q="american"`)
.then(res => res.json())
.then(data =>{
	const food=data.hits;
	console.log(food);
	for(var i=0;i<4;i++) {
		const recepie=food[i].recipe;
		console.log(recepie);
		document.getElementById('american_foods').innerHTML +=
		`
			<div class="skj_cards">
				<img src="${recepie.image}" alt="">
				<div class="skj_discription">
					<a href="./food.html">
						<div class="skj_content">
							<h1>${recepie.label}</h1>
							<div class="skj_symbol">
								<i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
								<i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
							</div>
						</div>
					</a>
				</div>
			</div>
		`
	}
});

