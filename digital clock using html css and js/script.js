const hour = document.getElementById('hour')
const min = document.getElementById('minutes')
const sec = document.getElementById('seconds')
const ampm1 = document.getElementById('ampm')

function Updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h=h-12
        ampm = "PM"
    }

    
    h = h < 10 ?  "0"+ h : h;
    s = s < 10 ?  "0"+ s : s;
    m = m < 10 ?  "0"+ m : m;
    
    

    hour.innerText = h
    min.innerText=m
    sec.innerText=s
    ampm1.innerText=ampm
   

    setTimeout(()=>{
        Updateclock()
    },1000)

}

Updateclock();