const inputDivs = document.querySelectorAll('.input')

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus")
}
function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value==''){
        parent.classList.remove("focus")
    }

}

inputDivs.forEach(el => {
    el.addEventListener('focus', focusFunc)
    el.addEventListener('blur', blurFunc)
})