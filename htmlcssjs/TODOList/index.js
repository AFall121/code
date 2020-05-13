// get add btn
const addBtn = document.querySelector(".todoWrap .content div .add")
console.log(addBtn);
// get item-wrap
const itemWrap = document.querySelector(".todoWrap .content .item-wrap")
console.log(itemWrap);
// get input content
const input = document.querySelector("#inputBox")

const arr = []

input.addEventListener('change', ()=>{
    if (input.value.length > 0) {
        addBtn.addEventListener('click', () => {
            arr.push(input.value)
            if (arr.length > 0) {
                arr.forEach((value, index, array) => {
                    const item = document.createElement('div')
                    item.classList.add('item')
                    console.log(item)
                    const item_input = document.createElement('input')
                    item_input.setAttribute('type','text')
                    item_input.setAttribute('value', value)
                    const removeBtn = document.createElement('button')
                    removeBtn.innerHTML = 'remove'
                    removeBtn.addEventListener('click', function(){
                        delete arr[index]
                        itemWrap.removeChild(this.parentNode)
                    })
                    item.append(item_input)
                    item.append(removeBtn)
                    itemWrap.append(item)
                })
            }
        })
    }
})




