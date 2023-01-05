const Container=document.querySelector(".container");

const WorksAs=["Content Writer","Freelancer","Devloper","Web Developer"];
let index=0;
var charLen=0; 
updateText();


function updateText(){
    index++;
Container.innerHTML=`<h1>I am a ${WorksAs[charLen].slice(0,index)}</h1>`;
if(index===WorksAs[charLen].length){
    charLen++;
index=0;
}
setTimeout(updateText,400);
}