$(document).foundation()

// click event example 

/* document.getElementById("submitSignIn").addEventListener("click", function () {
    alert("Hello World!");
}); */

// build the form

document.getElementById("signIn").innerHTML = "<label for='Uname'>" + "User name:" + "</label>" + "<br>" + "<input type='text' id='Uname' name='userName' value='Name'>" + "<br>" +
    "<label for='passWord'>" + "Password:" + "</label>" + "<br>" +
    "<input type='text' id='passWord' name='passWord' value='Password'>" + "<br>" + "<br>" + "<input type='submit' value='Submit' class='large button submit' id='submitSignIn'>";

// submit username + password from form

const form = document.querySelector('form');

// make the submit button work

form.addEventListener('submit', handleSubmit);

// when the submit button is clicked

function handleSubmit(event) {
    event.preventDefault();

    // build data object from form

    const data = new FormData(event.target);

    // put submitted user info in local storage as an array (userSignInInfo)

    const userSignInInfo = Object.fromEntries(data.entries());

    window.localStorage.setItem('userInformation', JSON.stringify(userSignInInfo));

    // get user info from local storage 

    var userCredentials = localStorage.getItem("userInformation");

    // get user userNewAccountInfo from local storage 

    var userCredentialsAll = localStorage.getItem("userAccountInformation");

    // parse userCredentials (sign in) and userCredentialsAll (create account)

    var userNewAccountInfo = JSON.parse(userCredentialsAll);

    console.log(userSignInInfo.userName);

    console.log(userSignInInfo.passWord);

    console.log(userNewAccountInfo.userName);

    console.log(userNewAccountInfo.passWord);

    console.log(userNewAccountInfo.check);

    // if user names and passwords match send user to home page otherwise alert user

    if (userSignInInfo.userName === userNewAccountInfo.userName && userSignInInfo.passWord === userNewAccountInfo.passWord) {

        window.location.href = "homePage.html";

    } else {
        alert("Incorrect username or password");
        window.location.href = "createAccount.html";

    }
}