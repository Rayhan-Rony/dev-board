const completeBtn=document.querySelectorAll(".btn-completed-task")


for (const btn of completeBtn){
   
    btn.addEventListener("click",function(){
// alert 
        alert("Board Updated Successfully")
        // get and set text for assigned task 
        const assignTask=getInnerTextById("assigned-task-count")
        setInnerText("assigned-task-count",`0${assignTask-1}`)
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