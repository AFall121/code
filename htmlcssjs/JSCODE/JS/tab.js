var that;
class Tab {
    constructor(id) {
        // 获取元素
        that = this // 保存this到that
        this.main = document.querySelector(id);
        // this.lis = this.main.querySelectorAll('li')
        // this.sections = this.main.querySelectorAll('section')
        this.add = this.main.querySelector('nav .tabadd')
        this.init()
    }
    init() {
        this.updateNodes()
        // init 初始化操作让相关的元素绑定事件
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            // this.sections[i].index = i
            this.lis[i].addEventListener('click', this.toggleTab)// 切换tab选项
            this.lis[i].querySelector('.icon-guanbi')// 删除当前选项卡
                .addEventListener('click', this.removeTab)
            this.spans[i].addEventListener('dblclick', this.editTab)
            console.log(this.spans[i])
            this.sections[i].addEventListener('dblclick', this.editTab)// 修改当前选项卡的名称
        }
        this.add.addEventListener('click', this.addTab)
    }
    clearClass() {
        for (let i = 0; i < that.lis.length; i++) {
            that.lis[i].classList.remove('liactive')
            that.sections[i].classList.remove('conactive')
        }
    }
    // 1.切换功能
    toggleTab() {
        console.log(this.index)
        // that.lis.forEach((li, index, array) => {
        //     li.classList.remove('liactive')
        // })
        that.clearClass()// 
        this.classList.add('liactive')
        that.sections[this.index].classList.add('conactive')
        // this.lis.forEach((item, index, array) => {
        //     item.classList.remove('liactive')
        // })
        // this.classList.add('liactive')
    }
    // 2.添加功能
    addTab() {
        if (that.lis.length >= 9)
            return // 设置下 最多存在九个tab选项卡
        const li = document.createElement('li') // add li
        const section = document.createElement('section') // add section

        const lisN = that.lis.length + 1 // tab后面的数字

        // 设置innerHTML
        li.innerHTML = `<span>tab${lisN}</span><span class="iconfont icon-guanbi"></span>`
        section.innerHTML = `tab${lisN}`
        // bind some event 这里不需要先绑定事件，因为所有元素的事件绑定都放在了初始化中，
        // 所以，更新完 lis 和 sections 后,重新初始化that.init()
        // li.addEventListener('click', that.toggleTab)
        // li.querySelector('.icon-guanbi').addEventListener('click', that.removeTab)
        // add
        this.previousElementSibling.appendChild(li)
        that.main.querySelector('.tabscon').appendChild(section)
        // update global's lis && sections
        that.init() // 非常重要
    }
    // 3.删除功能
    removeTab(e) {
        e.stopPropagation() // 阻止冒泡 避免将click事件触发父元素li的click事件
        this.parentNode.parentNode.removeChild(this.parentNode)// 或者用remove直接删除元素
        // that.lis[this.parentNodes.index].remove()
        that.main.querySelector('.tabscon').removeChild(that.sections[this.parentNode.index]) // 或者remove
        // that.sections[this.parentNode.index].remove()
        that.init()
        // 删除之后，让前一个元素li变为激活状态liactive
        if (this.parentNode.className.indexOf('liactive') !== -1) // 如果当前li是激活状态才执行下面的if
            if (this.parentNode.index >= 1) {
                that.lis[this.parentNode.index - 1].click()
            } //假若删除的是第一个li(index = 0)则不会变化

    }
    // 4.修改功能
    editTab() {
        // alert(222)
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.getSelection.empty()
        // 双击将将span的innerHTML改为一个文本输入框
        let orignValue = this.innerHTML
        console.log(orignValue)
        // 由于tab的修改和section的修改方法是一样的，所以我们只需判断事件源是span还是section
        if(this.tagName === 'section'){
            this.innerHTML = `<input type = "textarea" />`
        }else {
            this.innerHTML = `<input maxlength = "4" type = "text"/>`
        }
        let input = this.children[0]
        input.value = orignValue
        input.select() // 文本框里的文字处于选中状态
        // 失去焦点时 替换值
        input.addEventListener('blur', function(){
            this.parentNode.innerHTML = this.value
        })
        // key enter
        input.addEventListener('keyup', function(e){
            console.log('kkkk')
            if(e.keyCode === 13){
                // 手动调用上面的表单失焦事件 不需要鼠标离开操作
                this.blur()
            }
        })
    }
    // 更新全局lis和sections
    updateNodes() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.spans = this.main.querySelectorAll('.firstnav li span:first-child')
    }
}

new Tab('#tab')
