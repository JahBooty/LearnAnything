$(document).foundation()

// submit username + password

const form = document.querySelector('form');

form.addEventListener('submit', submitNewAccountButton);


function submitNewAccountButton(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const userAccountInfo = Object.fromEntries(data.entries());

    // store userAccountInfo in local storage

    window.localStorage.setItem('userAccountInformation', JSON.stringify(userAccountInfo));

  
    //take user to home page

    window.location.href = ("../pages/homePage.html");

}


 




