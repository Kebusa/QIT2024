const row = document.querySelector(".row")

const data = ["color", "size" , "width", "type"]

data.forEach((item) =>{
    const pill = document.createElement('span')
    pill.style.background = "grey"
    pill.style.padding = "10px"
    pill.style.color = "white"
    pill.style.borderRadius = "20px"
    pill.style.marginRight = "20px"
    pill.innerHTML =  item 

    row.appendChild(pill)

    const closeButton = document.createElement('button')
    closeButton.textContent = 'x'
    closeButton.style.background = "grey"
    closeButton.style.border = "none"

    pill.appendChild(closeButton)

    closeButton.addEventListener('click', () => {
        pill.remove()
    })

    pill.addEventListener('dblclick', () => {
        const fix = document.createElement('input')

        row.replaceChild(fix, pill)
    })

} ) 


const parent = document.querySelector(".container")
const child = document.getElementById("second")

const button = document.getElementById("removeButton")

button.addEventListener('click', () => {
    parent.removeChild(child);

})


const date = [
    {title:'"Абай жолы " - Мухтар Әуезов', description: 'Абайдың қазақ қоғамының тарихи шежіресі.'},
    {title:'"Қани мен тер " - Әбдіжәміл Нұрпейісов', description: 'Қазақ халқымның қиын кезеңдерінің эпикалық баяаны.'},
    {title:'"Көшпенділер " - Ілияс Есенберлин', description: 'Қазақ хандығының қалыптасу тарихы.'},
    {title:'"За нами Москва" - Александр Век', description: 'Панфиловшылардың ержүректігі туралы тарихи деректі роман.'},
]

const card = document.createElement('div')

card.style.width = "175px"
card.style.height = "100px"
card.style.border = "solid black"
card.innerHTML = data.title
