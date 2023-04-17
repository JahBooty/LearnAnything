$(document).foundation()

// click event example 

/* document.getElementById("submitSignIn").addEventListener("click", function () {
    alert("Hello World!");
}); */

// build the form

document.getElementById("signIn").innerHTML = "<label for='Uname'>" + "User name:" + "</label>" + "<br>" + "<input type='text' id='Uname' name='userName' value='Name'>" + "<br>"
+ "<label for='passWord'>" + "Password:" + "</label>" + "<br>"
+ "<input type='text' id='passWord' name='passWord' value='Password'>" + "<br>" + "<br>" + "<input type='submit' value='Submit' class='large button submit' id='submitSignIn'>"; 

// submit username + password

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const userInfo = Object.fromEntries(data.entries());

    // store user info in local storage

    window.localStorage.setItem('userInformation', JSON.stringify(userInfo));


    //take user to home page

    window.location.href = ("../pages/homePage.html");

}





