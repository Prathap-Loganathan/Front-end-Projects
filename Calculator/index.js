let input=document.querySelector("input");
function addele(ele){
    input.value+=ele;
}
function Clearall(){
    input.value="";
}
function Delete(){
    input.value=input.value.slice(0,input.value.length-1);
}

function res(){
    input.value=eval(input.value);
}
