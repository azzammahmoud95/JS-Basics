const images = document.querySelectorAll("img");

images.forEach((i)=> {
    i.addEventListener("mouseover",(i) =>{
        i.target.src = `images/${i.target.id}_2.jpg`
    })
    i.addEventListener("mouseout",(i) =>{
        i.target.src = `images/${i.target.id}.jpg`
    })
})

