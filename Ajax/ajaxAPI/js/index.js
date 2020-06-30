// let xhr = new XMLHttpRequest();
let xhr = window.XMLHttpRequest? new XMLHttpRequest():new ActiveXObject();
console.log(xhr)



const getMsg = () => {
    /**
     * * onreadystatechange  type: listenner function
     * ! 最原始的写法。。。 监听准备状态改变-->直到准备状态到达第4阶段，且状态码为200(完美)
    */
    // xhr.onreadystatechange=function(){
    //     if(xhr.readyState = 4){
    //         if(xhr.status = 200){
    //             let data = xhr.response
    //             console.log(data)
    //             console.log(typeof data)
    //         }
    //     }
    // }

    // 上面的也可以合并下条件
    // xhr.onreadystatechange = ()=>{
    //     if(xhr.readyState===4 && xhr.status === 200){
    //         let data = xhr.response
    //         console.log(data)
    //     }
    // }
    /**
     * * onload 
     * !加载完成
    */
    // 我暂时没有发现xhr。statusText有什么用，此处值为空字符串''
    xhr.onload = function () {
        console.log(`xhr.readyStatus:${xhr.readyState}`)
        console.log(`xhr.status:${xhr.status}`)
        // console.log(xhr.statusText=== '') // true
        console.log(xhr.timeout)
        console.log('xhr: ====>>>>')
        console.log(xhr)
        let data = xhr.response
        console.log(data)
        console.log(new Error('hahah'))
    }

    xhr.onloadstart = () => {
        console.log(`load start ----->`)
    }
    xhr.onloadend = () => {
        console.log(`load end ----->`)
    }
    // 现在我还用不来这个error事件 以下代码并没有触发 也许我理解的错误有问题
    xhr.onerror = () => {
        console.log('youcuo')
    }


    xhr.open('GET', "https:reqres.in/api/users?dalay=3")
    // xhr.setRequestHeader("Content-Type","application/json")
    xhr.setRequestHeader("Content-Type","application/json; charset=utf-8")
    xhr.send(null)
}


const btn = document.getElementById('getData')
btn.onclick = getMsg
