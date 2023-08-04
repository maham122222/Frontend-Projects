const btn1 = document.querySelector('.btn');
btn1.addEventListener("mouseover",(event)=>{
    const x=(event.pageX - btn1.offsetLeft);
    const y=(event.pageY - btn1.offsetTop);


    btn1.style.setProperty("--xPos",x + "px");
    btn1.style.setProperty("--yPos",y + "px");

})