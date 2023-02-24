 
 const daysEl=document.getElementById('days');
 const hoursEl=document.getElementById('hours');
 const minsEl=document.getElementById('mins');
 const secondsEl=document.getElementById('seconds');
 
 
 const newYears="23 Feb 2024"
function countdown(){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date();
    const totSeconds=(newYearsDate-currentDate)/1000;
    const days=Math.floor(totSeconds/3600/24);
    const hours=Math.floor(totSeconds/3600)%24;
    const mins=Math.floor(totSeconds/60)%60;
    const seconds=Math.floor(totSeconds)%60;
    
    
    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=mins;
    secondsEl.innerHTML=seconds;
    

}
countdown();
setInterval(countdown,1000)