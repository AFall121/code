const trs = document.querySelectorAll('.rightinfo tbody > tr')
console.log(trs)
// console.log($.isArray(trs))
console.log('-----------------------')
trs.forEach((tr, index, array) => {
    const lastTd = tr.lastElementChild
    const changeBtn = lastTd.querySelector('.change-link')
    // 绑定单击事件,生成modal对象(打开modal)
    changeBtn.addEventListener('click', function(){
            editUser(user)
    })
    const user = [tr.children[1].innerHTML, tr.children[2].innerHTML, tr.children[3].innerHTML]
    console.log(changeBtn)
})
// 修改User
function editUser(user){
    const newModal = new Modal(user)
    // console.log(user.name)
    // console.log(user.pass)
    // console.log(user.phone)\
    console.log(newModal.user)
}
// 添加User
function addUser(){
    const newModal = new Modal()
}
console.log('-----------------------')
var that
class Modal{
    constructor(user){
        that = this // save this this line num is 1
        this.modal = document.querySelector('.rightinfo > .modal')
        this.closeBtn = this.modal.querySelector('.form-close-btn')
        // this.uname = this.modal.querySelectorAll('.form-item')[0].lastElementChild
        // this.upswd = this.modal.querySelectorAll('.form-item')[1].lastElementChild
        // this.uphone = this.modal.querySelectorAll('.form-item')[2].lastElementChild
        this.inputs = this.modal.querySelectorAll('.form-item > input')
        this.submitBtn = this.modal.querySelector('.changeBtn')
        console.log(this.inputs)
        this.user = user? user : new Array()
        this.init()
    }
    init(){
        this.modal.style.display = 'block'
        this.closeBtn.addEventListener('click', this.closeModal)
        this.inputs.forEach((input, index, array) => {
            input.index = index //保存 index
            input.value = that.user[index]
            input.addEventListener('click', that.editValue)
        })
        // first show orgin value
        // this.uname.value = this.user.name
        // this.upswd.value = this.user.pass
        // this.uphone.value = this.user.phone
        // add event
        // this.uname.addEventListener('click', this.editValue)
        // this.upswd.addEventListener('click', this.editValue)
        // this.uphone.addEventListener('click', this.editValue)
        this.submitBtn.addEventListener('click', this.changeUser)
        // console.log(this.modal)
        // console.log(this.closeBtn)
    }
    // Method closeModal
    closeModal() {
        // console.log(this.modal)// this.modal is undefined. so we can save this at header line 1
        that.modal.style.display = "none"
    }
    // edit input'value
    editValue(e){
        e.preventDefault()
        window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty()
        this.select() // 点击时可以直接选中原来的文本
        this.addEventListener('blur', function(){
            // console.log(this)
            that.user[this.index] = this.value
            return that.user
        })
    }

    changeUser(){
        // 封装改完的user
        const user = that.user
        console.log(that.user)
        that.action ="<%=path%>/servlet/RegisterAction?action_flag=loginPcMsg"; //最后把这个action地址改了
        that.sumbit()
    }
}



// class Ajax {
//     constructor(xhr) {
//         xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
//         this.xhr = xhr;
//     }

//     send(options) {
//         let xhr = this.xhr;

//         let opt = {
//             type: options.type || 'GET',
//             url: options.url || '',
//             async: options.async || 'true',
//             dataType: options.dataType || 'json',
//             questring: options.questring || ''
//         };

//         return new Promise((resolve, reject) => {
//             xhr.open(opt.type,opt.url,opt.async);

//             xhr.onreadystatechange = () => {
//                 if(xhr.readyState === 4) {
//                     if(xhr.status === 200){
//                         if(opt.dataType === 'json'){
//                             const data = JSON.parse(xhr.responseText);
//                             resolve(data);
//                             console.log(data);
//                         }
//                     }else {
//                         reject(new Error(xhr.status || 'Server is fail.'));
//                     }
//                 }
//             };
//             xhr.onerror = () => {
//                 reject(new Error(xhr.status || 'Server is fail.'));
//             };
//             xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//             xhr.send(opt.questring);
//         })
//     }
// }

