const userName = prompt("Ismingizni kiriting"); 
if(userName === ""){
    prompt("ILTIMOS Ismingizni kiriting");
}
const userAge = +prompt("Yoshingizni kiriting");
if(userAge === 0 || userAge === ""){
    prompt("ILTIMOS Yoshingizni kiriting");
}else if(userAge < 18){
    alert("Siz hali voyaga yetmagansiz");
}
const userMarried = confirm("Uylanganmisiz?");
if(userMarried === ""){
    prompt("ILTIMOS Uylanganmisiz?");
}
const userHobby = prompt("Hobiyingizni kiriting");
if(userHobby === ""){
    prompt("ILTIMOS Hobiyingizni kiriting");
}
const userCity = prompt("Qayerda yashaysiz?");
if(userCity === ""){
    prompt("ILTIMOS Qayerda yashaysiz?");
}
const userFamiliy = prompt("Olida nechanchi farzandsiz?");
if(userFamiliy === ""){
    prompt("ILTIMOS Olida nechanchi farzandsiz?");
}



const aboutUser = {
    name: userName,
    age: userAge,
    married: userMarried,
    hobby: userHobby,
    city: userCity,
    family: userFamiliy
}



const userName1 = document.createElement("h1");
userName1.innerHTML = `Ismingiz: ${aboutUser.name}`;
document.body.appendChild(userName1);

const userAge1 = document.createElement("h1");
userAge1.innerHTML = `Yoshingiz: ${aboutUser.age}`;
document.body.appendChild(userAge1);

const userMarried1 = document.createElement("h1");
userMarried1.innerHTML = `Uylanganmisiz: ${aboutUser.married}`;
document.body.appendChild(userMarried1);

const userHobby1 = document.createElement("h1");
userHobby1.innerHTML = `Hobiyingiz: ${aboutUser.hobby}`;
document.body.appendChild(userHobby1);

const userCity1 = document.createElement("h1");
userCity1.innerHTML = `Qayerda yashaysiz: ${aboutUser.city}`;
document.body.appendChild(userCity1);

const userFamiliy1 = document.createElement("h1");
userFamiliy1.innerHTML = `Olida nechanchi farzandsiz: ${aboutUser.family}`;
document.body.appendChild(userFamiliy1);