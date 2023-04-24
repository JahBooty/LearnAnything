$(document).foundation()

// submit button adds username, password, and image selection to userAccountInformation in local storage from the form

const form = document.querySelector('form');

form.addEventListener('submit', submitNewAccountButton);

function submitNewAccountButton(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const userAccountInfo = Object.fromEntries(data.entries());

    // store userAccountInformation in local storage

    window.localStorage.setItem('userAccountInformation', JSON.stringify(userAccountInfo));

    // take user to home page

    window.location.href = ("../pages/homePage.html");

}