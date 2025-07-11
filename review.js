// Reviews page
function loadComments() {
    console.log("...loading content")
    let loadedComments = localStorage.getItem("savedComments")

    if(loadedComments != null) {
        // show the comments in the HTML
        let commentList = document.getElementById("comment-list") // returns HTML object for the list of comments
        
        commentList.innerHTML =loadedComments // if loaded comments isnt null, show the comments in the HTML
        //return loadedComments
    } else {
        console.log("saved comments were not found")
    }
}

function addComment(){
    //alert("Comment submitted!")
// Step 2: Get data from our form inputs
let nameInput = document.getElementById("nameInput") // returns HTML object for the name input

let commentText = document.getElementById("commentTextArea") // returns HTML object for the comment text area

//alert("Comment submitted by: " + nameInput.value)
// Step 3: Show it on the comment section for our users
let commentList = document.getElementById("comment-list") // returns HTML object for the list of comments

let currentCommentData = commentList.innerHTML

let newComment = currentCommentData + `
<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
    <div class="fw-bold">${nameInput.value}</div>
    ${commentText.value}
    </div>
<li>
`
    //console.log(newComment)
    saveComments(newComment)
    //localStorage.setItem("savedComments", newComment)

    commentList.innerHTML = newComment
}

function saveComments(comments) {
        console.log("...saving comments")
        // recieve our current list of comments and save them to LocalStorage
        localStorage.setItem("savedComments", comments)
        console.log("comments saved")
}

// call load comments when the page load
//loadComments()