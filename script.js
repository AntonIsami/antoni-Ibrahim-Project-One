const textileeApp = {};

textileeApp.navbars = document.querySelector('nav i');
textileeApp.navUlElement = document.querySelector('nav ul');
textileeApp.h2Element = document.querySelector('h2');

textileeApp.attachEventListener = function(){
    textileeApp.navbars.addEventListener('click', function(e){
        textileeApp.navbars.classList.toggle('fa-bars');
        textileeApp.navbars.classList.toggle('fa-times');
        textileeApp.navbars.classList.toggle("ipositionchanges");
        textileeApp.navUlElement.classList.toggle("javanav");
        textileeApp.h2Element.classList.toggle("visuallyhidden");
    });

}
textileeApp.formElement = document.querySelector("form");
textileeApp.commentsElement = document.querySelector(".comments");


textileeApp.printUserComments = function() {
    
    textileeApp.formElement.addEventListener('submit', function(event){
        event.preventDefault();
        const userName = document.querySelector(".name").value;
        const userEmail = document.querySelector("input[type=email]").value;
        const userMessage = document.querySelector(".message").value;
        const d = new Date();
        const commentPost = document.createElement('div');
        commentPost.innerHTML = `
            <img><i class="fas fa-user-circle"></i></img>
            <div class="commentText">
                <p class="date"> 
                ${d} by ${userName}
                </p>
                <p class="commentp">
                ${userMessage}
                </p>
            </div>
        `
        commentPost.className = "commentAndPicture";
        commentPost.classList.add("newPost");
        textileeApp.commentsElement.insertBefore(commentPost, textileeApp.commentsElement.childNodes[6]);
    })
}

textileeApp.init = function() {
    textileeApp.attachEventListener();
    textileeApp.printUserComments();
}
textileeApp.init();