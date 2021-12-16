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

        
        //Going to create a function to add the proper suffix to the getDate
        const suffixAdder = function(date) {
            if (date >= 4 && date <= 20 || date >= 24 && date <= 30) {
                return 'th';
            } else if (date === 2 || date === 22 ) {
                return 'nd';
            } else if (date === 1 || date === 21 || date === 31 ) {
                return 'st';
            } else if (date === 3 || 23) {
                return 'rd';
            }
        }
        // All of this just to remove the timezone from the Date() date
        const options = { weekday: 'long' };
        const options1 = { month: 'long' }
        const NoTimeDate = Intl.DateTimeFormat('en-US', options).format(d) + " " + Intl.DateTimeFormat('en-US', options1).format(d) + " " + d.getDate() + suffixAdder(d.getDate()) + ', ' +  d.getFullYear(); 
        



        const commentPost = document.createElement('div');
        
        commentPost.innerHTML = `
            <img><i class="fas fa-user-circle" aria-hidden"true"></i></img>
            <div class="commentText">
                <p class="date"> 
                ${NoTimeDate} by ${userName}
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