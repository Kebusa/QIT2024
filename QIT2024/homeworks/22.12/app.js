let posts = [];

function addPost() {
    const titleInput = document.getElementById('titleInput')
    const contentInput = document.getElementById('contentInput')

    if (titleInput.value && contentInput.value) {
        const post = {
            id: Date.now(),
            title: titleInput.value,
            content: contentInput.value,
            date: new Date().toLocaleDateString('kk-KZ')
        }

        posts.push(post)
        
        renderPosts()

        titleInput.value = ""
        contentInput.value = ""
    }
}



document.getElementById('addPostBtn').addEventListener('click', addPost)

function removePost(id) {
    posts = posts.filter(post => post.id !== id)
    renderPosts()
}

function editPost(id) {
    const post = posts.filter(post => post.id === id)

    document.getElementById('titleInput').value = post.title
    document.getElementById('contentInput').value = post.content
    
    removePost(id)
}

function renderPosts() {
    const blogPostsDiv = document.getElementById('blogPosts')
    blogPostsDiv.innerHTML = ""
    

    posts.forEach(post => {
        const postDiv = document.createElement('div')
        postDiv.className = 'post'
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <small>${post.date}</small>
            <button onclick="editPost(${post.id})" class="button" style="background-color: orange">Өңдеу</button>
            <button onclick="removePost(${post.id})" class="button" style="background-color: red">Жою</button>`
               
        blogPostsDiv.appendChild(postDiv)
    });
}