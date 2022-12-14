const posts = document.getElementById('comentarios')
const filter = document.getElementById('submit')

const userFilter = document.getElementById('userId')

let isFilter = {value:false}
let userFilterId


const unique = (value, index, self) => self.indexOf(value) === index

const getPosts = async () => {
    try {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => postFilter(posts) )
    } catch (error) {
        console.log(error)
    }
}

getPosts()


const createSelectList = posts =>{
    const usersArray = []
    posts.map(user => usersArray.push(user.userId))
    const users = usersArray.filter(unique)

   

    users.map(user => {
        const opition = document.createElement('option')

        console.log(user)
        opition.setAttribute('value',user),
        opition.innerText = `User ${user}`
        userFilter.appendChild(opition)
        
    })
  
    
}


const selectUser = id => {
    
    const userId = id.options[id.selectedIndex].value

    if(userId === "TODOS"){
        getPosts() 
        return isFilter = {value: false} 
    }

    getPosts() 
    return isFilter = {value: true, userId} 
       
}



const postFilter = posts =>{
    createSelectList(posts)
    if(isFilter.value){
        const postList = document.getElementById('comentarios')
        postList.innerHTML = ''
        
        const postFil = posts.filter(post => post.userId === Number(isFilter.userId))
        postFil.map(post => createdPost(post))
        return
    }
    const postList = document.getElementById('comentarios')
    postList.innerHTML = ''
    
    posts.map(post => createdPost(post))
}








const createdPost =  post => {

    const container = document.createElement('div')
    const imgUser = document.createElement('img')
    const title = document.createElement('span')
    const user = document.createElement('span')
    const body = document.createElement('p')
    const contents = document.createElement('div')

    container.setAttribute('id', 'comentario')
    imgUser.setAttribute('id', 'userPic')
    title.setAttribute('id', 'title')
    body.setAttribute('id', 'body')
    user.setAttribute('id', 'userInfo')

    contents.setAttribute('class', 'contents')

    imgUser.setAttribute('src', 'https://alissonpeixer.github.io/using-fetch/assets/img-profile.png')

    body.innerText = post.body
    title.innerText = post.title
    user.innerText = `USER ${post.userId}`




    contents.appendChild(title)
    contents.appendChild(body)
    // contents.appendChild(user)

    container.appendChild(user)
    container.appendChild(contents)
    posts.appendChild(container)
}

