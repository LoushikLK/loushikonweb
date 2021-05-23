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
    let displayElement = body.children[0];
    displayElement.style.display = "none"
    console.log(displayElement);

    let footer = body.querySelector(".footer")
    footer.style.display = "none"
    body.setAttribute("id", "bodyStyle")
    let myHtml = `<video width="100%" height="100%" autoplay muted>
    <source src="imagestext/lkvideo.mp4" type="video/mp4">
    LK
  </video>`
    body.innerHTML = myHtml;
    console.log(body);

    setTimeout(alert, 17.1 * 1000);

    function alert() {
        body.innerHTML = ""
        let alert = document.createElement("div");
        alert.id = "alertBox"
        alert.style.position = 'fixed'
        alert.style.border = '1px solid red'
        alert.innerText = ""
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        console.log(alert);
        // window.alert("Your device is at danger");
    }
    //multiple alert
    setTimeout(multiAlert, 17.3 * 1000);
    function multiAlert() {
        let alert = document.createElement("div");
        alert.setAttribute("class", "alertBox")
        alert.style.border = '1px solid red'
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        alert.style.position = "absolute"
        alert.style.left ="45%"
        alert.style.top = "24%"
        console.log("open");

    }
    setTimeout(multiAlert1, 17.5 * 1000);
    function multiAlert1() {
        let alert = document.createElement("div");
        alert.setAttribute("class", "alertBox")
        alert.style.border = '1px solid red'
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        alert.style.position = "absolute"
        alert.style.left ="25%"
        alert.style.top = "55%"
        console.log(alert);

    }
    setTimeout(multiAlert2, 17.8 * 1000);
    function multiAlert2() {
        let alert = document.createElement("div");
        alert.setAttribute("class", "alertBox")
        alert.style.border = '1px solid red'
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        alert.style.position = "absolute"
        alert.style.left ="10%"
        alert.style.top = "60%"
        console.log(alert);

    }
    setTimeout(multiAlert3, 18 * 1000);
    function multiAlert3() {
        let alert = document.createElement("div");
        alert.setAttribute("class", "alertBox")
        alert.style.border = '1px solid red'
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        alert.style.position = "absolute"
        alert.style.left ="30%"
        alert.style.top = "40%"
        console.log(alert);

    }
    setTimeout(multiAlert4, 18.2 * 1000);
    function multiAlert4() {
        let alert = document.createElement("div");
        alert.setAttribute("class", "alertBox")
        alert.style.border = '1px solid red'
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        alert.style.position = "absolute"
        alert.style.left ="33%"
        alert.style.top = "66%"
        console.log(alert);

    }
    setTimeout(multiAlert5, 18.5 * 1000);
    function multiAlert5() {
        let alert = document.createElement("div");
        alert.setAttribute("class", "alertBox")
        alert.style.border = '1px solid red'
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        alert.style.position = "absolute"
        alert.style.left ="60%"
        alert.style.top = "60%"
        console.log(alert);

    }
    setTimeout(multiAlert6, 18.8 * 1000);
    function multiAlert6() {
        let alert = document.createElement("div");
        alert.setAttribute("class", "alertBox")
        alert.style.border = '1px solid red'
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        alert.style.position = "absolute"
        alert.style.left ="10%"
        alert.style.top = "30%"
        console.log(alert);

    }
    setTimeout(multiAlert7, 19 * 1000);
    function multiAlert7() {
        let alert = document.createElement("div");
        alert.setAttribute("class", "alertBox")
        alert.style.border = '1px solid red'
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        alert.style.position = "absolute"
        alert.style.left ="70%"
        alert.style.top = "10%"
        console.log(alert);

    }
    setTimeout(multiAlert8, 19.5 * 1000);
    function multiAlert8() {
        let alert = document.createElement("div");
        alert.setAttribute("class", "alertBox")
        alert.style.border = '1px solid red'
        let text = document.createElement("div")
        text.innerHTML = `<div class = google><span class = "google1">G</span><span class = "google2">o</span><span class = "google3">o</span><span class = "google1">g</span><span class = "google4">l</span><span class = "google2">e</span></div><hr><br> <span class="redcl">Security Alert !!!</span><br>Google has detected an attack attempt on your device.<br>Somebody's trying infect your device with harmful viruses.<br>Click below to secure your device.<br>Immediate Action is Required`
        alert.appendChild(text)
        console.log(text.innerHTML);

        body.appendChild(alert);
        let button = document.createElement("button")
        button.innerText = "OK"
        button.setAttribute("onclick", `location.href = "https://loushiklk.github.io/loushikonweb/"`)
        alert.appendChild(button)
        alert.style.position = "absolute"
        alert.style.left ="10%"
        alert.style.top = "15%"
        console.log(alert);

    }


}




