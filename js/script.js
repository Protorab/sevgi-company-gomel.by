$(function () {
  var slider = $('.slider'),
    sliderContent = slider.html(), // Содержимое слайдера
    slideWidth = $('.slider-box').outerWidth(), // Ширина слайдера
    slideCount = $('.slider .slide').length, // Количество слайдов
    prev = $('.slider-box .prev'), // Кнопка "назад"
    next = $('.slider-box .next'), // Кнопка "вперед"
    sliderInterval = 3300, // Интервал смены слайдов
    animateTime = 500, // Время смены слайдов
    course = 1, // Направление движения слайдера (1 или -1)
    margin = -slideWidth; // Первоначальное смещение слайдов
  $('.slider .slide:last').clone().prependTo('.slider'); // Копия последнего слайда помещается в начало.
  $('.slider .slide').eq(1).clone().appendTo('.slider'); // Копия первого слайда помещается в конец.  
  $('.slider').css('margin-left', -slideWidth); // Контейнер .slider сдвигается влево на ширину одного слайда.
  function nextSlide() { // Запускается функция animation(), выполняющая смену слайдов.
    interval = window.setInterval(animate, sliderInterval);
  }

  function animate() {
    if (margin == -slideCount * slideWidth - slideWidth) { // Если слайдер дошел до конца
      slider.css({
        'marginLeft': -slideWidth
      }); // то блок .slider возвращается в начальное положение
      margin = -slideWidth * 2;
    } else if (margin == 0 && course == -1) { // Если слайдер находится в начале и нажата кнопка "назад"
      slider.css({
        'marginLeft': -slideWidth * slideCount
      }); // то блок .slider перемещается в конечное положение
      margin = -slideWidth * slideCount + slideWidth;
    } else { // Если условия выше не сработали,
      margin = margin - slideWidth * (course); // значение margin устанавливается для показа следующего слайда
    }
    slider.animate({
      'marginLeft': margin
    }, animateTime); // Блок .slider смещается влево на 1 слайд.
  }

  function sliderStop() { // Функция преостанавливающая работу слайдера      
    window.clearInterval(interval);
  }

  prev.click(function () { // Нажата кнопка "назад"
    if (slider.is(':animated')) {
      return false;
    } // Если не происходит анимация
    var course2 = course; // Временная переменная для хранения значения course
    course = -1; // Устанавливается направление слайдера справа налево
    animate(); // Вызов функции animate()
    course = course2; // Переменная course принимает первоначальное значение
  });
  next.click(function () { // Нажата кнопка "назад"
    if (slider.is(':animated')) {
      return false;
    } // Если не происходит анимация
    var course2 = course; // Временная переменная для хранения значения course
    course = 1; // Устанавливается направление слайдера справа налево
    animate(); // Вызов функции animate()
    course = course2; // Переменная course принимает первоначальное значение
  });

  slider.add(next).add(prev).hover(function () { // Если курсор мыши в пределах слайдера
    sliderStop(); // Вызывается функция sliderStop() для приостановки работы слайдера
  }, nextSlide); // Когда курсор уходит со слайдера, анимация возобновляется.

  nextSlide(); // Вызов функции nextSlide()
});


// ======================================================================

$(function () {
  var close = $('.close-menu');
  var link = $('.m-menu-link');
  var menu = $('.m-menu');
  link.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  });
  close.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  });
});

window.addEventListener("DOMContentLoaded", function () {

  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");
  var status = document.getElementById("my-form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    // button.style = "display: none ";
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

$('._show_form').click(function (e) {
  var msg= $(this).attr('title')
  $('#message').text("Хочук узать подробнее про "+msg);
  $('.form_overley').fadeIn();
  $('.form_wrap').fadeIn();
  e.preventDefault();

});
$(document).ready(function () {
  $('.send_btn').click(function (e) {
    $('#my-form-button').click(); 
    e.preventDefault();
  });
});
$('.close_form').click(function (e) {
  $('.form_overley').fadeOut();
  $('.form_wrap').fadeOut();
  e.preventDefault();
});
$('.form_overley').click(function (e) { 
  $('.form_overley').fadeOut();
  $('.form_wrap').fadeOut();
  e.preventDefault();
  
});
