function getInnerTextById(id){
    const text=parseInt(document.getElementById(id).innerText);
    return text;
    
}
function setInnerText(id,text){
    document.getElementById(id).innerText=text;

}
function getTime(){
    const time = new Date();
        // let hour=time.getHours()
        // const minute=time.getMinutes()
        // const second=time.getSeconds()
        // const amPm =hour<=12?"am":"pm"
        // converting 12 Hour Formate 
        // hour = hour % 12 || 12
        // return `${hour}:${minute}:${second}${amPm}`
        return time.toLocaleTimeString(); 
}