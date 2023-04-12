let userName = document.querySelectorAll('input')[0]; //поле для ввода имени
let userPhoto = document.querySelectorAll('input')[1]; //поле для ввода ссылки на фото
let userComment = document.querySelectorAll('textarea')[0];//поле для ввода комментария

let photo = document.querySelector('.user-photo');//контейнер для вывода фото 
let userChat = document.querySelectorAll('textarea')[1];//контейнер для вывода ФИО и комментария 
let commentDate = document.querySelectorAll('textarea')[2]; //контейнер для вывода даты

function sending(){ 
let userNameV = userName.value; // введенное ФИО записали в переменную
let arr = userNameV.split(' '); //переведли строку с ФИО в массив
let userNameV1 = arr[0]; 
let userNameV2 = arr[1]; 
let userNameV3 = arr[2];

if(arr.length >=3) { // функция для проверки и вывода имени
userNameV =
(userNameV1[0].toUpperCase() + (userNameV1.slice(1)).toLowerCase())+`${' '}`
+(userNameV2[0].toUpperCase() + (userNameV2.slice(1)).toLowerCase())+`${' '}`
+(userNameV3[0].toUpperCase() + (userNameV3.slice(1)).toLowerCase());
} else if (arr.length ===2){
  userNameV =
(userNameV1[0].toUpperCase() + (userNameV1.slice(1)).toLowerCase())+`${' '}`
+(userNameV2[0].toUpperCase() + (userNameV2.slice(1)).toLowerCase());
} else {userNameV =
userNameV1[0].toUpperCase() + (userNameV1.slice(1)).toLowerCase();}



if(userPhoto.value == ' '){
  let img = "https://mobimg.b-cdn.net/v3/fetch/74/74739e1770f31cdbfdde99cc0b2925d3.jpeg?w=1470&r=0.5625";
photo.innerHTML = `<img class="user-photo" src=${img} alt="фото пользователя">`;
} else {
  let userPhotoV = userPhoto.value; // ссылку на фото из поля ввода записываем в переменную
  photo.innerHTML = `<img class="user-photo" src=${userPhotoV} alt="фото пользователя">`;// в контейнер для фото подставляем переменную со ссылкой от пользователя и выводим
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






/// задание со звездочкой
let text1 = document.querySelectorAll('textarea')[2];
let text2 = document.querySelectorAll('textarea')[3];

function deleteTags() {
  let textValue = text1.value;
  textValue = textValue.replace(/<\/?[a-zA-Z]+>/gi,'');
  text2.value = textValue;
};
/////////////////////////
