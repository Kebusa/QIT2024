// const heading = document.getElementById("heading")
// console.log(heading.textContent);

// const contain = document.getElementsByClassName("box")
// console.log(contain[0].textContent);
// for (let i = 0; i < contain.length; i++) {
//     console.log(contain[i].textContent);
    
    
// }



// const firstBox = document.querySelector(".box")
// console.log(firstBox.textContent);

// const boxes = document.querySelectorAll(".box")
// boxes.forEach((box) => console.log(box.textContent))  

// firstBox.innerHTML = "<b>Hello</b>"
// boxes[2].innerHTML = "<i>Good bye</i>"
// heading.textContent = "Kazakhstan"  




// const boxes = document.querySelectorAll("")

const news = document.getElementById("news-content")
news.textContent = "Жаңа тақырып ол бізде ДОМ"
news.style.color = "Red"
news.style.border = "1px limeGreen solid "
news.style.background = "limeGreen"
news.style.borderRadius = "10px"

const newTask = document.getElementById("news-title")
newTask.textContent = "Жаңа тақырып"


const newLink = document.getElementById("news-link")
newLink.innerHTML = "<b> Newspaper </b>"
function linkToRed(params) {
    newLink.style.color = "red"  
}



const card = document.querySelector("#news-card")

card.style.width = "200px"
card.style.border = "4px black dotted"
card.style.borderRadius = "18px"
card.style.background = "yellow"
card.style.marginLeft = "40%"
card.style.marginTop = "250px"