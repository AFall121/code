# 创建一个react应用
- 1.npx create-react-app my-app
![avatar](./learnImages/react1.jpg)
- 2.根据提示 cd my-app 然后 yarn start 或者npm start
![avatar](./learnImages/react2.jpg)
- 3.比较重要的文件index.html index.js
![avatat](./learnImages/react3.jpg)

### 
- 以前的App.js 是这么写的
```
import React { Component } from 'react'
import logo from './logo.svg'
import './App.css'

Class App extends Component {
    state:{
        states1:[
            {}
            {}
            {}
        ],
        otherState: 'anything'
    }
    render(){
        return (
            <div className='App'>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/App.js</code> and save to reload.</p>
                </header>
            </div>
        );
    }
}

```
- 现在的App.js 是这么写的
```
import React from 'react'
import logo from './logl.svg'
import './App.css'

function App(){
    return (
        <div className='App'>
            <header>
                <img src={logo} className='App-logo' alt='logo' />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
            </header>
        </div>
    );
}
```

<strong>
    两者最大的区别在于是否能引进state状态管理 class App 由于继承了 Component 可以，而function App 则不行
    state: 用于改变组件内状态的值(动态)（所以,我猜App.js才改成函数形式,首页只需引进各个组件即可)
    props: 用于组件之间进行传值
<strong>