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
function logo() {
    let body = document.body;
    let container = document.querySelector(".container")
    container.style.display = "none"
    let footer = document.querySelector("footer")
    footer.style.display = "none"
    body.style.backgroundColor = "black";
    body.style.color = "green"
    body.style.padding = "50px";
    body.style.fontSize = "20px";
    let myHtml=`<video width="100%" height="100%" muted autoplay>
    <source src="imagestext/lkvideo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>`
  body.innerHTML=myHtml;
    
}




