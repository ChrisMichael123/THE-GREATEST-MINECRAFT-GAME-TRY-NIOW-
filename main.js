

var canvas= new fabric.Canvas("mine");
block_image_width=30;
block_image_height=30;
playerx=10;
playery=10;
var_player_object="";
var_block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:playery,
        left: playerx
    });
    canvas.add(player_object);

    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    block_image_object=Img;
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:playery,
        left: playerx
    });
    canvas.add(block_image_object);

    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed)
}
if(e.shiftKey==true && key_pressed=='80'){
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(e.shiftKey==true && key_pressed=='77'){
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current_width").innerHTML=block_image_width;
    document.getElementById("current_height").innerHTML=block_image_height;
}
if(key_pressed=='71'){
    new_image("ground.png");

}
if(key_pressed=='86'){
    new_image("dark_green.png");
    
}
if(key_pressed=='76'){
    new_image("light_green.png");
    
}
if(key_pressed=='67'){
    new_image("cloud.jpg");
    
}
if(key_pressed=='85'){
    new_image("unique.png");
    
}
if(key_pressed=='89'){
    new_image("yellow_wall.png");
    
}
if(key_pressed=='82'){
    new_image("roof.jpg");
    
}
if(key_pressed=='84'){
    new_image("trunk.jpg");
    
}
if(key_pressed=='38'){
    up();
}
if(key_pressed=='40'){
    down();
}
if(key_pressed=='37'){
    left();
}
if(key_pressed=='39'){
    right();
}
function up(){
    if(playery>=0){
playery=playery-block_image_height;
canvas.romove(player_object);
player_update();
    }
}
function down(){
    if(playery<=500){
playery=playery+block_image_height;
canvas.romove(player_object);
player_update();
    }
}
function left(){
    if(playerx>=0){
playerx=playerx-block_image_width;
canvas.romove(player_object);
player_update();
    }
}
function right(){
    if(playerx<=850){
playerx=playerx+block_image_width;
canvas.romove(player_object);
player_update();
    }
}