const textileeApp = {};

textileeApp.navbars = document.querySelector('nav i');
textileeApp.navUlElement = document.querySelector('nav ul');
textileeApp.h2Element = document.querySelector('h2');

console.log(textileeApp.navbars);
console.log(textileeApp.navUlElement);
console.log(textileeApp.h2Element);

textileeApp.attachEventListener = function (){
    
    textileeApp.navbars.addEventListener('click', function(e){
        textileeApp.navbars.classList.toggle('fa-bars');
        textileeApp.navbars.classList.toggle('fa-times');
        textileeApp.navbars.classList.toggle("ipositionchanges");
        textileeApp.navUlElement.classList.toggle("javanav");
        
        
        textileeApp.h2Element.classList.toggle("visuallyhidden");
        
    });

}

textileeApp.init = function() {
    textileeApp.attachEventListener();
}
textileeApp.init();