# 重学了一遍js ES6
## 01创建类和对象
## create a class
```
class name {
    // class body
}
```
- create a instance of class name
```
const xx = new name()
```
*[NOTICE]*
- 类必须使用new来实例化对象
- 我们在创建函数对象的实例时也是用的new哦，其实就是模仿的Java里的类的实例化(构造函数)
```
// 1. 创建类 class 创建一个明星类
class Star {
    constructor(uname){
        this.uname = uname;
    }
}
// 2. 利用类创建对象 new关键字
var caixukun = new Star('蔡徐坤')
var zhangxueyou = new Star('张学友')
console.log(`caixukun 的名字：${caixukun.uname}`)
```
```
// 3.JS中函数对象   其实就是模仿的Java
function Phone(brand){
    this.brand = brand
    this.hello = function() {
        console.log(`I'm a phone,my brand is ${this.brand}`)
    }
}
let hw = new Phone()
hw.hello()
let hw2 = new Phone('HuaWei')
hw2.hello()
```

## 02类里面添加方法
```
class Person{
    constructor(name,age){ // 构造函数or构造器
        this.name = name
        this.age = age
    }
    // 说话的方法
    say(){
        console.log(`${this.name}:妹子，你好！`)
    }
}
```
*[NOTICE]*:
- 自己写的js如果要引入，一般都放在要操纵的元素之后，body结束标签之前,我经常容易将自己写的js文件引入到head tag 里,结果经常卡在一些元素undfined or null of content 的问题上，原因：页面body里的元素未被加载，在js中就被操纵。。。。这简直就是在和空气斗争呢！
本次开始我就错误的将js文件放在了head里。。。。
```
    <link rel="stylesheet" href="../CSS/style.css">
    <!-- <script src="../JS/log2.js"></script> -->
</head>
```

## 03 Class inherit
```
<div class="container"></div>
<script src="../JS/log.js"></script>
<script>
    logTitle('03 class inherit')
    class People{
        constructor(name,age,continent){
            this.name = name
            this.age = age
            this.continent = continent
        }
        run = ()=>{
            log(`I'm running!`)
        }
    }

    class Asian extends People{
        constructor(name,age){
            super(name,age)
            this.continent = 'Asian'
        }
    }

    const zhangsan = new Asian('zhangsan',18)
    log(JSON.stringify(zhangsan))
    log(zhangsan.run) //函数名也可做变量(arrow function)
    //我们可以知道zhangsan.run其实就是一个函数字符串str的样子(等号后面)
    log(zhangsan.run())// 调用zhangsan.run()函数，然后返回undefined
    //因为此函数没有返回值嘛，所以log(undefined)得到undefined
</script>
```
*[result]*:
```
{"name":"zhangsan","age":18,"continent":"Asian"}
()=>{ log(`I'm running!`) } // log(zhangsan.run)
I'm running! // log(zhangsan.run())
undefined // 
```
*[NOTICE]*:
- super关键字是用来调用父类的方法的，和Java是一样的

#### brief summary:
- 1.在 ES6 中**类**没有变量提升，所以必须**先定义类**，才能通过类实例化对象
- 2.类里面的共有属性和方法一定要加**this**使用。
- 3.**this**的指向问题
constructor里面的**this**指向的就是**创建的实例对象** 谁调用指向的就是谁


## 04 Case: tab栏切换

<details>
<summary>html</summary>

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="../CSS/tabstyle.css">

</head>
<body>
    <div class="tabsbox" id="tab">
        <!-- tab tag-->
        <nav class="firstnav">
            <ul>
                <li class="liactive"><span>tab1</span><span class="iconfont icon-guanbi"></span></li>
                <li><span>tab2</span><span class="iconfont icon-guanbi"></span></li>
                <li><span>tab3</span><span class="iconfont icon-guanbi"></span></li>
                <li><span>tab4</span><span class="iconfont icon-guanbi"></span></li>
            </ul>
            <div class="tabadd">
                <span>+</span>
            </div>
        </nav>
        
        <!-- tab content-->
        <div class="tabscon">
            <section class="conactive">tab1</section>
            <section>tab2</section>
            <section>tab3</section>
            <section>tab4</section>
        </div>
    </div>
    <script src="../JS/tab.js"></script>
    <!-- <div class="container"></div>
    <script src="../JS/log.js"></script>
    <script>
        logTitle('04 case:toggle tab 01')

    </script> -->
</body>
</html>
```

</details>

<details>
<summary>css</summary>

```
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 21px;
}
/* body{
    min-height: 100vh;
} */
#tab{
    width: 1000px;
    height: 400px;
    background-color: #f1f1f1;
    border: 2px solid #111;
    border-radius: 6px;
    box-shadow: 0 0 20px #111,
                0 0 20px #111,
                0 0 30px #111;
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    transform: translate(-50%,-50%);
}
#tab nav{
    height: 60px;
    background-color: #2e2e2e;
    /* border-bottom: 2px solid #2e2e2e; */
    position: relative;
}
#tab ul{
    width: 70%;
    height: 100%;
    /*
        为了解决li标签右边的空格问题，需要在ul样式里设置font-size:0;
        如果需要再在li的样式中重写font-size
    */
    font-size: 0;
}
#tab ul>li{
    list-style: none;
    display: inline-block;
    width: 70px;
    height: 100%;
    padding: 0 10px;
    /* border-right: 1px solid #000; */
    text-align: center;
    outline: unset;
    cursor: pointer;
    position: relative;
}
#tab ul>li>span:nth-child(1){
    display: block;
    width: auto;
    line-height: 60px;
    position: absolute;
    box-sizing: border-box;
    /* text-align: center; */
}
#tab ul>li>span:nth-child(1) > input[type="text"]{
    width: 50px;
    size: 4;
}
#tab ul>li>span:nth-child(2){
    position: absolute;
    top: 0;
    right: 0;
}
.icon-guanbi{
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid rgb(57, 59, 59);
    position: absolute;
}
.icon-guanbi:before{
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    position: absolute;
    left: 50%;
    background-color: whitesmoke;
    transform: translateX(-50%) rotate(45deg);
}
.icon-guanbi:after{
    content: '';
    display: block;
    width: 2px;
    height: 100%;
    position: absolute;
    right: 50%;
    background-color: whitesmoke;
    transform: translateX(50%) rotate(-45deg);
}
/* #tab ul>li::after,#tab ul>li::before{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 0;
} */
#tab ul>li.liactive{
    background-color: #3e3e3e;
    /* border-bottom: 1px solid #3e3e3e; */
}
#tab nav > .tabadd{
    position: absolute;
    width: 60px;
    height: 100%;
    top: 0;
    right: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.tabscon{
    height: calc( 100% - 60px );
    background-color: #3e3e33;
}

.tabscon > section{
    display: none;
}

.tabscon .conactive{
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px;
}
```
</details>

<details>
<summary>js</summary>

```
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
```
</details>