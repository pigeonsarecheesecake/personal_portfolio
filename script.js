// JS for slides
let index = 0;
let slides = document.getElementsByClassName('slide');

// Function for arrows to add index
function addSlide(n){
    index += n;
    if (index > slides.length-1){
        index = 0;
        currentSlide(index);
    }

    else if (index < 0){
        index = slides.length-1;
        currentSlide(index);
    }

    else{
        currentSlide(index);
    }
}

// Shows Current Slide
function currentSlide(){
    for(i = 0 ; i < slides.length ; i++){
        slides[i].style.display = 'none';
    }
    slides[index].style.display = 'flex';
}

// This function displays interactive slides, only for ipad portrait mode and desktop screens
    if(window.innerWidth > 850  || (window.innerWidth > 800 && window.innerHeight > window.innerWidth)){
        currentSlide();
    }
 
// JS for different mode
// Home
let ball = document.getElementById("circle");
let newToggle = document.getElementsByClassName("toggle");
let background = document.querySelector("body");
let letter = document.querySelectorAll(".hello > span");
let social = document.querySelectorAll(".socials svg");
let fullName = document.querySelector(".desc > span");
let description = document.getElementsByClassName("desc");
let resume = document.getElementsByClassName("resume-style");
let navigation = document.querySelectorAll(".navbar > a");
let navigationBar = document.querySelector(".navbar");

// Project
let projectPage = document.getElementById("projects");
let firstDivider = document.querySelector(".divider-one svg");
let secondDivider = document.querySelector(".divider-two svg");
let slide = document.querySelectorAll('.img-container');
let textBox = document.querySelectorAll(".text-box");

// About
let bio = document.querySelector('.bio');
let misc = document.querySelectorAll('.misc > *');
let about = document.querySelector('.abouth1');
let dividerThree = document.querySelector('.divider-contact');

// Contact
let contact = document.querySelector(".contact");
let lineDeco = document.querySelectorAll(".line-deco");
let input = document.getElementsByTagName("input");
let textArea = document.getElementsByTagName("textarea");
let button = document.getElementsByTagName("button");

// Footer
let footer = document.querySelector(".footer");

// Mobile style
let introText = document.querySelectorAll(".desc-mobile > p");
let nameSpan = document.querySelector(".desc-mobile span");
let portraitShadow = document.querySelector(".mobile-pic-container");
let textBoxes = document.querySelectorAll(".text-box");

// Blobs
let blobs = document.querySelectorAll(".blob");

// Using classlist to toggle between classes
ball.addEventListener("click", function(){
    // Moving ball to the right and changes color between modes
    ball.classList.toggle("toggle-right");
    newToggle[0].classList.toggle("toggle-light");

    // Home page
    background.classList.toggle("white-background");
    description[0].classList.toggle("font-light");
    resume[0].classList.toggle("resume-light");
    fullName.classList.toggle("name-light");
    navigationBar.classList.toggle("white-background");
    // Changing "hello" spans color
    for(let i = 0; i<letter.length ; i++){
        letter[i].classList.toggle("font-light");
    }
    // Changing socials' svgs color
    for(let i = 0; i<social.length ; i++){
        social[i].classList.toggle("font-light");
    }
    // Changing navigation bar's color
    for(let i = 0; i<navigation.length ; i++){
        navigation[i].classList.toggle("font-light");
    }

    // Projects page
    projectPage.classList.toggle("projects-light");
    firstDivider.classList.toggle("divider-one-light");
    secondDivider.classList.toggle("divider-two-light");
    for(i = 0 ; i<slide.length;i++){
        slide[i].classList.toggle("border-white");
        textBox[i].classList.toggle("border-white");
    }

    // About
    bio.classList.toggle("about-light");
    about.classList.toggle("font-light");
    dividerThree.classList.toggle("divider-contact-white");
    for(i = 0 ; i<misc.length;i++){
        misc[i].classList.toggle("about-light");
    }

    // Contact
    contact.classList.toggle("contact-light");
    textArea[0].classList.toggle("input-light");
    button[0].classList.toggle("button-light");
    for(i = 0 ; i<lineDeco.length;i++){
        lineDeco[i].classList.toggle("white-background");
    }
    for(i = 0 ; i<input.length;i++){
        input[i].classList.toggle("input-light");
    }
    
    // Footer
    footer.classList.toggle("footer-light");

    // Mobile
    nameSpan.classList.toggle("name-light");
    portraitShadow.classList.toggle("mobile-img-container-light");
    for(i = 0 ; i<introText.length;i++){
        introText[i].classList.toggle("intro-light");
    }
    for(i = 0 ; i<textBoxes.length;i++){
        textBoxes[i].classList.toggle("footer-light");
    }
    
    // Blobs
    for(i = 0 ; i<blobs.length;i++){
        blobs[i].classList.toggle("blobs-light");
    }
});

    


