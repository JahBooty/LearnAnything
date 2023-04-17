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


// combine userInfo and userScore

var userScore = 0;

const userInfoWithScore = [
    ['userName', (userInfo.userName)],
    ['userPassword', (userInfo.passWord)],
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


