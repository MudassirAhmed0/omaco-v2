const lotties= document.querySelectorAll('.lottie')

window.addEventListener('scroll',()=>{
    lotties.forEach((lottie)=>{
        if(isElementInViewport(lottie)){
            lottie.play()
            
        }

    })
})