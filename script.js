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

// Only shows when its bigger than mobile
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

// Project
let projectPage = document.getElementById("projects");
let firstDivider = document.querySelector(".divider-one svg");
let secondDivider = document.querySelector(".divider-two svg");
let slide = document.querySelectorAll('.img-container');

ball.addEventListener("click", function(){
    // Moving ball to the right and changes color between modes
    ball.classList.toggle("toggle-right");
    newToggle[0].classList.toggle("toggle-color-change");

    // Home page
    background.classList.toggle("white-background");
    description[0].classList.toggle("colorchange");
    resume[0].classList.toggle("resume-color-change");
    fullName.classList.toggle("name-color-change");
   
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
    }
    
});

    


