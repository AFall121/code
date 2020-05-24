const container = document.querySelector('.container')

const log = (str)=>{
    const logDiv = document.createElement('div')
    logDiv.classList.add('logDiv')
    logDiv.innerHTML = str
    container.append(logDiv)
}

const logTitle = (title) =>{
    this.h3 = document.createElement('h3')
    this.h3.classList.add('logTitle')
    this.h3.innerHTML = title
    container.append(this.h3)
}



