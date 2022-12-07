document.getElementById("validate").onclick = function(){

    let user_age = document.getElementById("age").value;
    if(user_age > 18){
        alert("You are over 18.")
    }else{
        alert("You are under 18.")
    }
}