const openbtn = document.querySelector('.open-btn');
const closebtn = document.querySelector('.close-btn');
const wrap = document.querySelectorAll('.wrap');


openbtn.addEventListener("click", ()=>{

  for (let index = 0; index < wrap.length; index++) {
    
    wrap[index].classList.add('Visible');
  }

});


closebtn.addEventListener("click", ()=>{

    for (let index = 0; index < wrap.length; index++) {
      
      wrap[index].classList.remove('Visible');
    }
  
  });
  
  