const audio = document.querySelector('audio')
const btn = document.querySelector('div.play')
const txt = document.querySelector('#txt')
const con = document.querySelector('.lrc div.content')

let flag = true
btn.onclick = function () {
    // flag?this.classList.add('rotate'):this.classList.remove('rotate')
    if (flag) {
        this.classList.add('rotate')
        audio.play()
    } else {
        this.classList.remove('rotate')
        audio.pause()
    }
    // 切换标记状态
    flag = !flag
    console.log(this)
}

let lrc = txt.value
let lrcArr = lrc.split('[')
console.log(lrc) // 实际项目中直接从api获取就行

let html = ''
let length = lrcArr.length
for (let i = 0; i < length; i++) {
    let lineArr = lrcArr[i].split(']')
    let time = lineArr[0].split('.') // 分：秒  01:02.20 1分两秒
    let timearr = time[0].split(':') 

    let ms = timearr[0] * 60 + timearr[1]*1
    let text = lineArr[1]
    if (text) {
        html += "<p id=" + ms + ">" + text + "</p>"
    }
}
con.innerHTML = html


let num = 0
var oP = con.querySelectorAll('p')
audio.ontimeupdate = function () {
    let curTime = parseInt(this.currentTime)
    console.log(curTime)
    if (document.getElementById(curTime)) {
        for (let i = 0; i < oP.length; i++) {
            oP[i].style.cssText = "font-size: 15px;"
        }
        document.getElementById(curTime).style.cssText = "font-size:20px;background:linear-gradient(-1deg,pink,red,black);-webkit-background-clip:text;color:transparent;"
        // num 其实就是秒数 curTime
        // num  curTime
        // 1        1  第一句 歌词
        // 2        2  第一句 歌词
        // 3        3  第一句 歌词
        // 4        4  第二句 歌词
        // 第一句歌词是数组的第几行就是几-1 比如第五行是第一句 则为4
        if (oP[4 + num].id == curTime) { 
            con.style.top = -20 * num + 'px'
            num++
        }
    }
}