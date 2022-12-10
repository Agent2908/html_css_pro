const content=document.querySelectorAll("img");
const list=document.querySelectorAll("ul li a")
content[0].classList.add("show")
list.forEach((e,i) => {
    e.addEventListener("click",() => {
        content.forEach(el => {
            el.classList.add("hide")
        })
        content[i].classList.add("show")
    })
}) 