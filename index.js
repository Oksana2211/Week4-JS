let userName = document.querySelectorAll('input')[2]; //поле для ввода имени
let userPhoto = document.querySelectorAll('input')[3]; //поле для ввода ссылки на фото
let userComment = document.querySelectorAll('textarea')[0];//поле для ввода комментария

let photo = document.querySelector('.user-photo');//контейнер для вывода фото 
let userChat = document.querySelectorAll('textarea')[1];//контейнер для вывода ФИО и комментария 
let commentDate = document.querySelectorAll('textarea')[2]; //контейнер для вывода даты

function clickNo() {
userName.classList.add("ckeckNo");
userName.value = '';
}

function clickYes() {
userName.classList.remove("ckeckNo");
}

function sending(){ 
let userNameV = userName.value; // введенное ФИО записали в переменную
let arr = userNameV.split(' '); //перевели строку с ФИО в массив
let userNameV1 = arr[0]; 
let userNameV2 = arr[1]; 
let userNameV3 = arr[2];


if (userName.value === '') {userNameV = "username"  // функция для проверки и вывода имени
} else if(arr.length >=3) { 
userNameV =
(userNameV1[0].toUpperCase() + (userNameV1.slice(1)).toLowerCase())+`${' '}`
+(userNameV2[0].toUpperCase() + (userNameV2.slice(1)).toLowerCase())+`${' '}`
+(userNameV3[0].toUpperCase() + (userNameV3.slice(1)).toLowerCase());
} else if (arr.length === 2){
  userNameV =
(userNameV1[0].toUpperCase() + (userNameV1.slice(1)).toLowerCase())+`${' '}`
+(userNameV2[0].toUpperCase() + (userNameV2.slice(1)).toLowerCase());
} else {
userNameV =
userNameV1[0].toUpperCase() + (userNameV1.slice(1)).toLowerCase();
}

if(userPhoto.value == ''){
let randomImage = new Array(); //записали картинки в массив
randomImage[0]= "/img/1.png";
randomImage[1]= "/img/2.png";
randomImage[2]= "/img/3.png";
randomImage[3]= "/img/4.png";
randomImage[4]= "/img/5.png";
randomImage[5]= "/img/6.png";
let number = Math.floor(Math.random()*randomImage.length); 
photo.innerHTML = `<img class="user-photo" src="${randomImage[number]}" alt="фото пользователя">`; //выводим рандомную картинку из массива в контейнер для фото
} else {
  let userPhotoV = userPhoto.value; // ссылку на фото из поля ввода записываем в переменную
  photo.innerHTML = `<img class="user-photo" src="${userPhotoV}" alt="фото пользователя">`;// в контейнер для фото подставляем переменную со ссылкой от пользователя и выводим
}

let userCommentV = userComment.value.toLowerCase(); // из поля ввода берем комментарий от пользователя и записываем в переменную

if(userCommentV.includes('viagra')){ //функция для проверки на спам
userCommentV = userCommentV.replace(/viagra/gi, "***");
userChat.value =`
${userNameV}
${userCommentV}`}
if (userCommentV.includes('xxx')){
userCommentV = userCommentV.replace(/xxx/gi, "***");
userChat.value =`
${userNameV}
${userCommentV}`
}
else {
userChat.value =`
${userNameV}
${userCommentV}`
}// после проверки выводим имя и комментарий в соответствующий контейнер

let now = new Date(); // текущую дату записываем в переменную 
now = String(now); //преобразуем в строку
let nowD = now.slice(0,25) // и вырезаем нужные показания
commentDate.value =`${nowD}` //выводим время и дату в контейнер
}


/// задание со звездочкой 13 неделя
function formatDate(date) {

let now = new Date(); // текущая дата

let year = now.getFullYear(); //текущий год
let day = now.getDate()-1; // дата на день назад
let month = now.getMonth()+1; // текущий месяц

function addZero(i) {
  if (i < 10) {i = "0" + i} // для вывода времени в формате 11:05:09
  return i;
}
let h = addZero(now.getHours());// часы
let m = addZero(now.getMinutes());// минуты
let s = addZero(now.getSeconds());// секунды
let time = h + ":" + m + ":" + s; // текущее время

let yesterday =(`${day}.0${month}.${year} ${time}`);

let newD = new Date() - date; // date - параментр из условаия задачи (new Date - 1);(new Date - 30 * 1000);(new Date - 5 * 60 * 1000);(new Date - 86400 * 4 * 1000);

if (newD <= 1) { console.log("прямо сейчас")}
else if (newD > 1 && newD <= 30000 ){console.log("30 сек. назад")}
else if (newD > 30000 && newD <= 300000)  {console.log("5 мин. назад")}
else {console.log(yesterday)}
}
//условия задачи:
formatDate(new Date(new Date - 1)); //"прямо сейчас"
formatDate(new Date(new Date - 30 * 1000)); //"30 сек. назад"
formatDate(new Date(new Date - 5 * 60 * 1000)); //"5 мин. назад"
formatDate(new Date(new Date - 86400 * 4 * 1000)); // дата и время на день назад
/////////////////////////


/// задание со звездочкой 12 неделя
let text1 = document.querySelectorAll('textarea')[2];
let text2 = document.querySelectorAll('textarea')[3];

function deleteTags() {
  let textValue = text1.value;
  textValue = textValue.replace(/<\/?[a-zA-Z]+>/gi,'');
  text2.value = textValue;
};
/////////////////////////