let firstVisit = false
const historyContainer = document.querySelector('#historyAnchor')
window.addEventListener('scroll',()=>{
    if(!firstVisit){
      if( isElementInViewport(historyContainer)){
        firstVisit = true
        
    const historyDivs =  document.querySelectorAll('.centeredLineContainer > div')
    const historyDivsLength = historyDivs.length 
        
    function giveActiveToAllDivs(num) {
    let x = 0;
    const intervalId = setInterval(function() {
        historyDivs[x].classList.add('active')
        x++;
       
        if (x === num) {
        clearInterval(intervalId);
        }
    }, 1000);
    }

    giveActiveToAllDivs(historyDivsLength)

    }

    }
     
})
