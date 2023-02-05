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

// Only calls function when its bigger than mobile
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
let resume = document.getElementsByClassName("resume");
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
ball.addEventListener("click", function(){
    // Moving ball to the right and changes color between modes
    ball.classList.toggle("toggle-right");
    newToggle[0].classList.toggle("toggle-color-change");

    // Home page
    background.classList.toggle("white-background");
    description[0].classList.toggle("colorchange");
    resume[0].classList.toggle("resume-color-change");
    fullName.classList.toggle("name-color-change");
    navigationBar.classList.toggle("navigation-bar-light");
   
    for(let i = 0; i<letter.length ; i++){
        letter[i].classList.toggle("colorchange");
        // console.log(letter[i]);
    }

    for(let i = 0; i<social.length ; i++){
        social[i].classList.toggle("colorchange");
        // console.log(social[i]);
    }

    for(let i = 0; i<navigation.length ; i++){
        navigation[i].classList.toggle("colorchange");
        // console.log(social[i]);
    }

    // Projects page
    projectPage.classList.toggle("project-background-change");
    firstDivider.classList.toggle("divider-one-black");
    secondDivider.classList.toggle("divider-two-black");
    for(i = 0 ; i<slide.length;i++){
        slide[i].classList.toggle("border-white");
        textBox[i].classList.toggle("border-white");
    }

    // About
    bio.classList.toggle("about-gray");
    about.classList.toggle("colorchange");
    dividerThree.classList.toggle("divider-contact-white");
    for(i = 0 ; i<misc.length;i++){
        misc[i].classList.toggle("about-gray");
    }

    // Contact
    contact.classList.toggle("about-black");
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
    nameSpan.classList.toggle("name-color-change");
    portraitShadow.classList.toggle("mobile-img-container-light");
    for(i = 0 ; i<introText.length;i++){
        introText[i].classList.toggle("intro-black");
    }
    for(i = 0 ; i<textBoxes.length;i++){
        textBoxes[i].classList.toggle("footer-light");
    }

    
});

    


