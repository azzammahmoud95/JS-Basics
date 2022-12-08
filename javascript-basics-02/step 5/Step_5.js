const images = document.querySelectorAll("img");

images.forEach((e)=>{
    e.addEventListener("mouseover",(e) =>{
        e.target.src = `images/${e.target.id}_2.jpg`
    } )
})