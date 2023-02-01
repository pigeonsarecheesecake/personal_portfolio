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
 
    


