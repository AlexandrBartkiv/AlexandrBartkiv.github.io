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