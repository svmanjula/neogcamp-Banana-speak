var btnTranslate = document.querySelector("#btn-translate")
var txtinput = document.querySelector("#txt-input")

console.log(txtinput)

function clickeventhander(){
    console.log("clicked");
    console.log("input", txtinput.value);
};

btnTranslate.addEventListener("click", clickeventhander)