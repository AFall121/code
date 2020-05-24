const body = document.querySelector('body')
console.log(body)

const log = (str) =>{
    const div = document.createElement('div')
    div.classList.add('logDiv')
    div.innerHTML = str
    body.append(div)
}

log('高手')