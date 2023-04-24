$(document).foundation()

// get user info from local storage if there is any

var userCredentials = localStorage.getItem("userAccountInformation");

// parse userCredentials

var userNewAccountInfo = JSON.parse(userCredentials);
console.log(userNewAccountInfo);
console.log(userNewAccountInfo.userName);
console.log(userNewAccountInfo.passWord);
console.log(userNewAccountInfo.userImage);

// get previous user data from local storage (this one has the score in it)

var lastUser = localStorage.getItem("userInfoAll");

// parse previous user data form userInfoAll

var lastUserInfo = JSON.parse(lastUser);

// log lastUserInfo (for the userScore)

console.log(lastUserInfo[3][1]);

// put userImage on the page (from the userAccountInformation array)

const userImageHolder = document.getElementById("userImageGoesHere");

document.getElementById("userImageGoesHere").innerHTML = "<img src='../images/" + userNewAccountInfo.userImage + ".svg' alt='userImage'/>";

// put user information (username and password) on the page

document.getElementById("userName").innerHTML = userNewAccountInfo.userName;

document.getElementById("userPass").innerHTML = userNewAccountInfo.passWord;

//place holder score for a new user if userNewAccountInfo.userName is equal to userInfoAll[0][1] then scoreHolder = userInfoAll[3][1]

if (userNewAccountInfo.userName == lastUserInfo[0][1]) {
    scoreHolder = lastUserInfo[3][1];
}

else { 
    scoreHolder = 0;
}

// put score on screen

document.getElementById("scoreHere").innerHTML = scoreHolder;

// create new array with score

var userScore = scoreHolder;

const userInfoAll = [
    ['userName', (userNewAccountInfo.userName)],
    ['userPassword', (userNewAccountInfo.passWord)],
    ['userImage', (userNewAccountInfo.userImage)],
    ['UserScore', (userScore)],
]

console.log(userInfoAll);

// button action - add point to userInfoAll userScore

function addPoint() {
    userScore++;
    userInfoAll[3][1] = userScore;
    document.getElementById("scoreHere").innerHTML = userScore;
}


// button action - on click (save my score button) store userInfoAll to local storage and console log

function storeUserData() {
    console.log(userInfoAll);

    // add userInfoAll to local storage

    localStorage.setItem("userInfoAll", JSON.stringify(userInfoAll));

}