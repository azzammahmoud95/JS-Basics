let a = document.querySelectorAll("a");
let p = document.querySelector("p");

a.forEach((e) => {
    e.addEventListener("click",(e)=> {
        if(e.target.id == "hide"){
            p.style = "display: none"
        }
        else{
            p.style = "display: block"
    }
    })
});


