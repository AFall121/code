const trs = document.querySelectorAll('.rightinfo tbody > tr')
const addUserBtn = document.querySelector('#addUserBtn')
addUserBtn.addEventListener('click', addUser)
// console.log(trs)
// console.log($.isArray(trs))
// console.log('-----------------------')
// trs.forEach(function (tr, index, array) {
//     const lastTd = tr.lastElementChild
//     const changeBtn = lastTd.querySelector('.change-link')
//     // 绑定单击事件,生成modal对象(打开modal)
//     changeBtn.addEventListener('click', function () {
//         editUser(user)
//     })
//     const user = [tr.children[1].innerHTML, tr.children[2].innerHTML, tr.children[3].innerHTML]
//     console.log(changeBtn)
// })
for(var i = 0; i < trs.length;i++){
    const lastTd = trs[i].lastElementChild;
    const changeBtn = lastTd.querySelector('.change-link');
    // 绑定单击事件,生成modal对象(打开modal)
    changeBtn.addEventListener('click', function () {
        editUser(user)
    })
    const user = [trs[i].children[1].innerHTML, trs[i].children[2].innerHTML, trs[i].children[3].innerHTML]
    console.log(changeBtn)
}
// 修改User
function editUser(user) {
    const newModal = new Modal(user)
    // console.log(user.name)
    // console.log(user.pass)
    // console.log(user.phone)\
    console.log(newModal.user)
}
// 添加User
function addUser() {
    const newModal = new Modal()
}
console.log('-----------------------')
var that
function Modal(user) {
    that = this;
    this.modal = document.querySelector('.rightinfo > .modal');
    this.form = this.modal.querySelector('#changeInfo');
    this.h2 = this.modal.querySelector('h2')
    this.closeBtn = this.modal.querySelector('.form-close-btn');
    this.inputs = this.modal.querySelectorAll('.form-item > input');
    this.submitBtn = this.modal.querySelector('.changeBtn');
    console.log(this.inputs);
    this.user = user ? user : new Array();
    init();
    function init() {
        that.modal.style.display = 'block';
        // console.log(that.form)
        // console.log(that.h2)
        that.closeBtn.addEventListener('click', closeModal);
        if(that.user.length === 0 ){
            that.h2.innerHTML = "添加用户";
            that.submitBtn.value = "确认添加";
            that.form.action = "https:www.baidu.com"
        }
        // that.form.onsubmit = function(e){
        //     e.preventDefault();
        // }
        // that.inputs.forEach(function (input, index, array) {
        //     // console.log(input)
        //     if (that.user.length != 0) {
        //         input.index = index //保存 index
        //         console.log(input.index);
        //         input.value = that.user[index];
        //     }
        //     input.addEventListener('click', editValue);
        // });

        for(var j =0;j < that.inputs.length;j++){
            if (that.user.length != 0) {
                that.inputs[j].index = j //保存 index
                console.log(that.inputs[j].index);
                that.inputs[j].value = that.user[j];
            }
            that.inputs[j].addEventListener('click', editValue);
        }
        // first show orgin value
        // add event
        console.log(that.user);
        // that.submitBtn.addEventListener('click', changeUser);
        // console.log(this.modal)
        // console.log(this.closeBtn)
    }
    // Method closeModal
    function closeModal() {
        // console.log(this.modal)// this.modal is undefined. so we can save this at header line 1
        that.modal.style.display = "none"
    }
    function editValue() {
        console.log('hello')
        window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty()
        console.log(this)
        this.select() // 点击时可以直接选中原来的文本
        this.addEventListener('blur', function () {
            // console.log(this)
            that.user[this.index] = this.value
            return that.user
        })
        this.addEventListener('keyup', function (e) {
            if (e.keyCode == 13)
                this.blur()
        })
    }
    function SendForm() {
        if (CheckPost()) {
            document.changeInfo.submit();
        }
    }

    function CheckPost() {
        if (changeInfo.user.value == "") {
            alert("请填写用户名！");
            changeInfo.uname.focus();
            return false;
        }
        if (changeInfo.upswd.value.length < 8) {
            alert("密码不能少于8个字符！");
            changeInfo.upswd.focus();
            return false;
        }
        return true;
    }
}