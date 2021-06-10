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
//LK LOGO
function logo() {
    let body = document.body;
    let displayElement = body.children[0];
    displayElement.style.display = "none"
    // console.log(displayElement);

    let footer = body.querySelector(".footer")
    footer.style.display = "none"
    body.setAttribute("id", "bodyStyle")
    let myHtml = `<video width="100%" height="100%" autoplay muted>
    <source src="imagestext/lkvideo.mp4" type="video/mp4">
    LK
  </video>`
    body.innerHTML = myHtml;
    // console.log(body);

    function kalert(left, top) {
        body.innerHTML = ""
        let alert = document.createElement("div");
        alert.id = "alertBox"
        alert.style.position = 'fixed'
        alert.style.border = '1px solid red'
        alert.innerText = ""
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        // console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        // console.log(alert);

        // window.alert("Your device is at danger");
        alert.style.position = "absolute"
        alert.style.left ="auto"
        alert.style.top ="auto"
    }
    setTimeout(kalert,17000);

    function alert() {
        // body.innerHTML = ""
        let alert = document.createElement("div");
        alert.id = "alertBox"
        alert.style.position = 'fixed'
        alert.style.border = '1px solid red'
        alert.innerText = ""
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        // console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        // console.log(alert);


        // window.alert("Your device is at danger");
        let left = Math.floor((Math.random() * 60) + 10)
        let top = Math.floor((Math.random() * 60) + 10)
        console.log(left, top);
        alert.style.position = "absolute"
        alert.style.left = left + "%";
        alert.style.top = top + "%"
    }
    setTimeout(alert,22000);
    setTimeout(alert,23000);
    setTimeout(alert,23500);
    setTimeout(alert,23700);
    setTimeout(alert,24000);
    setTimeout(alert,24500);
    setTimeout(alert,24800);
    setTimeout(alert,25100);
    setTimeout(alert,25500);
    setTimeout(alert,25800);
    setTimeout(alert,26100);
    setTimeout(alert,26600);
    setTimeout(alert,26700);
    setTimeout(alert,26800);
    setTimeout(alert,27000);


}

