$(document).foundation()

// parse previous user data (look for previously created account)

var lastUser = localStorage.getItem("userInfoAll");

console.log(lastUser)

// build the form

document.getElementById("signIn").innerHTML = "<label for='Uname'>" + "User name:" + "</label>" + "<br>" + "<input type='text' id='Uname' name='userName' value='Name'>" + "<br>" + "<label for='passWord'>" + "Password:" + "</label>" + "<br>" + "<input type='text' id='passWord' name='passWord' value='Password'>" + "<br>" + "<br>" + "<input type='submit' value='Submit' class='large button submit' id='submitSignIn'>";

const form = document.querySelector('form');

// look for the submit button 

form.addEventListener('submit', handleSubmit);

// when the submit button is clicked

function handleSubmit(event) {
    event.preventDefault();

    // build data object from the form

    const data = new FormData(event.target);

    // put submitted user data from the form (userSignInInfo) in local storage as an array (userSignInInfo) don't really need this

    const userSignInInfo = Object.fromEntries(data.entries());

    window.localStorage.setItem('userInformation', JSON.stringify(userSignInInfo));

    // get the data compare sign in and return account

    var userCredentials = localStorage.getItem("userAccountInformation");

    // parse userCredentials (previously created account)

    var userNewAccountInfo = JSON.parse(userCredentials);

    // if user names and passwords match send user to home page otherwise alert user

    if (userSignInInfo.userName === userNewAccountInfo.userName && userSignInInfo.passWord === userNewAccountInfo.passWord) {

        window.location.href = "homePage.html";

    } else {
        alert("Incorrect username or password");
        window.location.href = "createAccount.html";

    }
}