;(function() {
	"use strict"
	
//  -- product navigation --
	
	$(".around-container li").on("click", function(e) {
		e.preventDefault();
		$(".around-container li").removeClass("active");
		$(this).addClass("active");

	});
	
	$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
	});
	
	$(document).on('click',".carousel-button-left",function(){ 
		var carusel = $(this).parents('.carousel');
		left_carusel(carusel);
		return false;
	});
	function left_carusel(carusel){
	   var block_width = $(carusel).find('.carousel-block').outerWidth();
	   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone(true).prependTo($(carusel).find(".carousel-items")); 
	   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
	   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
	   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 

	}
	function right_carusel(carusel){
	   var block_width = $(carusel).find('.carousel-block').outerWidth();
	   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
		  $(carusel).find(".carousel-items .carousel-block").eq(0).clone(true).appendTo($(carusel).find(".carousel-items")); 
		  $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
		  $(carusel).find(".carousel-items").css({"left":"0px"}); 
	   }); 
	}
	
//  -- carousel --	
	
	let images = ["img/thumbs/1.png","img/thumbs/2.png","img/thumbs/3.png","img/thumbs/4.png","img/thumbs/5.png"];

	addImg(images);
	
	function addImg(images) {
		let i = 1;
		images.forEach(u => {
			
			let img = `block-${i}`;
			
			$(".product-img .carousel-items").append(`<div class="carousel-block block-${i}"><img src="" alt="" /></div>`);
			
			$(`.product-img .${img} img`).attr("src", u);
			i = i + 1;
		});
		$(".product-img .carousel-preview img").attr("src", images[0]);
		
	};
	
	
	$(".product-img .carousel-block").on("click", function() {
		
		let url = $("img", this).attr("src");
		
		$(".product-img .carousel-block").removeClass("active");
		$(this).addClass("active");
		$(".product-img .carousel-preview img").attr("src", url);
		
		
	});
	
	$(".product-img .carousel-items div:first-child").addClass("active");
	
	$(".product-img .carousel-preview img").okzoom({
		  width: 200,
		  height: 200,
		  round: false,
		  background: "#fff",
		  backgroundRepeat: "repeat",
		  shadow: "0 0 5px #000",
		  border: "1px solid black"
		});
	
//  -- product color types --	
	
	let colors = [{color: "#027258", title: "Зеленый" }, {color: "#436795", title: "Синий" }, {color: "#97566a", title: "Бордовый" } ];
	
	addColor(colors);
	
	function addColor(colors) {
		let i = 1;
		colors.forEach(c => {
			
			let u = `color-${i}`;
			
			$(".color").append(`<a class="color-pick ${u}" href="/"><p></p><span class="color-tooltip">${c.title}</span></a>`);
			
			$(`.color-pick.${u}`).css( "background-color", `${c.color}` );
			$(`.color-pick.${u} p`).css( "background-color", `${c.color}` );
			
			
			
			
			i = i + 1;
			
		});
	};

	
//  -- product size types --
	
	let proportions = [{size: "XS", status: "" }, {size: "S", status: "" }, {size: "M", status: "" }, {size: "L", status: "" }, {size: "XL", status: "none" } ];
	
	addSize(proportions);
	
	function addSize(proportions) {
		let i = 1;
		proportions.forEach(c => {
			
			let u = `size-${i}`;
			
			$(".size").append(`<a class="${u} ${c.status}" href="/">${c.size}</a>`);
			
			i = i + 1;
			
		});
	};
	
		
	$(".size a").on("click", function(e) {
		e.preventDefault();
		
		$(".size a").removeClass("active");
		$(this).addClass("active");
		
		if($(this).hasClass("none")) $(this).removeClass("active");
	
	});
	
//  -- сhange in amount of product --	
	
	$(".sum-quantity .fa-angle-up").on("click", function() {
		
		let am = $(".sum-quantity p").text();
		
		$(".sum-quantity p").text(+am + 1);
	
	});
	
	$(".sum-quantity .fa-angle-down").on("click", function() {
		
		let am = $(".sum-quantity p").text();
		
		if(am > 1) $(".sum-quantity p").text(+am - 1);
	
	});
	
	
//  -- сhange position description-par element --
	
	$( window ).resize(function() {
		onRes();
	});
	
	function onRes() {
		let $width = $("body").width();
		
		if( $width + 16 < 1200 ) $(".description-par").appendTo(".inner-description")
		else $(".description-par").appendTo(".main-inner-description");
	};
	
	onRes();
	
//  -- recommend product section --
	
	let prod = [{
			img: "img/thumbs/1.png",
			title: "Шарф Alexander McQueen",
			price: 2500,
			colors: [ {color: "#027258", title: "Зеленый" }, {color: "#436795", title: "Синий" }, {color: "#97566a", title: "Бордовый" } ],
			reiting: 1
		},
		{
			img: "img/thumbs/1.png",
			title: "Шарф Alexander McQueen Шарф Alexander McQueen",
			price: 2500,
			colors: [ {color: "#97566a", title: "Бордовый" } ],
			reiting: 2
		},
		{
			img: "img/thumbs/1.png",
			title: "Шарф Alexander McQueen Alexander",
			price: 2500,
			colors: [{ color: "#027258", title: "Зеленый" }, {color: "#436795", title: "Синий" } ],
			reiting: 3
		}];
	
	
	
	addRecommendProduct(prod);
	
	function addRecommendProduct(prod) {
		
		let i = 1,
			priceArr = [];
		
		prod.forEach( p => {
			
			let u = `similar-goods-${i}`,
				o = 1,
				d = 1;
			
			$(`.${u}`).append(` <div class="colors"></div>
								<div class="similar-goods-img"><img src=${p.img} alt=""></div>
								<div class="product-rating"><ul class="between-container"></ul></div>
								<div class="similar-goods-title"><h4>${p.title}</h4></div>
								<p>${p.price} грн</p>`);
			
			priceArr.push(p.price);
			
			let nam = p.reiting,
				reitingArr = [ "<li><i class='fa fa-star-o' aria-hidden='true'></i></li>",
						 "<li><i class='fa fa-star-o' aria-hidden='true'></i></li>",
						 "<li><i class='fa fa-star-o' aria-hidden='true'></i></li>",
						 "<li><i class='fa fa-star-o' aria-hidden='true'></i></li>",
						 "<li><i class='fa fa-star-o' aria-hidden='true'></i></li>" ];
			
			for (let j = 0; j < nam; j++) {
			   reitingArr[j] = "<li><i class='fa fa-star' aria-hidden='true'></i></li>";
			};
			
			let reitString = reitingArr.join(" ");
			
			$(`.${u} .product-rating ul`).append(reitString);
			
			
			let colorLegth = p.colors.length,
				colorArr = [];
			
			p.colors.forEach( t => {
				
				let q = `color-${o}`;
				
				colorArr.push(`<a class="color-pick ${q}" href="/"><p></p></a>`);
				
				
				o = o + 1;
			});
			
			let colorString = colorArr.join(" ");
			
			$(`.${u} .colors`).append(colorString);
			
			p.colors.forEach( t => {
				
				let q = `color-${d}`;
			
				$(`.${u} .colors .color-pick.${q}`).css( "background-color", `${t.color}` );
				$(`.${u} .colors .color-pick.${q} p`).css( "background-color", `${t.color}` );
				
				d = d + 1;
			});
			
			i = i + 1;
		});
		
	//  -- discont --
		
		let discont = 200,
			price = priceArr.reduce((sum, current) => {
					  return sum + current
					});
		$(".similar-goods-set .all-price").text(price + " грн");
		$(".similar-goods-set .discount-price").text((price - discont) + " грн");
		$(".similar-goods-set .discont").text(`Экономия ${discont} гривен`);
		
		
	};
	
	$(".color-pick").on("click", function(e) {
		e.preventDefault();
		
		$(".color-pick").removeClass("active");
		$(this).addClass("active");
	
	});
	
//  -- another product section --
	
	let another = [{
			img: "img/thumbs/1.png",
			title: "Шарф Alexander another",
			price: 2500,
			colors: [ {color: "#027258"}, {color: "#436795"}, {color: "#97566a"} ],
			reiting: 1
		},
		{
			img: "img/thumbs/1.png",
			title: "Шарф Alexander another Шарф Alexander McQueen",
			price: 2500,
			colors: [ {color: "#97566a"} ],
			reiting: 2
		},
		{
			img: "img/thumbs/6.png",
			title: "Шарф Alexander another Alexander",
			price: 2500,
			colors: [{ color: "#027258"}, {color: "#436795"} ],
			reiting: 3
		},
		{
			img: "img/thumbs/1.png",
			title: "Шарф Alexander another Alexander",
			price: 2500,
			colors: [{ color: "#027258"}, {color: "#436795"} ],
			reiting: 2
		},
		{
			img: "img/thumbs/1.png",
			title: "Шарф Alexander another Alexander",
			price: 2500,
			colors: [{ color: "#027258"}, {color: "#436795"}, {color: "red"}, {color: "blue"} ],
			reiting: 4
		},
		{
			img: "img/thumbs/1.png",
			title: "Шарф Alexander Alexander",
			price: 2500,
			colors: [{ color: "#027258"}, {color: "#436795"} ],
			reiting: 2
		},
		{
			img: "img/thumbs/1.png",
			title: "Шарф Alexander Alexander",
			price: 2500,
			colors: [{ color: "#027258"}, {color: "#436795"}, {color: "red",}, {color: "blue"} ],
			reiting: 4
		}],
		viewed = [{
			img: "img/thumbs/2.png",
			title: "Полезная штука",
			price: 500,
			colors: [ {color: "black"}, {color: "#436795"}, {color: "#97566a"} ],
			reiting: 1
		},
		{
			img: "img/thumbs/2.png",
			title: "Очень полезная штука",
			price: 500,
			colors: [ {color: "black"} ],
			reiting: 2
		},
		{
			img: "img/thumbs/6.png",
			title: "Ну очень полезная штука",
			price: 500,
			colors: [{ color: "#027258", title: "Зеленый" }, {color: "#436795", title: "Синий" } ],
			reiting: 3
		},
		{
			img: "img/thumbs/2.png",
			title: "Нереально крутая штука Нереально крутая штука",
			price: 500,
			colors: [{ color: "#027258", title: "Зеленый" }, {color: "#436795", title: "Синий" } ],
			reiting: 2
		},
		{
			img: "img/thumbs/2.png",
			title: "Шарф Alexander another Alexander",
			price: 500,
			colors: [{ color: "#027258"}, {color: "#436795"}, {color: "red"}, {color: "blue"} ],
			reiting: 4
		},
		{
			img: "img/thumbs/2.png",
			title: "Шарф Alexander Alexander",
			price: 500,
			colors: [{ color: "#027258"}, {color: "#436795"} ],
			reiting: 2
		},
		{
			img: "img/thumbs/2.png",
			title: "Шарф Alexander Alexander",
			price: 500,
			colors: [{ color: "#027258"}, {color: "#436795"}, {color: "red"}, {color: "blue"} ],
			reiting: 4
		}];
		
	
	
	
	addAnotherProduct("", another);
	
	function addAnotherProduct(index, another) {
		
		let i = 1,
			priceArr = [];
		
		another.forEach( p => {
			
			let u = `another-goods-${i}`,
				o = 1,
				d = 1;
			
			$(`.another-items${index}`).append(`<div class="another-block${index} ${u}"></div>`);
			
			$(`.another-items${index} .${u}`).append(`<div class="colors"></div>
								<div class="img"><img src=${p.img} alt=""></div>
								<div class="title"><h4>${p.title}</h4></div>
								<p>${p.price} грн</p>`);
			
			priceArr.push(p.price);
			
			
			let colorLegth = p.colors.length,
				colorArr = [];
			
			p.colors.forEach( t => {
				
				let q = `colored-${o}`;
				
				colorArr.push(`<a class="colored-pick${index} ${q}" href="/"></a>`);
				
				
				o = o + 1;
			});
			
			let colorString = colorArr.join(" ");
			
			$(`.another-items${index} .${u} .colors`).append(colorString);
			
			p.colors.forEach( t => {
				
				let q = `colored-${d}`;
			
				$(`.${u} .colors .colored-pick${index}.${q}`).css( "background-color", `${t.color}` );
				
				d = d + 1;
			});
			
			i = i + 1;
		});
	
	}
	
	addAnotherProduct("-view", viewed);
	
	$(".colored-pick").on("click", function(e) {
		e.preventDefault();
		
		$(".colored-pick").removeClass("active");
		$(this).addClass("active");

	});
	
	$(".colored-pick-view").on("click", function(e) {
		e.preventDefault();
		
		$(".colored-pick-view").removeClass("active");
		$(this).addClass("active");

	});
	
	
	
	$(document).on('click', ".another-button-right",function(){ 
		let carus = $(this).parents('.another-carousel');
		right_carus(carus);
		return false;
	});
	
	$(document).on('click',".another-button-left",function(){ 
		let carus = $(this).parents('.another-carousel');
		left_caru(carus);
		return false;
	});
	function left_caru(carus){
	   let block_w = $(carus).find('.another-block').outerWidth();
	   $(carus).find(".another-items .another-block").eq(-1).clone(true).prependTo($(carus).find(".another-items")); 
	   $(carus).find(".another-items").css({"left":"-" + block_w + "px"});
	   $(carus).find(".another-items .another-block").eq(-1).remove();    
	   $(carus).find(".another-items").animate({left: "0px"}, 200); 

	}
	function right_carus(carus){
	   let block_w = $(carus).find('.another-block').outerWidth();
	   $(carus).find(".another-items").animate({left: "-"+ block_w + "px"}, 200, function(){
		  $(carus).find(".another-items .another-block").eq(0).clone(true).appendTo($(carus).find(".another-items")); 
		  $(carus).find(".another-items .another-block").eq(0).remove(); 
		  $(carus).find(".another-items").css({"left":"0px"}); 
	   }); 
	}
	
	
	
	
	
	$(document).on('click', ".viewed-button-right",function(e){
		e.preventDefault();
	let carusel_view = $(this).parents('.another-carousel-view');
	right_carusel_view(carusel_view);
	return false;
	});
	
	$(document).on('click',".viewed-button-left",function(e){
		e.preventDefault();
		let carusel_view = $(this).parents('.another-carousel-view');
		left_carusel_view(carusel_view);
		return false;
	});
	function left_carusel_view(carusel_view){
	   let block_width_view = $(carusel_view).find('.another-block-view').outerWidth();
	   $(carusel_view).find(".another-items-view .another-block-view").eq(-1).clone(true).prependTo($(carusel_view).find(".another-items-view")); 
	   $(carusel_view).find(".another-items-view").css({"left": "-" + block_width_view + "px"});
	   $(carusel_view).find(".another-items-view .another-block-view").eq(-1).remove();    
	   $(carusel_view).find(".another-items-view").animate({left: "0px"}, 200); 

	}
	function right_carusel_view(carusel_view){
	   let block_width_view = $(carusel_view).find('.another-block-view').outerWidth();
	   $(carusel_view).find(".another-items-view").animate({left: "-" + block_width_view + "px"}, 200, function(){
		  $(carusel_view).find(".another-items-view .another-block-view").eq(0).clone(true).appendTo($(carusel_view).find(".another-items-view")); 
		  $(carusel_view).find(".another-items-view .another-block-view").eq(0).remove(); 
		  $(carusel_view).find(".another-items-view").css({"left":"0px"}); 
	   }); 
	}
	
	$(".colored-pick").on("click", function(e) {
		e.preventDefault();
		
		$(".colored-pick").removeClass("active");
		$(this).addClass("active");

	});
	
	$(".colored-pick-view").on("click", function(e) {
		e.preventDefault();
		
		$(".colored-pick-view").removeClass("active");
		$(this).addClass("active");

	});
	
	
//  -- сhange in basket of product --	
	

	
	let prodBasket = [{
			img: "img/thumbs/4.png",
			title: "Нереально крутой продукт в корзине 1",
			price: 2500,
			reiting: 1
		},
		{
			img: "img/thumbs/4.png",
			title: "Нереально крутой продукт в корзине 2",
			price: 2500,
			reiting: 2
		},
		{
			img: "img/thumbs/4.png",
			title: "Продукт в корзине 3",
			price: 2500,
			reiting: 3
		}];
	
	
	
	addBasketProduct(prodBasket);
	
	
	
	
	function addBasketProduct(prod) {
		console.log(prod);
		
		let i = 1,
			priceArr = [];
		
		prod.forEach( p => {
			
			let q = `basket-${i}`,
				f = `${-i}`;
			
			
			
			$(`.basket-modal-cont`).append(` <div class="single-basket-product ${q}">
												<a href="/" class="single-basket-close"><i class="fa fa-times" aria-hidden="true"></i></a>
												<div class="single-basket-img">
													<img src=${p.img} alt="">
												</div>
												<div>
													<p>${p.title}</p>
													<div class="sum sum-basket${-i}">
														<p>1</p>
														<div><i class="fa fa-angle-up" aria-hidden="true"></i><i class="fa fa-angle-down" aria-hidden="true"></i></div>
													</div>
													<div class="basket-price">
														<p>${p.price}</p><p>UAN</p>
													</div>
												</div>
												
											</div>`);
			
			priceArr.push(p.price);
			
			
			i = i + 1;
		});
		
		totalPrice();
	}
	
	function totalPrice() {
		
		let b = prodBasket.length + 1,
			tp = [],
			result;
		
		for (let j = 1; j < b; j++) {
			
				let m = `basket-${j}`,
					z = $(`.${m} .basket-price p:first-child`).text(),
					x = $(`.sum-basket-${j} p`).text();
			
			 	tp.push(z * x);
				
			};
		
		result = tp.reduce(function(sum, current) {
		  return (+sum) + (+current);
		});
		
		$(".basket-buy .total").text(result);
		$(".basket-box .price").text(`${result} UAN`);
		
	}
	
	
	
	$(".fa-angle-down").on("click", function() {
		
		let l = $(this).parent("div").parent("div").attr("class").replace(/\D+/g,""),
			am = $(`.sum-basket-${l}`).text();
		
		if(am > 1) $(`.sum-basket-${l} p`).text(+am - 1);
		
		totalPrice();
	});
	
	$(".fa-angle-up").on("click", function() {
		
		let l = $(this).parent("div").parent("div").attr("class").replace(/\D+/g,""),
			am = $(`.sum-basket-${l}`).text();
		
		$(`.sum-basket-${l} p`).text(+am + 1);
		
		totalPrice();
		
	});
	
	$(".single-basket-close").on("click", function(e) {
		e.preventDefault();
		
		let l = $(this).parent("div").attr("class").replace(/\D+/g,"");
		
		
		$(`.basket-${l}`).css({"display": "none"}).empty();
		
		totalPrice();
		amount();

	});
	
	amount();
	
	function amount() {
		
		let f = $('.single-basket-img').length;
		
		$(".basket-box .quantity span").text(f);
	}
	
	$("a").on("click", function(e) {
		e.preventDefault();
	});
	
})();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
