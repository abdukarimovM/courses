let one_course =JSON.parse(localStorage.getItem('open_course'));

let title = document.querySelector('.title');
let price = document.querySelector('.price');
let img = document.querySelector('.img');

title.innerHTML =one_course.title;
price.innerHTML =one_course.price + "so'm";
img.src =`../img/${one_course.img}`;

let span_title = document.querySelector('.span_title');
let span_price = document.querySelector('.span_price');
let span_img = document.querySelector('.span_img');

span_title.innerHTML =one_course.title;
span_price.innerHTML =one_course.price
span_type.innerHTML =one_course?.type;