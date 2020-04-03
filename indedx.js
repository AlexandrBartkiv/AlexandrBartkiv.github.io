$(document).ready(function() {
	
	$(`#about`).click(function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".about").offset().top
		}, 1000,"swing");
	});
	$(`#projects`).click(function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".projects").offset().top
		}, 1000,"swing");
	});
	$(`#contacts`).click(function(){
		$([document.documentElement, document.body]).animate({
			scrollTop: $(".contacts	").offset().top
		}, 1000,"swing");
	});
	
	$('.button1').click(function(){	
		var img = new Image;
		img.src = './img/WanCloseCranefly.webp';
		$('.button1').before(img);
		$('.contacts1>img').addClass('cat')
		console.log(img);
		timeout = setTimeout( function run() {
		$('.cat').animate({
			left:'+=4rem'
		},300)
		console.log('1')
		runrec = setTimeout(run, 100);
		console.log('2')
		console.log($('.cat').css('left'))
	}, 500);
	
	
	});
	window.addEventListener(`scroll`, () => {
		scroll = window.scrollY
		console.log(scroll)
		if (scroll > 150){
			document.getElementById(`up`).style.animation = `move 1s `;
			document.getElementById(`up`).style.right = `2rem`;
		}
		else if (scroll < 150){
			document.getElementById(`up`).style.animation = `moveback 1s `;
			document.getElementById(`up`).style.right = `-3rem`;
		}
		
	});

	let scrolled;
	let timer;
	document.getElementById(`up`).addEventListener(`click`, () => {
		$([document.documentElement, document.body]).animate({
			scrollTop: $(`header`).offset().top
		}, 1000,"swing");
	});
	


	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
})