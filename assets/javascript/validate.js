const myForm = document.getElementById('myForm')

const handleFormSubmission =(e)=>{
    e.preventDefault()
    let firstErrorEl  
    const requiredFileds = document.querySelectorAll('.required')
    requiredFileds.forEach(field=>{
        if(!field.value){
         if(!firstErrorEl){
            firstErrorEl =field
         }
            const errorEl =field.parentElement.parentElement.querySelector('.error')
            errorEl.classList.remove('hidden')
            setTimeout(()=>{
            errorEl.classList.add('hidden')
            },8000)

        }
    })
    if(firstErrorEl){
        const y =firstErrorEl.getBoundingClientRect().top + window.scrollY   - (window.innerWidth/100 * 1.7) 
        window.scroll({
            top: y,
            behavior: 'smooth'
          });
    }
}


myForm.addEventListener('submit',handleFormSubmission)