var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

function clickeventhander(){
    outputDiv.innerText = "assddf " + txtInput.value;
};

btnTranslate.addEventListener("click", clickeventhander)