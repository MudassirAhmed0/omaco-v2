let firstVisit = false
function isElementInViewport(el) {
// Get the bounding rectangle of the element
const rect = el.getBoundingClientRect();
    
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

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
