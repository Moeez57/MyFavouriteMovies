const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');
const slider = document.querySelectorAll('.slide');
current=0;

function reset()
{
  for(let i=0;i<slider.length;i++)
  {
    slider[i].style.display="none";
  }
}



function startSlide(){
  reset();
  slider[0].style.display="flex";
  arrowLeft.style.borderWidth="0px";
}

startSlide();


arrowLeft.addEventListener('click',function(){

  reset();
  if(current===0)
  {
    slider[current].style.display="flex";
    arrowLeft.style.borderWidth="0px";
  }
  else if(current===1)
  {
    slider[current - 1 ].style.display="flex";
    current--;
    arrowLeft.style.borderWidth="0px";
  }
  else{
    slider[current-1].style.display="flex";
    current--;
    arrowLeft.style.borderWidth="30px 40px 30px 0px";
    // arrowLeft.style.borderColor="transparent #fff transparent transparent";
    arrowRight.style.borderWidth="30px 0px 30px 40px";
    // arrowRight.style.borderColor="transparent transparent transparent #fff";
  }
});



arrowRight.addEventListener('click',function(){

  reset();
  if(current===slider.length-1)
  {
    slider[current].style.display="flex";
    // arrowLeft.style.borderWidth="30px 40px 30px 0px";
    // arrowLeft.style.borderColor="transparent #fff transparent transparent";
    // arrowRight.style.borderColor="transparent";
  }
  else if(current===slider.length-2)
    {
      slider[current+1].style.display="flex";
      arrowRight.style.borderWidth="0px";
      current++;
      // arrowLeft.style.borderWidth="30px 40px 30px 0px";
      // arrowLeft.style.borderColor="transparent #fff transparent transparent";
    }
  else{
    slider[current +1].style.display="flex";
    current++;
    arrowRight.style.borderWidth="30px 0px 30px 40px";
    // arrowRight.style.borderColor="transparent transparent transparent #fff";
    arrowLeft.style.borderWidth="30px 40px 30px 0px";
    // arrowLeft.style.borderColor="transparent #fff transparent transparent";
  }
});
