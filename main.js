document.querySelector('.fa-arrow-up').addEventListener('click',()=>{
    window.scrollTo({
        top:0,
    })
})

document.querySelector('.fa-bars').addEventListener('click',()=>{
    document.querySelector('.fa-bars').classList.add('disapear');
    document.querySelector('.aside').classList.add('change');
   
})

document.querySelector('.fa-xmark').addEventListener('click',()=>{
    document.querySelector('.aside').classList.add('disapear');
    document.querySelector('.fa-bars').classList.add('change');
})

// setinterval