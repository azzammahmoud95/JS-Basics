let div1  = document.createElement("div");
let input1 = document.querySelector("input");


input1.addEventListener("blur" ,function(){
div1.innerHTML = input1.value;
});

document.body.appendChild(div1);
