var element = document.getElementById("myImage");

function upArrowPressesd(){
    element.style.top = parseInt(element.style.top) -5 + 'px';
}

function downArrowPressed(){
    element.style.top = parseInt(element.style.top) + 5 + 'px';

}

function leftArrowPressed(){
    element.style.left = parseInt(element.style.left) - 5 + "px";
}

function rightArrowPressed(){
    element.style.left = parseInt(element.style.left) + 5 + "px";
}

function moveSelection(evt){
    switch (evt.keyCode){
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressesd();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}

function docRead(){
    window.addEventListener('keydown', moveSelection);
}