const completeBtn=document.querySelectorAll(".btn-completed-task")


for (const btn of completeBtn){
   
    btn.addEventListener("click",function(){
// alert 
        alert("Board Updated Successfully")
        // get and set text for assigned task 
        const assignTask=getInnerTextById("assigned-task-count")-1
        setInnerText("assigned-task-count",`0${assignTask}`)
        // alert after completing all 
        assignTask === 0?alert("Congrats!!!! You have completed all the current task."):
        // disable the button after click 
        this.disabled=true;
        this.classList.add("bg-gray-300")
        // get and set text for nav checkbox 
        const completedTaskCheckboxText=getInnerTextById("completed-task-checkbox-text")
        setInnerText("completed-task-checkbox-text",`${completedTaskCheckboxText+1}`)
        // accessing title  of this card 
       const title=this.parentNode.parentNode.parentNode.querySelector(".pending-task-title")
       
    //    accessing current time 
     const time=getTime()
       
        // create element for history  and appending
       const p= document.createElement("p")
       p.innerText=`You have Complete The Task ${title.innerText} at ${time}`
       p.classList.add("my-8","bg-[#f4f7ff]","mx-5","p-3","rounded-lg")
       document.getElementById("task-history").appendChild(p)   
        
    })
}

// clearing the history 
document.getElementById("btn-clear-history").addEventListener("click",function(){
    document.getElementById("task-history").innerHTML=" "
})

// changing random backgroundColor 
document.getElementById("background-change-icon").addEventListener("click",function(){
    
    const r=Math.floor(Math.random()*256)
    const g=Math.floor(Math.random()*256)
    const b=Math.floor(Math.random()*256)
    const a='0.1'
    const rgba=`${r},${g},${b},${a}`
    document.body.style.backgroundColor=`rgba(${rgba})`
    
})
// adding current day 
const now= new Date().toDateString()
const dateArray=now.split(" ")

setInnerText("today",`${dateArray[0]} ,`)
setInnerText("today-date",`${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`)


