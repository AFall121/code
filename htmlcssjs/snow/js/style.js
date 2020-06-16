let snows = document.querySelectorAll('div.snow')

const randomN = ()=>{
    let left = Math.floor(Math.random()*100)+'%' 
    let animationDelay = Math.random()*10+'s'
    return { left ,animationDelay }
    
}


    for(snow of snows){
        // const cssStyle = getComputedStyle(snow)
        // let ii = cssStyle.getPropertyValue("--i")
        // let i = getComputedStyle(snow).getPropertyValue("--i")
        // console.log(i)
        snow.style.setProperty("left",randomN().left)
        snow.style.setProperty("animation-delay",randomN().animationDelay)    
        snow.addEventListener('animationiteration', function() {
            this.style.setProperty("left",randomN().left)
            this.style.setProperty("top","0%")
            this.style.setProperty("animation-delay",randomN().animationDelay)
        })
    }

