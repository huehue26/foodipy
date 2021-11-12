let foodId = sessionStorage.getItem('foodId');
let cat = "";

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
    .then(res => res.json())
    .then(data => {
        const l = data.meals[0].strYoutube;
        var len = l.length;
        var s = "";
        for (var i = 0; i < len; i++) {
            if (l[i] == 'v' && l[i + 1] == '=') {
                for (var j = i + 2; j < len; j++, i++) {
                    s += l[j];
                }
            }
        }
        document.getElementById('food_heading').innerText = data.meals[0].strMeal;
        document.getElementById('meal-name').innerText = data.meals[0].strMeal;
        document.getElementById('meal-name2').innerText = data.meals[0].strArea + " food";
        cat += data.meals[0].strArea;
        document.getElementById('meal-name3').innerText = "Category: " + data.meals[0].strArea;
        document.getElementById('meta').innerHTML =
            `
		<div id="hello">
        <iframe width="550" height="405" src="https://www.youtube.com/embed/${s}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <div class="ingredients-api">
         <div class="ingrd-heading">Ingredients Used</div>
        <div class="ingrd-name"><i class="fas fa-seedling"></i> ${data.meals[0].strIngredient1}</div>
        <div class="ingrd-name"><i class="fas fa-seedling"></i> ${data.meals[0].strIngredient2}</div>
        <div class="ingrd-name"><i class="fas fa-seedling"></i> ${data.meals[0].strIngredient3}</div>
        <div class="ingrd-name"><i class="fas fa-seedling"></i> ${data.meals[0].strIngredient4}</div>
        <div class="ingrd-name"><i class="fas fa-seedling"></i> ${data.meals[0].strIngredient5}</div>
        <div class="ingrd-name"><i class="fas fa-seedling"></i> ${data.meals[0].strIngredient6}</div>
        </div>
        </div>
        `;
    });
// <div class="vid-caption-api">


var count = 0;

document.getElementById("search-submit").addEventListener('click', () => {
    let search_data = document.getElementById("search-input").value;
    sessionStorage.setItem('search_input', search_data);
})
const food_search = sessionStorage.getItem('search_input')


fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    .then(res => res.json())
    .then(data => {
        const d = data.meals;
        var y = 15;
        d.forEach((element, ind) => {
            y--;
            if (y > 7 && y < 15)
                document.getElementById('by-region').innerHTML +=
                    `
                <div id="reg${ind}">${element.strArea}</div>
        `
            else if (y > 0) {
                document.getElementById('by-region2').innerHTML +=
                    `
            <div id="reg${ind}">${element.strArea}</div>
    `
            }
        });
    })

// <input id="${element.strArea}" type="checkbox" class="filter-input" />

fetch(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    .then(res => res.json())
    .then(data => {
        const d = data.meals;
        var x = 15;
        d.forEach((element, ind) => {
            x--;
            if (x > 7)
                document.getElementById('by-category').innerHTML +=
                    `
                    <div id="category${ind}">${element.strCategory}</div>
        `
            else {
                document.getElementById('by-category2').innerHTML +=
                    `
                <div id="category${ind}">${element.strCategory}</div>
    `
            }
        });

    })
// <input id="${element.strCategory}" type="checkbox" class="filter-input" />

document.getElementById('pay-now').addEventListener('click', function () {
    document.getElementById('paynow').style.display = 'flex';
});
document.getElementById('close-pay-now').addEventListener('click', function () {
    document.getElementById('paynow').style.display = 'none';
});

// CART logic
sessionStorage.setItem('total_price1', 0);
sessionStorage.setItem('total_price2', 0);
sessionStorage.setItem('total_price3', 0);
$('.like-btn').on('click', function () {
    $(this).toggleClass('is-active');
});

$('#minus-btn1').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    var valorg = value;
    console.log("minus");
    if (value > 0) {
        value = value - 1;
    } else {
        value = 0;
        valorg = 0;
    }
    $input.val(value);
    value = valorg - value;
    $input.val(value);
    const pr1 = $('#price1').text();
    sessionStorage.setItem('total_price1', parseInt(sessionStorage.getItem('total_price1')) - parseInt(pr1) * value);
    const pre_val1 = parseInt(sessionStorage.getItem('total_price1'))
    $('#ttl-pr').text(pre_val1 + (parseInt(sessionStorage.getItem('total_price2'))) + parseInt(sessionStorage.getItem('total_price3')));
});

$('#minus-btn2').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    var valorg = value;
    console.log("minus");
    if (value > 0) {
        value = value - 1;
    } else {
        value = 0;
        valorg = 0;
    }
    $input.val(value);
    value = valorg - value;
    $input.val(value);
    const pr2 = $('#price2').text();
    sessionStorage.setItem('total_price2', parseInt(sessionStorage.getItem('total_price2')) - parseInt(pr2) * value);
    const pre_val2 = parseInt(sessionStorage.getItem('total_price1'))
    $('#ttl-pr').text(pre_val2 + (parseInt(sessionStorage.getItem('total_price1'))) + parseInt(sessionStorage.getItem('total_price3')));
});

$('#minus-btn3').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    var valorg = value;
    console.log("minus");
    if (value > 0) {
        value = value - 1;
        $input.val(value);
        value = valorg - value;
        $input.val(value);
        const pr3 = $('#price3').text();
        sessionStorage.setItem('total_price3', parseInt(sessionStorage.getItem('total_price3')) - parseInt(pr3) * value);
        const pre_val3 = parseInt(sessionStorage.getItem('total_price1'))
        $('#ttl-pr').text(pre_val3 + (parseInt(sessionStorage.getItem('total_price2'))) + parseInt(sessionStorage.getItem('total_price1')));
    } else {
        value = 0;
        valorg = 0;
    }

});

$('.plus-btn1').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    var valorg = value;
    if (value < 20) {
        value = value + 1;
    }
    else {
        alert("You can buy atmost 20 items at a time")
    }
    $input.val(value);
    value = value - valorg;
    const pr1 = $('#price1').text();
    sessionStorage.setItem('total_price1', parseInt(pr1) * value + parseInt(sessionStorage.getItem('total_price1')));
    const pre_val1 = parseInt(sessionStorage.getItem('total_price1'))
    $('#ttl-pr').text(pre_val1 + (parseInt(sessionStorage.getItem('total_price2'))) + parseInt(sessionStorage.getItem('total_price3')));

});
$('.plus-btn2').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    var valorg = value;
    if (value < 20) {
        value = value + 1;
    }
    else {
        alert("You can buy atmost 20 items at a time")
    }
    $input.val(value);
    value = value - valorg;
    const pr2 = $('#price2').text();
    sessionStorage.setItem('total_price2', parseInt(pr2) * value + parseInt(sessionStorage.getItem('total_price2')));
    const pre_val2 = parseInt(sessionStorage.getItem('total_price2'))
    $('#ttl-pr').text(pre_val2 + parseInt(sessionStorage.getItem('total_price1')) + parseInt(sessionStorage.getItem('total_price3')));

});
$('.plus-btn3').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    var valorg = value;
    if (value < 20) {
        value = value + 1;
    }
    else {
        alert("You can buy atmost 20 items at a time")
    }
    $input.val(value);
    value = value - valorg;
    const pr3 = $('#price3').text();
    sessionStorage.setItem('total_price3', parseInt(pr3) * value + parseInt(sessionStorage.getItem('total_price3')));
    const pre_val3 = parseInt(sessionStorage.getItem('total_price3'))
    console.log(pre_val3 + value);
    $('#ttl-pr').text(pre_val3 + parseInt(sessionStorage.getItem('total_price1')) + parseInt(sessionStorage.getItem('total_price2')));

});
$('#like1').on('click', function () {
    sessionStorage.setItem('like1', "added_first")
    const txt = $('#price1').text();
    $('#price1').text(txt + "    Added to cart");
    setTimeout(function () {
        $('#price1').text(txt);
    }, 2000);
})
$('#like2').on('click', function () {
    sessionStorage.setItem('like2', "added_second")
    const txt = $('#price2').text();
    $('#price2').text(txt + "    Added to cart");
    setTimeout(function () {
        $('#price2').text(txt);
    }, 2000);
})
$('#like3').on('click', function () {
    sessionStorage.setItem('like3', "added_third")
    const txt = $('#price3').text();
    $('#price3').text(txt + "    Added to cart");
    setTimeout(function () {
        $('#price3').text(txt);
    }, 2000);
})
$('#del1').on('click', function () {
    sessionStorage.removeItem('like1')
    const txt = $('#price1').text();
    $('#price1').text(txt + "    Deleted from cart");
    setTimeout(function () {
        $('#price1').text(txt);
    }, 2000);
})
$('#del2').on('click', function () {
    sessionStorage.removeItem('like2')
    const txt = $('#price2').text();
    $('#price2').text(txt + "    Deleted from cart");
    setTimeout(function () {
        $('#price2').text(txt);
    }, 2000);
})
$('#del3').on('click', function () {
    sessionStorage.removeItem('like3')
    const txt = $('#price3').text();
    $('#price3').text(txt + "    Deleted from cart");
    setTimeout(function () {
        $('#price3').text(txt);
    }, 2000);
})


// recommended food

for (var i = foodId-1; i >= foodId - 15; i--) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`)
        .then(res => res.json())
        .then(data => {
            const recipe = data.meals;
            document.getElementById('recommended_food').innerHTML +=
                `
		<div class= "img_and_name">
			<div class="skj_cards">
				<img src="${recipe[0].strMealThumb}" alt="">
				<div class="skj_discription">
					<a href="./food.html">
						<div class="skj_content">
							<div class="skj_symbol">
								<i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
								<i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
							</div>
							<div style="display:none;">
								${recipe[0].idMeal}
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="cake_name">
				<h1">${recipe[0].strMeal}</h1>
			</div>
		</div>
	`
            $(".skj_content").click(function (e) {
                current_food_id = e.target.lastElementChild.innerText;
                sessionStorage.setItem('foodId', current_food_id);
            });
        });
}

for (var i = foodId+1; i <= foodId + 15; i++) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`)
        .then(res => res.json())
        .then(data => {
            const recipe = data.meals;
            console.log(recipe);
            document.getElementById('recommended_food').innerHTML +=
                `
		<div class= "img_and_name">
			<div class="skj_cards">
				<img src="${recipe[0].strMealThumb}" alt="">
				<div class="skj_discription">
					<a href="./food.html">
						<div class="skj_content">
							<div class="skj_symbol">
								<i class="fa fa-shopping-cart skj_icons" style=" margin: 25px 28px 0px 0px; font-size: 35px;"></i>
								<i class="fa fa-heart skj_icons" style="margin: 25px 0px 0px 28px; font-size:35px;"></i>
							</div>
							<div style="display:none;">
								${recipe[0].idMeal}
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="cake_name">
				<h1">${recipe[0].strMeal}</h1>
			</div>
		</div>
	`
            $(".skj_content").click(function (e) {
                current_food_id = e.target.lastElementChild.innerText;
                sessionStorage.setItem('foodId', current_food_id);
            });
        });
}


// trending food

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
	.then(res => res.json())
	.then(data => {
		const recipe = data.meals;
		for (var i = 0; i < 4; i++) {
			document.getElementById('trending_food').innerHTML +=
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

    fetch(`www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`)
	.then(res => res.json())
	.then(data => {
		const recipe = data.meals;
		for (var i = 0; i < 4; i++) {
			document.getElementById('trending_food').innerHTML +=
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