
var temp=document.getElementById("in");
var k=document.getElementById("s");
let r;
document.getElementById("de").onclick=function(){
    var h=Number(temp.value);
if(cel.checked){
   r= h * 9 / 5 + 32;
   k.textContent=r+"°f";
}
if(fare.checked){
    let y=(h-32) * (5/9);
    k.textContent=y+"°c";
}
if(!cel.checked && !fare.checked){
    k.textContent="select the conversion type";
}
}
