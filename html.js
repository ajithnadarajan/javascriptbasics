const arr=[
    {Task:"Meeting", Description:"Client Meeting", Duration:"00:50:43"},
    {Task:"Homework",Description:"Learn Daily", Duration:"01:42:02"},
    { Task:"Gym",Description:"build ",Duration:"24:59:59"},
    { Task:"Education", Description:"school",Duration:"00:32:28"},
    { Task:"Education", Description:"College ",Duration:"00:32:28"},
    {Task:"Meeting", Description:"Parents Meeting", Duration:"00:50:43"},
    {Task:"Class", Description:"Online-Mode", Duration:"00:50:43"},
    
];
var ele=document.getElementById("list");
const s=document.getElementById("select-list");
const b=document.getElementById("btnfil");
const d=document.getElementById("btndel");
ele.innerHTML=arr.map((ele) => {
    return `<tr> <td>${ele.Task}</td>
        <td>${ele.Description}</td>
        <td>${ele.Duration}</td>
    </tr>`
}).join(" ");
//////////////////////////////////////////////////////filter///////////////////////////////////////
b.addEventListener("click",() => {
    const a=s.value;
    ele.innerHTML=arr.filter((f) => f.Task==a)
    .map((ele) => {
        return `<tr> <td>${ele.Task}</td>
            <td>${ele.Description}</td>
            <td>${ele.Duration}</td>
        </tr>`
    }).join(" ");
})
//////////////////////////////////////////////////delete///////////////////////////////////////////////
d.addEventListener("click",() => {
    const al=s.value;
    console.log(al);
    ele.innerHTML=arr.filter((de) => de.Task!==al)
    .map((ele) => {
        return `<tr> <td>${ele.Task}</td>
            <td>${ele.Description}</td>
            <td>${ele.Duration}</td>
        </tr>`
    }).join(" ");
})

/////////////////////////////timer///////////////////////////////////////////////////////
let sec=0;
let min=0;
let hour=0;
let settime=false;
  function start(){
    if(!settime){
      settime=true;
      set=setInterval(()=>{
        sec++;
        if(sec==60){
          min++;
          sec=0;
          if(min==60){
            hour++;
            min=0;
          }
        }
        var timer=`${hour.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
        let timme=document.getElementById("ti");
        timme.innerHTML=timer;
        let change=document.getElementById("stop");
        change.textContent="Stop"
      },1000);
    }else{
      clearInterval(set);
      settime=false;
      let change=document.getElementById("stop");
      change.textContent="Start"
    }
  }
function reset(){
sec=0;
min=0;
hour=0;
var timer=`${hour.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`
        let timme=document.getElementById("ti");
        timme.innerHTML=timer;
}

