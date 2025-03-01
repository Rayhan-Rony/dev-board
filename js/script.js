const completeBtn=document.querySelectorAll(".btn-completed-task")

for (const btn of completeBtn){
    console.log(btn)
    btn.addEventListener("click",function(){
        const assignTask=getInnerTextById("assigned-task-count")
        console.log(assignTask)
        setInnerText("assigned-task-count",`0${assignTask-1}`)
    })
}