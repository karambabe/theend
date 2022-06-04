let body = document.querySelector("body"); //тело сайта
let main_player = document.querySelector(".main_player"); //игрок на главной сцене

let main = document.querySelector(".main"); //главная локация
let school = document.querySelector(".school"); //картинка школы
let mastery = document.querySelector(".mastery"); //картинка кузницы
let arena = document.querySelector(".arena"); //картинка арены
let ratio = document.querySelector(".ratio");

let location1 = document.querySelector(".location1"); //локация 1
let nojniBox = document.querySelector(".nojni"); //ачивка ножны
let location2 = document.querySelector(".location2"); //локация 2
let swordBox = document.querySelector(".sword"); //ачивка меч
let location3 = document.querySelector(".location3"); //локация 3
let shieldBox = document.querySelector(".shield"); //ачивка щит
		

school.onclick = function(){
	main_player.style.top = "32%";
	main_player.style.left = "70%";

	let loc1_variants_block = document.querySelector(".loc1_variants_block");
	let talk = document.querySelector(".loc1_talk");
	let wrong = document.querySelectorAll(".loc1_variants");
	let write = document.querySelector(".loc1_pravilno");
	let nojni = document.querySelector(".nojni");
	function changeLocation1(){
		main.style.display = "none";
		location1.style.display = "block";
		body.style.baclground = "green"

		setTimeout(showtalk, 1000);
		setTimeout(showvar, 2000)

		for(let i=0; i<5; i=i+1) {
			wrong[i].onclick = function() {
				alert("ебучий позер.")
			}
		}

		write.onclick = function() {
			alert("а ты не плох.");
			main.style.display = "block";
			location1.style.display = "none";
			nojni.style.display = "block";
			alert("получен кагуне!")
			//вернуться обратно в мэйн
			//поставить в боди его фон и сайз
			//показать очивку
			//остановить интервал
		}
	}

	function showtalk() {
		talk.style.display = "block";
	}

	function showvar() {
		loc1_variants_block.style.display = "block";
	}
	setTimeout(changeLocation1, 1000);
}

mastery.onclick = function(){
	main_player.style.top = "72%";
	main_player.style.left = "40%";

	let loc2_variants_block = document.querySelector(".loc2_variants_block");
	let talk2 = document.querySelector(".loc2_talk");
	let wrong2 = document.querySelectorAll(".loc2_variants");
	let write2 = document.querySelector(".loc2_pravilno");
	let sword = document.querySelector(".sword");

	function changeLocation2(){
		main.style.display = "none";
		location2.style.display = "block";

		setTimeout(showtalk2, 1000);
		setTimeout(showvar2, 2000);

		for(let i=0; i<5; i=i+1) {
			wrong2[i].onclick = function() {
				alert("подумай ещё. это очень важно.")
			}
		}

		write2.onclick = function() {
			alert("молодец.");
			main.style.display = "block";
			location2.style.display = "none";
			sword.style.display = "block";
			alert("получена маска!")
			//вернуться обратно в мэйн
			//поставить в боди его фон и сайз
			//показать очивку
			//остановить интервал
		}
	}

	function showtalk2() {
		talk2.style.display = "block";
	}

	function showvar2() {
		loc2_variants_block.style.display = "block";
	}
	setTimeout(changeLocation2, 1000);
}


	arena.onclick = function(){
	main_player.style.top = "32%";
	main_player.style.left = "30%";

	let loc3_variants_block = document.querySelector(".loc3_variants_block");
	let talk3 = document.querySelector(".loc3_talk");
	let wrong3 = document.querySelectorAll(".loc3_variants");
	let write3 = document.querySelector(".loc3_pravilno");
	let shield = document.querySelector(".shield");

	function changeLocation3(){
		main.style.display = "none";
		location3.style.display = "block";

		setTimeout(showtalk3, 1000);
		setTimeout(showvar3, 2000);

		for(let i=0; i<5; i=i+1) {
			wrong3[i].onclick = function() {
				alert("подумай")
			}
		}

		write3.onclick = function() {
			alert("умничка!");
			main.style.display = "block";
			location3.style.display = "none";
			shield.style.display = "block";
			alert("получена тоука!")
			//вернуться обратно в мэйн
			//поставить в боди его фон и сайз
			//показать очивку
			//остановить интервал
		}
	}

	function showtalk3() {
		talk3.style.display = "block";
	}

	function showvar3() {
		loc3_variants_block.style.display = "block";
	}
	setTimeout(changeLocation3, 1000);
}