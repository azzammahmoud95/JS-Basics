document.getElementById("validate").onclick = function(){

    let  shoesize = document.getElementById("shoe_size").value;
    let birthday = document.getElementById("year").value;


    alert(`Result: ${(shoesize * 2 + 5) * 50 - birthday + 1766}`);
    }