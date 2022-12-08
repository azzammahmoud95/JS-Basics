document.querySelector("button").onclick = function(){

let name  = document.getElementById("name");
let surname  = document.getElementById("surname");
let city  = document.getElementById("city");

if (confirm("Do you want to clear Fields?")){
    name.value = "";
    surname.value = "";
    city.value = "";
}
}