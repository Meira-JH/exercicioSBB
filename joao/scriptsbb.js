
function ShowForm() {
    document.getElementById("forms").style.right = 0 + 'px';
    document.getElementById("black-overlay").style.display = 'flex';
    document.getElementById("body").style.overflowY = 'hidden';
}

function HideForm(){
    document.getElementById("forms").style.right = -100 + 'vw';
    document.getElementById("black-overlay").style.display = 'none';
    document.getElementById("body").style.overflowY = 'scroll';
}