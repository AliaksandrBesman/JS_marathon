const activeSlideIndex = 4

function slidesPlagin(activeSlide = 0){
    const slides = document.querySelectorAll('.slide')

    if(activeSlide > slides.length-1){
        activeSlide = slides.length - 1
    }else if(activeSlide < 0){
        activeSlide = 0
    }

    slides[activeSlide].classList.add('active')

    for( const slide of slides){
        slide.addEventListener('click', ()=>{
            clearActiveClasses()
    
            slide.classList.add('active')
        })
    }
    
    function clearActiveClasses(){
        slides.forEach((slide)=>{
            slide.classList.remove('active')
        })
    }
}

slidesPlagin(activeSlideIndex)