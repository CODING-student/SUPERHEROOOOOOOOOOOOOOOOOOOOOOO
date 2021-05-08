var canvas = new fabric.Canvas("myCanvas");
var x = 10;
var y = 10;
blockwidth = 30;
blockheight= 30;
var playerobject ="";
var blocks ="";
function playerupdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(150);
        playerobject.set({
            top:y,
            left:x
        });
        canvas.add(playerobject);
    });
}
function blockupdate(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        blocks=Img;
        blocks.scaleToWidth(blockwidth);
        blocks.scaleToHeight(blockheight);
        blocks.set({
            top:y,
            left:x
        });
        canvas.add(blocks);
    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    var keypress=e.keyCode;
    console.log(keypress);
    if(e.shiftKey==true && keypress=="80"){
blockwidth=blockwidth + 10;
blockheight=blockheight + 10;
document.getElementById("current_width").innerHTML=blockwidth;
document.getElementById("current_height").innerHTML=blockheight;        
    }
    if(e.shiftKey==true && keypress=="77"){
        blockwidth=blockwidth - 10;
        blockheight=blockheight - 10;
        document.getElementById("current_width").innerHTML=blockwidth;
        document.getElementById("current_height").innerHTML=blockheight;        
            }
if(keypress== "38"){
    up();
    console.log("up");
}
if(keypress== "40"){
    down();
    console.log("down");
}
if(keypress== "37"){
    left();
    console.log("left");
}
if(keypress== "39"){
    right();
    console.log("right");
}
if(keypress=="70"){
    blockupdate('https://i.postimg.cc/hGnyTPLB/ironman-face.png');
    console.log("f");
}
if(keypress=="66"){
    blockupdate('https://i.postimg.cc/FscwL6M0/spiderman-body.png');
    console.log("b");
}
if(keypress=="76"){
    blockupdate('https://i.postimg.cc/KzF6GDqt/hulk-legs.png');
    console.log("l");
}
if(keypress=="82"){
    blockupdate('https://i.postimg.cc/8s8BGtwS/thor-right-hand.png');
    console.log("r");
}
if(keypress=="72"){
    blockupdate('https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png');
    console.log("h");
}

}
function up(){
    if(y>=0){
        y=y-blockheight;
        console.log(blockheight);
        console.log("when up arrow is pressed x="+ x+"y="+y);
        canvas.remove(playerobject);
        playerupdate();
    }
}
function down(){
    if(y<=500){
        y=y+blockheight;
        console.log(blockheight);
        console.log("when down arrow is pressed x="+ x+"y="+y);
        canvas.remove(playerobject);
        playerupdate();
    }
}
function left(){
    if(x>0){
        x=x-blockwidth;
        console.log(blockwidth);
        console.log("when left arrow is pressed x="+ x+"y="+y);
        canvas.remove(playerobject);
        playerupdate();
    }
}
function right(){
    if(x<=850){
        x=x+blockwidth;
        console.log(blockwidth);
        console.log("when right arrow is pressed x="+ x+"y="+y);
        canvas.remove(playerobject);
        playerupdate();
    }
}