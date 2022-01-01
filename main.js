var mouseevent="empty";
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
wigth=3;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
       mouseevent="mouseDown";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
currentx=e.clientX-canvas.offsetLeft;
currenty=e.clientY-canvas.offsetTop;
if(mouseevent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=wigth;
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();

}
lastx=currentx;
lasty=currenty;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
       mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
       mouseevent="mouseLeave";
}