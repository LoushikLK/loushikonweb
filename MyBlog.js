console.log("started");

let box=document.getElementsByClassName("box");
let i;
for (i=0;i<box.length;i++){
    box[i]

let link = box[i].getElementsByTagName("a");
box[i].addEventListener("mouseover",boxcolor);
function boxcolor(){
    for (j=0;j<link.length;j++){
        link[j].style.color=" #00f7b2";
    }

}
let links = box[i].getElementsByTagName("a");
box[i].addEventListener("mouseout",boxco);
function boxco(){
    for (j=0;j<links.length;j++){
        links[j].style.color="white";
    }

}
}



