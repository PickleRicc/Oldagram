const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let likes = localStorage.getItem("likes") ? parseInt(localStorage.getItem("likes")) : 0;

const heartBtn = document.getElementById("heart-btn")

let likesEl = document.getElementById("likes-el")

likesEl.textContent = likes + " likes";


let avatarEl = document.getElementById("avatar2")

let accountEl = document.getElementById("account2")

let locationEl = document.getElementById("location2")

let gustaveImg = document.getElementById("gustave-img")

let gustaveUsr = document.getElementById("gustave-username")

let gustaveCmnt = document.getElementById("gustave-comment")

let gustaveLikes = document.getElementById("gustave-likes")

avatarEl.src = posts[1].avatar
accountEl.textContent = posts[1].name
locationEl.textContent = posts[1].location
gustaveImg.src = posts[1].post
gustaveUsr.textContent = posts[1].username + " " + posts[1].comment
gustaveLikes.textContent = posts[1].likes + " likes"

let accountJ = document.getElementById("account3")
let locationJ = document.getElementById("location3")
let postJ = document.getElementById("post3")
let likesJ = document.getElementById("jlikes-el")
 let userJ = document.getElementById("user3")

accountJ.textContent = posts[2].name
locationJ.textContent = posts[2].location
postJ.src = posts[2].post
likesJ.textContent = posts[2].likes + " likes"
userJ.textContent = posts[2].username

heartBtn.addEventListener("click", function(){
    likes++;
    likesEl.textContent = likes + " likes";
    localStorage.setItem("likes", likes);
})


