$(document).foundation()

// get user info from local storage

var userCredentials = localStorage.getItem("userInformation");
var userInfo = JSON.parse(userCredentials);

console.log(userCredentials);

console.log(userInfo.userName);

console.log(userInfo.passWord);

// put user information on the page

document.getElementById("userName").innerHTML = userInfo.userName;

document.getElementById("userPass").innerHTML = userInfo.passWord;

