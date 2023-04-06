let userName = document.querySelectorAll('input')[0];
let userPhoto = document.querySelectorAll('input')[1];
let userComment = document.querySelectorAll('textarea')[0];

let photo = document.querySelector('.user-photo');
let userChat = document.querySelectorAll('textarea')[1];



function sending(){
let userNameV = userName.value;
let userCommentV = userComment.value;


let userPhotoV = userPhoto.value;
photo.innerHTML = `<img class="user-photo" src=${userPhotoV} alt="фото пользователя">`;


userChat.value =`
${userNameV}
${userCommentV}`;
}

