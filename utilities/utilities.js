function getInnerTextById(id){
    const text=parseInt(document.getElementById(id).innerText);
    return text;
    
}
function setInnerText(id,text){
    document.getElementById(id).innerText=text;

}