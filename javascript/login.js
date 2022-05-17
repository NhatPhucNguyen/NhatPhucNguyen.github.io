var form = document.querySelector('form');
var userName = document.getElementById("username");
var email = document.getElementById("email");
var loginBtn = document.getElementById("login-btn");
function CreateCookies() {    
    document.cookie = "username=" + encodeURIComponent(userName.value);
    document.cookie = "email=" + encodeURIComponent(email.value);
    var cookeString = decodeURIComponent(document.cookie);
    var cookieArray = cookeString.split(";");    
    var currUsername;
    for (let i = 0; i < 2; i++) {
        currUsername = cookieArray[i];
        if (currUsername.substring(0, currUsername.indexOf("=")) === "username") {
            userName.value = currUsername.substring(currUsername.indexOf("=") + 1, currUsername.length);
        }
    }    
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 7);
    document.cookie = "username=" + encodeURIComponent(userName.value) + ";expire" + expireDate.toUTCString();
}
loginBtn.addEventListener('click', function () {    
    CreateCookies();
});
