function gotowhatsappmain() {

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var service = document.getElementById("service").value;
var msg = document.getElementById("message").value;

var url = "https://wa.me/917007456726?text="
    + "Name: " + name + "%0a"
    + "Email: " + email + "%0a"
    + "Service: " + service + "%0a"
    + "Message" + msg;


window.open(url, '_blank').focus();
}

gotowhatsappmain();
