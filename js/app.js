 (function imgClick(){
     let clickNumber=0;
    const catImg=document.querySelector('.cat');
    catImg.addEventListener('click',function(){
         console.log(++clickNumber);
    })
 })();