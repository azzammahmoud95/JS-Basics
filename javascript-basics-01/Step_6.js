document.getElementById("validate").onclick = function(){

    let  num1= document.getElementById("first_number").value;
    let num2 = document.getElementById("second_number").value;
    div = num1 / num2;
    rest = num1 % num2;
    alert("Division: " + div + "\n" + "Rest Of division : " +rest);
    }