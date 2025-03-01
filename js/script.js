const completeBtn=document.querySelectorAll(".btn-completed-task")

for (const btn of completeBtn){
   
    btn.addEventListener("click",function(){

        alert("Board Updated Successfully")
        const assignTask=getInnerTextById("assigned-task-count")
        setInnerText("assigned-task-count",`0${assignTask-1}`)
        this.disabled=true;
        this.classList.add("bg-gray-300")
        const completedTaskCheckboxText=getInnerTextById("completed-task-checkbox-text")
        setInnerText("completed-task-checkbox-text",`${completedTaskCheckboxText+1}`)
        
        
    })
}