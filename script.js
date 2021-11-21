window.addEventListener("load", () =>{

//establishing canvas
var canvas = document.getElementById("myCanvas");
let cw = 400;
let ch = 400;
canvas.width = cw;
canvas.height = ch;
let ctx = canvas.getContext("2d");





function drawCircle(e){
    let color;
    let colorx;

    switch ((Math.round( Math.random() * 4))){
        case 1 : colorx = "white";
        break;

        case 2 : colorx = "red";
        break;

        case 3 : colorx= "yellow";
        break;

        case 4 : colorx = "black";
        break;
    };
    
    color = colorx;

    ctx.beginPath();
    ctx.arc(e.clientX, e.clientY, Math.random()*100, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();

};




canvas.addEventListener("mousedown", drawCircle);

});