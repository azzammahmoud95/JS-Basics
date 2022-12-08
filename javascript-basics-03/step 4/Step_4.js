let password = document.getElementById("password");
let confirmation = document.getElementById("confirmation");

document.querySelector("button").addEventListener("click", function(){
    if(password.value != confirmation.value){
        password.style.border = "3px solid red"
        confirmation.style.border = "3px solid red"
    }else{
        console.log("Thank You Mentors!!!")
    }
})