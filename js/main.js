let inputField = document.querySelector("input");
let btn = document.querySelector("button");



// Focus
window.onload = function(){
    inputField.focus();
}


// Function
btn.onclick = function(){
    window.open(`https://api.github.com/users/${inputField.value}`)
}