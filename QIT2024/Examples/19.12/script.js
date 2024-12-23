const taskInput = document.getElementById('taskInput')
const searchInput = document.getElementById('searchInput')
const addButton = document.getElementById('addButton')
const searchButton = document.getElementById('searchButton')
const toDoList = document.getElementById('toDoList')


addButton.addEventListener('click', () =>{  
    if (taskInput.value !== "") {
    const task = document.createElement('li')
    const span = document.createElement('span')
    const deleteButton = document.createElement('button')

    deleteButton.textContent = "🗑️"
    span.textContent = taskInput.value
    taskInput.value = ""

    task.style.width = "200px"
    task.style.display = "flex"
    task.style.justifyContent = "space-between"
    task.style.backgroundColor = "#d1d1d1"
    task.style.padding = "5px"

    task.appendChild(span) // task createElement ke , span createElementin kosu uchin
    task.appendChild(deleteButton)
    toDoList.appendChild(task)
    
    task.addEventListener('dblclick', () => {
        const changeName = document.createElement('input')
        changeName.placeholder = "Change name"

        task.replaceChild(changeName, span)
        changeName.addEventListener('blur', () => {
            span.textContent = changeName.value
    
            task.replaceChild(span, changeName)
        })
    })

    deleteButton.addEventListener('click', () => {
        task.remove()
    })
    };

    searchButton.addEventListener('click',() => {
        const tasks = document.querySelectorAll('li')
    

        tasks.forEach(task => {
            if (!task.textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
                task.style.display = 'none'
            }
            else{
                task.style.display = 'flex'
            }
        });    
    });


});


