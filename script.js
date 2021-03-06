var $seconds = 25;		//Количество секунд
var $minutes = 30;		//Количество минут
var $hours = 5;			//Количество часов
var $days = 1;			//Количество дней

var $time = ($days * 60 * 60 * 24) + ($hours * 60 * 60) + ($minutes * 60) + $seconds;

function MyModal() {
	var $name = $("#inputName").val();
	var $tel = $("#inputTel").val();
	var $paretn = /[\d\(\)\ -\+]{4,14}\d$/;

	if ($name == '') {
		$("#error-name").html('Вы не ввели имя!');
	} else if ($tel == '') {
		$("#error-name").html('');
		$("#error-tel").html('Вы не ввели телефон!');
	} else  if ($paretn.test($tel)) {
		$("#exampleModalCenterTitle").html('');
		$("#exampleModalCenterBody").html("<span class='font-size-30 margin-top-50'>СПАСИБО ЗА ЗАЯВКУ!</span><br><span class='font-size-22'>Наш менеджер перезвонит Вам<br> в ближайшее время.</span>");
		$("#exampleModalCenterContent").css('height', '290px');
	} else {
		$("#error-name").html('');
		$("#error-tel").html('Неверный номер телефона!');
	}
}

function FormAside() {
	var $name = $("#name-aside").val();
	var $tel = $("#tel-aside").val();
	var $paretn = /[\d\(\)\ -\+]{4,14}\d$/;

	if ($name == '') {
		$(".error-name").html('Вы не ввели имя!');
	} else if ($tel == '') {
		$(".error-name").html('');
		$(".error-tel").html('Вы не ввели телефон!');
	} else  if ($paretn.test($tel)) {
		$("#form-timer").html("<span class='font-size-30 margin-top-50'>СПАСИБО ЗА ЗАЯВКУ!</span><br><span class='font-size-22'>Наш менеджер перезвонит Вам<br> в ближайшее время.</span>");
		$("#form-timer").css('height', '258px');
		$("#form-timer").css('color', '#2E353D');
	} else {
		$(".error-name").html('');
		$(".error-tel").html('Неверный номер телефона!');
	}
}

function FormGorizontal() {
	var $name = $("#name-gorizontal").val();
	var $tel = $("#tel-gorizontal").val();
	var $paretn = /[\d\(\)\ -\+]{4,14}\d$/;

	if ($name == '') {
		$(".error-name-gorizontal").html('Вы не ввели имя!');
		$(".error-name-gorizontal").css('padding-left', '45px');
		$(".timer-gorizontal").css('height', '185px');
	} else if ($tel == '') {
		$(".error-name-gorizontal").html('');
		$(".error-tel-gorizontal").html('Вы не ввели телефон!');
		$(".error-name-gorizontal").css('padding-left', '0');

		$(".error-tel-gorizontal").css('padding-left', '45px');
		$(".timer-gorizontal").css('height', '165px');

	} else  if ($paretn.test($tel)) {
		$("#form-timer-down").css('text-align', 'center');
		$(".timer-gorizontal").css('height', '150px');

		$("#form-timer-down").html("<span class='font-size-30 margin-top-50'>СПАСИБО ЗА ЗАЯВКУ!</span><br><span class='font-size-22'>Наш менеджер перезвонит Вам<br> в ближайшее время.</span>");
	} else {
		$(".error-name-gorizontal").html('');
		$(".error-tel-gorizontal").html('Неверный номер телефона!');
		$(".error-name-gorizontal").css('padding-left', '0');
		$(".error-tel-gorizontal").css('padding-left', '45px');
		$(".timer-gorizontal").css('height', '165px');

	}
}

function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initializeClock(id, id2, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');

	var clock2 = document.getElementById(id2);
	var daysSpan2 = clock2.querySelector('.days');
	var hoursSpan2 = clock2.querySelector('.hours');
	var minutesSpan2 = clock2.querySelector('.minutes');
	var secondsSpan2 = clock2.querySelector('.seconds');

	function updateClock() {
		var t = getTimeRemaining(endtime);

		daysSpan.innerHTML = ('0' + t.days).slice(-2);
		hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

		daysSpan2.innerHTML = ('0' + t.days).slice(-2);
		hoursSpan2.innerHTML = ('0' + t.hours).slice(-2);
		minutesSpan2.innerHTML = ('0' + t.minutes).slice(-2);
		secondsSpan2.innerHTML = ('0' + t.seconds).slice(-2);

		if (t.total <= 0) {
			clearInterval(timeinterval);
		}
	}

	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + $time * 1000);
window.onload = function () {
	initializeClock('countdown', 'countdown2', deadline);
}

$(document).ready(function() {
	$(".fancybox").fancybox();
});