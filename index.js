let userName = document.querySelectorAll('input')[0];
let userPhoto = document.querySelectorAll('input')[1];
let userComment = document.querySelectorAll('textarea')[0];

let photo = document.querySelector('.user-photo');
let userChat = document.querySelectorAll('textarea')[1];



function sending(){ 
let userNameV = userName.value;
let arr = userNameV.split(' ');
let userNameV1 = arr[0];
let userNameV2 = arr[1];
let userNameV3 = arr[2];

userNameV = (userNameV1[0].toUpperCase() + (userNameV1.slice(1)).toLowerCase())+`${' '}`
+(userNameV2[0].toUpperCase() + (userNameV2.slice(1)).toLowerCase())+`${' '}`
+(userNameV3[0].toUpperCase() + (userNameV3.slice(1)).toLowerCase());

let userPhotoV = userPhoto.value;
photo.innerHTML = `<img class="user-photo" src=${userPhotoV} alt="фото пользователя">`;

let userCommentV = userComment.value;

userChat.value =`
${userNameV}
${userCommentV}`;
}

