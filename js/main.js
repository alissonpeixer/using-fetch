const posts = document.getElementById('comentarios')

window.onload = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts=> posts.map(post=> createdPost(post)))
}



const createdPost =  post => {
    const container = document.createElement('div')
    const imgUser = document.createElement('img')
    const title = document.createElement('span')
    const body = document.createElement('p')
    const contents = document.createElement('div')

    container.setAttribute('id', 'comentario')
    imgUser.setAttribute('id', 'userPic')
    title.setAttribute('id', 'title')
    body.setAttribute('id', 'body')
    
    contents.setAttribute('class', 'contents')

    imgUser.setAttribute('src', '/assets/img-profile.png')

    body.innerText = post.body
    title.innerText = post.title


    contents.appendChild(title)
    contents.appendChild(body)
    container.appendChild(imgUser)
    container.appendChild(contents)
    posts.appendChild(container)
}