$(document).foundation()

// get user info from local storage from sign in page

var userCredentials = localStorage.getItem("userInformation");

// get user info from local storage from new account page

var userCredentialsAll = localStorage.getItem("userAccountInformation");


// parse userCredentials and userCredentialsAll

var userSignInInfo = JSON.parse(userCredentials);
var userNewAccountInfo = JSON.parse(userCredentialsAll);

console.log(userCredentials);

console.log(userCredentialsAll);

console.log(userSignInInfo.userName);

console.log(userSignInInfo.passWord);

console.log(userNewAccountInfo.userName);

console.log(userNewAccountInfo.passWord);

console.log(userNewAccountInfo.check);


// put user information on the page (this is from user sign in page)

document.getElementById("userName").innerHTML = userSignInInfo.userName;

document.getElementById("userPass").innerHTML = userSignInInfo.passWord;


// combine userSignInInfo and userScore in one array

var userScore = 0;

const userInfoWithScore = [
    ['userName', (userSignInInfo.userName)],
    ['userPassword', (userSignInInfo.passWord)],
    ['userScore', (userScore)]
]

console.log(userInfoWithScore);

// put userScore on the page

document.getElementById("scoreHere").innerHTML = userScore;

// add point to userScore and userInfoWithScore

function addPoint() {
    userScore++;
    userInfoWithScore[2][1] = userScore;
    document.getElementById("scoreHere").innerHTML = userScore;
}

// on click log userInformationWithScore to console

function getUserScore() {
    console.log(userInfoWithScore);
    console.log(userScore);
}


