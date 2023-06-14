function add(){
    let text_1=document.getElementById("firstinput").value
    let text_2=document.getElementById("secondinput").value
    let sum
    sum=Number(text_1)+Number(text_2)
    document.getElementById("operationresult").innerText=sum
}
function sub(){
    let text_1=document.getElementById("firstinput").value
    let text_2=document.getElementById("secondinput").value
    let sub
    sum=Number(text_1)-Number(text_2)
    document.getElementById("operationresult").innerText=sum
}
function mul(){
    let text_1=document.getElementById("firstinput").value
    let text_2=document.getElementById("secondinput").value
    let sub
    sum=Number(text_1)*Number(text_2)
    document.getElementById("operationresult").innerText=sum
}
function div(){
    let text_1=document.getElementById("firstinput").value
    let text_2=document.getElementById("secondinput").value
    let sub
    sum=Number(text_1)/Number(text_2)
    document.getElementById("operationresult").innerText=sum
}
function rem(){
    let text_1=document.getElementById("firstinput").value
    let text_2=document.getElementById("secondinput").value
    let sub
    sum=Number(text_1)%Number(text_2)
    document.getElementById("operationresult").innerText=sum
}