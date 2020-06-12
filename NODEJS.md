# NODEJS 一些api

## 特此声明
- 此md文件是由作者本人从网上各处copy(东拼西凑)的，仅用于自己忘了时个人使用，无任何商业价值。
## url模块的内容copy自简书作者 他爱在黑暗中漫游
### nodejs url模块
nodejs中用户url格式化和反格式化模块
用于url解析、处理等操作的解决方案

#### 1.url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
- urlString <string> 要解析的 URL 字符串。
- parseQueryString <boolean> 如果为 true，则 query 属性总会通过 querystring 模块的 parse() 方法生成一个对象。 如果为 false，则返回的 URL 对象上的 query 属性会是一个未解析、未解码的字符串。 默认为 false。
- slashesDenoteHost <boolean> 如果为 true，则 // 之后至下一个 / 之前的字符串会被解析作为 host。 例如，//foo/bar 会被解析为 {host: 'foo', pathname: '/bar'} 而不是 {pathname: '//foo/bar'}。 默认为 false。
- url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象。
如果urlString不是字符串将会抛出TypeError。

<strong> 如果auth属性存在但无法编码则抛出URIError。</strong>

示例1：
```

var url = require("url")
var myurl="http://www.nodejs.org/some/url/?with=query&param=that#about"
parsedUrl=url.parse(myurl)
```
结果
```
{ protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.nodejs.org',
  port: null,
  hostname: 'www.nodejs.org',
  hash: '#about',
  search: '?with=query&param=that',
  query: 'with=query&param=that',
  pathname: '/some/url/',
  path: '/some/url/?with=query&param=that',
  href: 'http://www.nodejs.org/some/url/?with=query&param=that#about' 
}
```
##### 当parse方法第二个参数为true时，结果如下
```
parsedUrl=url.parse(myurl,true)
{ protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.nodejs.org',
  port: null,
  hostname: 'www.nodejs.org',
  hash: '#about',
  search: '?with=query&param=that',
  query: { with: 'query', param: 'that' },
  pathname: '/some/url/',
  path: '/some/url/?with=query&param=that',
  href: 'http://www.nodejs.org/some/url/?with=query&param=that#about' }
```
### 2.url.format(urlObject)
- urlObject <Object> | <string> 一个 URL 对象（就像 url.parse() 返回的）。 如果是一个字符串，则通过 url.parse() 转换为一个对象。
url.format() 方法返回一个从 urlObject 格式化后的 URL 字符串。

如果 urlObject 不是一个对象或字符串，则 url.format() 抛出 TypeError。

示例
```
var url=require('url');  
var obj1={ protocol: 'http:',      
  slashes: true,         
  auth: null,           
  host: 'calc.gongjuji.net',   
  port: null,                 
  hostname: 'calc.gongjuji.net',  
  hash: '#one#two',              
  search: '?name=zhangsan&age=18',  
  query: 'name=zhangsan&age=18',    
  pathname: '/byte/',              
  path: '/byte/?name=zhangsan&age=18',  
  href: 'http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two'   
};  
var url1=url.format(obj1);  
console.log(url1);//http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two  
//请求参数为为json对象  
var obj2={ protocol: 'http:',  
slashes: true,  
auth: null,  
host: 'calc.gongjuji.net',  
port: null,  
hostname: 'calc.gongjuji.net',  
hash: '#one#two',  
search: '?name=zhangsan&age=18',  
query: { name: 'zhangsan', age: '18' }, //页面参数部分，已经解析成对象了  
pathname: '/byte/',  
path: '/byte/?name=zhangsan&age=18',  
href: 'http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two' };  
var url2=url.format(obj2);  
console.log(url2); //http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two  
//缺少参数的情况  
var obj3={ protocol: null,  
slashes: true,  
auth: null,  
host: 'www.gongjuji.net',  
port: null,  
hostname: 'www.gongjuji.net',  
hash: '#one',  
search: '?name=zhangsan',  
query: { name: 'zhangsan' },  
pathname: '/byte/',  
path: '/byte/?name=zhangsan',  
href: '//www.gongjuji.net/byte/?name=zhangsan#one' };  
var url3=url.format(obj3);  
console.log(url3);//www.gongjuji.net/byte/?name=zhangsan#one  
```
### 3.url.resolve(from, to)
- from <string> 解析时相对的基本 URL。
- to <string> 要解析的超链接 URL。
- url.resolve() 方法会以一种 Web 浏览器解析超链接的方式把一个目标 URL 解析成相对于一个基础 URL。

例子

```
url.resolve('/one/two/three', 'four')         // '/one/two/four'
url.resolve('http://example.com/', '/one')    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two') // 'http://example.com/two'
```

## 以下四个与nodejs相关的copy自简书作者 秋意思寒 （good nickname）
### （一）初识NodeJs
- NodeJs的出现，让JavaScript工程师实现了独自完成全栈的梦想。NodeJs作为后端JavaScript的运行平台，保留了前端浏览器中那些熟悉的接口，没有改写语言本身的任何特性，依然基于作用链和原型链。

### NodeJs有以下几个特点：
#### 异步I/O
异步I/O的最常见实现场景就是发起Ajax调用。这里演示的是一个Ajax请求：
```
$.post("/url", {"title": "这是参数"}， function(data){
    console.log("收到响应");
});
console.log("发送Ajax结束");
```
这里，我们会注意到，输出“发送Ajax结束”并不一定是在输出“收到响应”之后，因为“收到响应”的执行时间是不被预期的。这里是比较重要的异步的原则：‘Don`t call me, I will call you’，<strong>注重结果，不关心过程。</strong>

在NodeJs中，绝大多数的操作都是以异步的方式进行调用。在NodeJs中，我们可以从语言层面很自然的进行并行I/O操作，每个调用之间无需等待其他调用结束，在<strong>编程模型上可以极大的提升效率。</strong>

这里是两个文件读取任务的耗时取决于最慢的那个文件读取的耗时：
```
var fs = require("fs");
fs.readFile("/path1", function(err, file){
    console.log("读取文件1完成");
});
fs.readFile("/path2", function(err, file){
    console.log("读取文件2完成");
});
```
#### 事件与回调函数
NodeJs是将前端浏览器中广泛且成熟的事件引入后端，配合异步I/O，将事件点暴露给业务逻辑。
```
var http = require("http");
var querystring = require("querystring");

// 侦听服务其的request事件

http.createServer(function(req, res){
  var postData = '';
  req.setEncoding('utf8');

  // 侦听请求的data事件

  req.on('data', function(chunk){
    postData += chunk;
  });

  // 侦听请求的end事件
  req.on('end', function(){
    res.end(postData);
  });

}).listen(8080);
console.log('server start at port:8080')
```
在web服务器绑定request事件，对于请求对象，为其绑定data事件和end事件。相应的在前端Ajax请求中绑定success事件，在发出请求后，只需关心请求成功时执行相应的业务逻辑即可。
```
$.ajax({
  'url': '127.0.0.1:8080',
  'method': 'POST',
  'data': {},
  'success': function(data){
    console.log(data);
  }
})
```
以上代码只是演示，此处的ajax并不能运行。在此只是说明“事件”。

事件的编程方式具有<strong>轻量级、松耦合、只关注事务点</strong>等优势。但是也会造成在多个异步任务的场景下，事件和事件之间各自独立，如何协作是一个重要的问题。

回调函数无处不在。在JavaScript中，是<strong>将函数作为第一等公民来对待的，可以将函数作为对象传递给方法作为参数进行调用</strong>(这里说的是不是闭包？可以去深揪一下！)

回调函数是最好的接受异步调用、返回数据的方式，但是这种编程方式对于同步思路编程的人来说，是一大挑战。<strong>代码的编写顺序与执行顺序并无关系</strong>，在流程控制方面，由于穿插了异步和回调使得变得不是那么一目了然。但是对于业务的划分和对事件的提炼上复杂度与同步方式是一致的。

#### 单线程
NodeJs保持了<strong>JavaScript在浏览器中的单线程</strong>的特点。而且在NodeJs中，JavaScript<strong>与其他线程是无法共享任何状态的</strong>。

单线程的最大好处就是：<strong>不用向多线程那样处处在意状态的同步问题，没有死锁的的存在，也没有线程上下文交换（这点需要深入解释下）所带来的性能上的开销</strong>。

当然单线程也是有很大的弱点，但是必须要积极面对才能享受到node带来的好处。主要有以下三大方面：

- 无法利用多核CPU。
- 错误会引起整个应用的退出，应用的健壮性值得考验。
- 大量计算占用CPU导致无法继续调用异步I/O。
在浏览器中JavaScript与UI共用一个线程，JavaSript长时间执行会导致UI的渲染和相应被终端(这里思考浏览器加载资源的方式是并行还是串行，如何提高这方面的性能！)

第三个弱点，有相应的解决方案，这里暂时先不提！

#### 跨平台
兼容于Windows和Linux平台。

#### 应用场景
##### I/O密集型
NodeJs擅长I/O密集型的应用场景，面向网络且擅长并行I/O，能够有效的组织更多的硬件资源，

I/O密集的优势主要在于NodeJs利用事件循环的处理能力，而不是启动每一个线程为每一个请求服务，资源占用极少。

##### 分布式应用
##### 与遗留系统和平相处
##### 是否不擅长CPU密集型业务
这里简单的认识NodeJs，了解了其特性和应用场景，接下来，需要深入了，加油哦！



### (二)NodeJs模块机制和异步I/O
#### NodeJsmo模块机制
#### CommonJs的模块规范
### 模块引用
示例代码如下：
```
var math = require("math");
```
在CommonJs规范中，存在require()方法，这个方法接受模块标识，以此引入一个模块的API到当前上下文中。

#### 模块定义
在模块中，上下文提供require()方法来引入外部模块。对应引入的功能，上下文提供了exports对象用于导出当前模块的方法或者变量，并且它是唯一到处的出口。在模块中，还存在一个module对象，它代表模块自身，而exports是module的属性。在NodeJs中一个文件就是一个模块，将方法挂载在exports对象上可作为属性即可定义导出的方式：
```
//math.js

exports.add = function(){
    var sum = 0,
    i = 0,
    args = arguments,
    l = args.length;
    while(i < 1){
        sum += args[i++];
    }
    return sum;
}
```
在另一个文件中通过require()方法引入模块后，就能调用定义的属性和方法了，
```
//program.js
var math = require("./math");
exports.iscrement = function(val){
    return math.add(val, 1);
};
```
这里，math.js和program.js在同一级目录下，最后在program.js中require("./math")。

#### 模块标识
模块标识其实就是通过传递给require()方法的参数，它必须是符合小驼峰命名的字符串，或者是以.、..开头的相对路径，或者是绝对路径，它可以没有文件后缀.js

每个模块具有独立的空间，它们相互不干扰，在引用时也显得干净利落。这套模块导出和引用机制使得用户完全不必考虑变量污染，命名空间等。

#### NodeJs的模块实现
在NodeJs中引入模块，需要经历以下三个步骤：

- 1 路径分析
- 2 文件定位
- 3 编译执行
模块分为两大类：

- 核心模块，有NodeJs提供的模块。
- 文件模块，有用户编写的模块。
#### 优先从缓存加载
NodeJs对引入过的模块都会进行缓存，缓存的是编译和执行之后的对象。

不管是核心模块还是文件模块，require()方法对相同模块的二次加载都一律采用缓存优先。不同的是核心模块的缓存先于文件模块的缓存检查。

#### 路径分析和文件定位
<strong>模块标识符</strong>主要分为以下几类：

- 核心模块，如http，fs， path
- .或者..开始的相对路径文件模块
- 以/ 开始的绝对路径文件模块
- 非路径形式的文件模块，如自定义的connect模块自定义模块
如果试图加载一个与核心模块标识符相同的，那是不会成功的。想要加载成功，必须选择一个不同的标识符或者换用路径的方式。

自定义模块的查找是最费时间的。

模块路径是NodeJs在定义文件模块的具体文件时定制的查找策略，具体表现为一个路径组成的数组。它的生成方式与JavaScript的原型链或作用域链的查找方式十分类似。在加载的的过程中，NodeJs会逐个尝试模块路径中的路径，直到找到目标文件为止。
```
// moudle_path.js
console.log(module.paths);
```
#### 文件定位
require()在分析标识符的过程中，会出现标识符中不包含文件扩展名的情况。CommonJs模块规范也允许标识符中不包含文件扩展名，这种情况下，NodeJs会按.js 、.json、.node的次序补足扩展名，依次尝试。
![avatar](https://upload-images.jianshu.io/upload_images/3248493-7e36a65fa76a1983.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)
文件定位流程图
在尝试的过程中，需要调用fs模块同步阻塞式地判断文件是否存在，由于NodeJs是单线程的，所以这里会引起一个性能问题。

<strong>如果是.node和.json文件，在传递给require()的标识符中带上扩展名，会加快一些速度。
同步配合缓存，可以大幅度缓解NodeJs单线程中阻塞式调用的缺陷。</strong>

在分析标识符的过程中，require()通过分析文件扩展名之后，可能没有查找到对应文件，但却得到一个目录，这在引入自定义模块和逐个模块路径精心查找时经常会出现，此时NodeJs会将目录当成一个包来处理。

#### 模块编译
在NodeJs中，每个文件都是一个对象，它的定义如下：
```
function Module(id, parent){
    this.id = id;
    this.exports = {};
    this.parent = parent;
    if (parent && parent.children){
        parent.children.push(this);
    }
    
    this.filename = null;
    this.loaded = false;
    this.children = [];
}
```
定位到文件之后，NodeJs会新建一个模块对象，然后根据路径载入并编译。不同的文件拓展名，其载入的方法有所不同。

- .js文件，通过fs模块同步读取文件后编译执行。
- .node，这是C/C++编写的拓展文件，通过dlopen()方法加载最后编译生成的文件。
- .json，通过fs模块同步读取文件后，用JSON.parse()解析后返回结果。
其余扩展名文件，当作.js文件载入。
每一个编译成功的模块都会将其文件路径作为索引缓存在 Module._cache 对象上,以提高二次引入的性能。

#### JavaScript模块的编译

每个模块文件中存在着 require 、 exports 、 module 这3个变量,在编译的过程中,Node对获取的JavaScript文件内容进行了头尾包装。在头部添加了 (function (exports, require, module, __filename, __dirname) {\n ,在尾部添加了\n}); 。一个正常的JavaScript文件会被包装成如下的样子:
```
(function (exports, require, module, __filename, __dirname) {
    var math = require('math');
    exports.area = function (radius) {
      return Math.PI * radius * radius;
    };
});
```
这 样 每 个 模 块 文 件 之 间 都 进 行 了 作 用 域 隔 离 。 包 装 之 后 的 代 码 会 通 过 vm 原 生 模 块 的runInThisContext () 方法执行(类似 eval ,只是具有明确上下文,不污染全局),返回一个具体的function 对象。

exports 对象是通过形参的方式传入的,直接赋值形参会改变形参的引用,但并不能改变作用域外的值。
```
var change = function (a){
  a = 100;
  console.log(a);  // 100
}
var a = 10;
change(a);
console.log(a);  // 10
```
#### C/C++模块的编译

##### JSON文件的编译

NodeJs利用 fs 模块同步读取JSON文件的内容之后,调用 JSON.parse () 方法得到对象,然后将它赋给模块对象的 exports ,以供外部调用。

#### NodeJs核心模块
NodeJs的核心模块在编译成可执行文件的过程中被编译进了二进制文件。核心模块其实分为C/C++编写的和JavaScript编写的两部分,其中C/C++文件存放在Node项目的src目录下,JavaScript文件存放在lib目录下。

NodeJs的 buffer 、crypto 、 evals 、 fs 、 os 等模块都是部分通过C/C++编写的。
![avatar](https://upload-images.jianshu.io/upload_images/3248493-177b481df1694dcc.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/307/format/webp)
依赖层次关系
<strong>JavaScript的一个典型弱点就是位运算。JavaScript的位运算参照Java的位运算实现,但是Java位运算是在 int 型数字的基础上进行的,而JavaScript中只有 double 型的数据类型,在进行位运算的过程中,需要将 double 型转换为 int 型,然后再进行。所以,在JavaScript层面上做位运算的效率不高。</strong>

#### 包与 NPM
CommonJS的包规范的定义其实也十分简单,它由包结构和包描述文件两个部分组成,前者用于组织包中的各种文件,后者则用于描述包的相关信息,以供外部读取分析。
![avatar](https://upload-images.jianshu.io/upload_images/3248493-e2dd8a0f9932e25e.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/874/format/webp)
包组织模块示意图
包实际上是一个存档文件,即一个目录直接打包为.zip或tar.gz格式的文件,安装后解压还原为目录。完全符合CommonJS规范的包目录应该包含如下这些文件。

- package.json:包描述文件。
- bin:用于存放可执行二进制文件的目录。
- lib:用于存放JavaScript代码的目录。
- doc:用于存放文档的目录。
- test:用于存放单元测试用例的代码。
包描述文件用于表达非代码相关的信息,它是一个JSON格式的文件——package.json,位于包的根目录下,是包的重要组成部分。而NPM的所有行为都与包描述文件的字段息息相关。

对于NodeJs而言,NPM帮助完成了第三方模块的发布、安装和依赖等。借助NPM,Node与第三方模块之间形成了很好的一个生态系统。借助NPM,可以帮助用户快速安装和管理依赖包。

#### NPM常用功能
##### 查看帮助

- 在安装Node之后,执行 npm –v 命令可以查看当前NPM的版本
```
npm -v
```
- 在不熟悉NPM的命令之前,可以直接执行NPM查看到帮助引导说明
```
npm
```
- 安装依赖包是NPM最常见的用法,它的执行语句是
```
npm install express
```
NPM会在<strong>当前目录</strong>下创建node_modules目录,然后在node_modules目录下创建express目录,接着将包解压到这个目录下。

- 进行全局模式安装
```
npm install express –g
```
<strong>需要注意的是,全局模式并不是将一个模块包安装为一个全局包的意思,它并不意味着可以从任何地方通过 require() 来引用到它。实际上, -g 是将一个包安装为全局可用的可执行命令。它根据包描述文件中的 bin 字段配置,将实际脚本链接到与NodeJs可执行文件相同的路径下</strong>。

- 如果不能通过官方源安装,可以通过镜像源安装，在执行命令时,添加 --registry=http://registry.url即可
```
npm install underscore --registry=http://registry.url
```
如果使用过程中几乎都采用镜像源安装,可以执行以下命令指定默认源
```
npm config set registry http://registry.url
```
在执行 npm uninstall <package>时, uninstall 指向的脚本也许会
做一些清理工作等。

- 分析出当前路径下能够通过模块路径找到的所有包,并生成依赖树
```
npm ls
```
异步I/O



### (三)NodeJs快速入门

### 开始用NodeJs编程
#### Hello World
创建hello.js编写如下代码：
```
conlose.log("Hello World")
```

打开终端，进入hello.js所在目录，执行命令：

```
node hello.js
```

console.log是我们最常用的输出指令,它和C语言中的printf的功能类似,也可以接受任意多个参数,支持%d、%s变量引用。

```
console.log("%d", 1000)
```

#### 建立HTTP服务器
Node.js将“HTTP服务器”这一层抽离,直接面向浏览器用户。
![avatar](https://upload-images.jianshu.io/upload_images/3248493-a60384e1e638e02d.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/405/format/webp)
Node.js与PHP的架构
让我们创建一个HTTP服务，建立一个名为app.js的文件

```
// app.js
var http = require("http");

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hello world!</h1>");
    res.end("<p>NodeJs</p>");
}).listen(3000);

console.log("Server start at port 3000!")
```

运行node app.js命令，打开浏览器访问http://127.0.0.1:3000，即可看到输出。

listen函数中创建了事件监听器，使得Node.js进程不会退出事件循环。

#### 异步式I/O与事件式编程
NodeJs最大的特点就是异步式I/O（或者非阻塞I/O）与事件紧密结合的编程模式。控制流很大程度上要靠事件和回调函数来组织，一个逻辑要拆分为若干个单元。

#### 阻塞与线程
#### 回调函数
在NodeJs中如何用异步的方式读取一个文件，下面是一个例子：
```
// readFile.js
var fs = require("fs");

fs.readFile("server.js", "utf-8", function (err, data) {
    if(err){
        console.log("file read err!");
    }else {
        console.log(data);
    }
});
console.log("End!")
```

运行文件会发现，首先输出“End!”，然后才是读取文件的内容！

NodeJs也支持同步读取文件：

```
//readFile.js

var fs = require("fs");
var data = fs.readFileSync("server.js", "utf-8");
console.log(data);
console.log("End!");
```

运行文件，先输出文件内容，最后输出"End!"

异步式I/O是通过回调函数来实现的。fs.readFile接收了三个参数，第一个是文件名，第二个是编码方式，第三个是一个函数，我们称这个函数为回调函数。

<strong>NodeJs中，并不是所有的API都提供了同步和异步版本。Node.js不鼓励使用同步I/O</strong>。

#### 事件
NodeJs所有的异步I/O操作在完成时都会发送一个事件到事件队列。事件由EventEmitter对象提供
```
//event.js
var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("some_event", function(){
    console.log("some_event occured");
});
setTimeout(function(){
    event.emit("some_event");
}, 1000);
```

运行这段代码，1秒后控制台输出了some_event occured。其原理是event对象注册了事件some_event的一个监听器，然后我们通过setTimeout在1000毫秒以后向event对象发送事件some_event，此时会调用some_event的监听器。

NodeJs程序由事件循环开始，到事件循环结束，所有的逻辑都是事件的回调函数，所以NodeJs始终在事件循环中，程序入口就是事件循环第一个事件的回调函数。事件的回调函数在执行的过程中，可能会发出I/O请求或直接发射（emit）事件，执行完毕后再返回事件循环，事件循环会检查事件队列中有没有未处理的事件，直到程序结束。

#### 模块和包
NodeJs提供了require函数来调用其他模块，而且模块都是基于文件的，机制十分简单。

NodeJs提供了exports和require两个对象，其中exports是模块公开的接口，require用于从外部获取一个模块的接口，即所获取模块的exports对象。

让我们以一个例子来了解模块。
```
// module.js
var name;
exports.setName = function(thyName){
    name = thyName;
}
exports.getName = function(){
    console.log("Hello " + name);
}
```

编写getModule.js
```
// getModule.js
var myModule = require("./module");
myModule.setName("Hak");
myModule.getName();
```

运行getModule.js会输出： Hello Hak

##### 单次加载

上面这个例子有点类似于创建一个对象，但实际上和对象又有本质的区别，因为require不会重复加载模块，也就是说无论调用多少次require，获得的模块都是同一个。

我们在getModule.js的基础上稍作修改：
```
var myModule1 = require("./module");
myModule1.setName("Hak");

var myModule2 = require("./module");
myModule2.setName("Jack");

myModule1.getName();
```

运行后发现输出结果是： Hello Jack。这是因为myModule1 和myModule2指向的是同一个实例，前者的结果被后者覆盖。

事实上，exports本身仅仅是一个普通的空对象，即{}，它专门用来声明接口，本质上是通过它为模块闭包
的内部建立了一个有限的访问接口。因为它没有任何特殊的地方，所以可以用其他东西来代替。

不可以通过对exports直接赋值代替对module.exports赋值。exports实际上只是一个和module.exports指向同一个对象的变量，它本身会在模块执行结束后释放，但module不会，因此只能通过指定module.exports来改变访问接口。

#### 模块和包
npm是NodeJs官方提供的包管理工具。npm提供了命令行工具，使你可以方便地下载、安装、升级、删除包，也可以让你作为开发者发布并维护包。

在使用npm安装包的时候，有两种模式：本地模式和全局模式。默认情况下我们使用npm install命令就是采用本地模式，即把包安装到当前目录的node_modules子目录下。

npm还有另一种不同的安装模式被成为全局模式，使用方法为：
```
 npm install -g [page_name]
```

模式|	可通过require使用	|注册PATH
:-:|:-:|:-:|:-:
本地模式|	是|	否
全局模式|	否|	是
当我们要把某个包作为工程运行时的一部分时，通过本地模式获取，如果要在命令行下使用，则使用全局模式安装。

#### 调试
#### 命令行调试
NodeJs支持命令行下的单步调试。
```
// debug.js
var a = 1;
var b = 'world';
var c =function(x){
    console.log('hello' + x + a);
};
c(b);
```
在命令行下执行node debug debug.js，将会启动调试工具：
![avatar](https://upload-images.jianshu.io/upload_images/3248493-5a5a44a085d529dc.png?imageMogr2/auto-orient/strip|imageView2/2/w/381/format/webp)
image.png

这样就打开了一个NodeJs的调试终端。可以用一些基本的命令进行单步跟踪调试。

命令|	功能
:-|:-
run	|执行脚本在第一行暂停
restart	|重新执行脚本
cont, c	|继续执行，直到遇到下一个断点
next, n	|单步执行
step, s	|单步执行并进入函数
kill	|终止当前执行的脚本
...	...
#### 远程调试
V8提供的调试功能是基于TCP协议的，因此Node.js可以轻松地实现远程调试。在命令行下使用以下两个语句之一可以打开调试服务器。
```
node --debug[=port] script.js
node --debug-brk[=port] script.js
```
#### 利用工具
#### 使用node-inspector调试NodeJs
#### 热重载工具supervisor



### (四)NodeJs核心模块

### 全局对象
JavaScript中有一个特殊的对象，称为全局对象（Global Object），<strong>它及其所有属性都可以在程序的任何地方访问</strong>，即全局变量。在浏览器JavaScript中，通常window是全局对象，而NodeJs中的全局对象是global，所有全局变量（除了global本身以外）都是global对象的属性。

### 全局对象和全局变量
按照ECMAScript的定义，满足以下条件的变量是全局变量：

- 在最外层定义的变量
- 全局对象的属性
- 隐式定义的变量（未定义直接赋值的变量）

在NodeJs中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的，而模块本身不是最外层上下文。

<strong>永远使用var定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险</strong>。

### process
process是一个全局变量，即global对象的属性。它用于描述当前NodeJs进程状态的对象，提供了一个与操作系统的简单接口。

- process.argv是命令行参数数组，第一个元素是node，第二个元素是脚本文件名，从第三个元素开始每个元素是一个运行参数。
- process.stdout是标准输出流，通常我们使用的console.log()向标准输出打印字符，而process.stdout.write()函数提供了更底层的接口。
-process.stdin是标准输入流，初始时它是被暂停的，要想从标准输入读取数据，你必须恢复流，并手动编写流的事件响应函数。
- process.nextTick(callback)的功能是为事件循环设置一项任务，NodeJs会在下次事件循环调响应时调用callback。

```
// debug.js
console.log(process.argv);

process.stdin.resume();
process.stdin.on("data", function (data) {
    process.stdout.write(data.toString());
});
```

结果：
![avatar](https://upload-images.jianshu.io/upload_images/3248493-c706e1b494bc5f76.png?imageMogr2/auto-orient/strip|imageView2/2/w/488/format/webp)
image.png

<strong>不要使用setTimeout(fn, 0)代替process.nextTick(callback)，前者比后者效率要低得多。</strong>

### console
console对象用于向标准输出流（stdout）或标准错误流（stderr）输出字符。

- console.log()向标准输出流打印字符并以换行符结束。
- console.error():与console.log()用法相同，只是向标准错误流输出。
- console.trace():向标准错误流输出当前的调用栈。

console.log接受若干个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则以类似于C语言printf()命令的格式输出。第一个参数是一个字符串，如果没有参数，只打印一个换行。

### 常用工具util
util是一个Node.js核心模块，提供常用函数的集合

#### util.inherits
JavaScript的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript没有提供对象继承的语言级别特性，而是通过原型复制来实现的

##### util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数。

```
// inherits.js
var util = require("util");

function Base() {
    this.name = "base";
    this.base = 1991;
    this.sayHello = function () {
        console.log("Hello"+this.name);
    };
}
Base.prototype.showName = function () {
    console.log(this.name);
};

function Sub() {
    this.name = "sub";
}

util.inherits(Sub, Base);

var newBase = new Base();
newBase.showName();
newBase.sayHello();
console.log(newBase);

var newSub = new Sub();
newSub.showName();
// newSub.sayHello();
console.log(newSub);
```

![avatar](https://upload-images.jianshu.io/upload_images/3248493-c100f35b4e1e1887.png?imageMogr2/auto-orient/strip|imageView2/2/w/404/format/webp)
image.png

Sub仅仅继承了Base在原型中定义的函数，而构造函数内部创造的base属性和sayHello函数都没有被Sub继承。同时，在原型中定义的属性不会被console.log作为对象的属性输出。

##### util.inspect
util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换为字符串的方法，通常用于调试和错误输出。它至少接受一个参数object，即要转换的对象。

util还提供了util.isArray()、util.isRegExp()、util.isDate()、util.isError()四个类型测试工具，以及util.format()、util.debug()等工具。

#### 事件驱动events
events是NodeJs最重要的模块。NodeJs本身架构就是事件式的，而它提供了唯一的接口，所以堪称NodeJs事件编程的基石。

#### 事件发射器
events模块只提供了一个对象：events.EventEmitter。EventEmitter的核心就是事件发射与事件监听器功能的封装。EventEmitter的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
```
var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("some_event", function(){
    console.log("some_event start1");
});
event.on("some_event", function () {
    console.log("some_event start2")
});

event.emit("some_event");
```

执行以上代码输出：
```
some_event start1
some_event start2
```

运行结果中可以看到两个事件监听器回调函数被先后调用。

EventEmitter常用的API：

- EventEmitter.on(event, listener)为指定事件注册一个监听器，接受一个字符串event和一个回调函数listener。
- EventEmitter.emit(event, [arg1], [arg2], [...])发射event事件，传递若干可选参数到事件监听器的参数表。
- EventEmitter.once(event, listener)为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立刻解除该监听
- EventEmitter.removeListener(event, listener)移除指定事件的某个监听器，listener必须是该事件已经注册过的监听器。
- EventEmitter.removeAllListeners([event])移除所有事件的所有监听器，如果指定event，则移除指定事件的所有监听器。

```
var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("some_event", function(){
    console.log("some_event start1");
});
event.on("some_event", function () {
    console.log("some_event start2")
});

event.emit("some_event");

setTimeout(function(){
    event.emit("some_event");
}, 1000);

event.removeAllListeners("some_event");
event.emit("some_event");
```

执行以上代码，输出：
![avatar](https://upload-images.jianshu.io/upload_images/3248493-467bc54781ec87df.png?imageMogr2/auto-orient/strip|imageView2/2/w/346/format/webp)
image.png

#### error事件
EventEmitter定义了一个特殊的事件error，它包含了“错误”的语义，我们在遇到异常的时候通常会发射error事件。

### 继承EventEmitter
大多数时候我们不会直接使用EventEmitter，而是在对象中继承它。包括fs、net、http在内的，只要是支持事件响应的核心模块都是EventEmitter的子类。

原因有两点。首先，具有某个实体功能的对象实现事件符合语义，事件的监听和发射应该是一个对象的方法。其次JavaScript的对象机制是基于原型的，支持部分多重继承，继承EventEmitter不会打乱对象原有的继承关系。

### 文件系统fs
#### fs.readFile
fs.readFile(filename, [encoding], [callback(err, data)])是最简单的读取文件的函数。
```
var fs = require("fs");
fs.readFile("server.js", "utf-8", function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
})
```

#### fs.readFileSync
fs.readFileSync(filename, [encoding])是fs.readFile同步的版本。它接受的参数和fs.readFile相同，而读取到的文件内容会以函数返回值的形式返回。如果有错误发生，fs将会抛出异常，你需要使用try和catch捕捉并处理异常。

#### fs.open
#### fs.read
一般来说，除非必要，否则不要使用以上两种方式读取文件，因为它要求你手动管理缓冲区和文件指针，尤其是在你不知道文件大小的时候，这将会是一件很麻烦的事情。

### HTTP服务器与客户端
#### HTTP服务器
##### http.Server的事件

http.Server是一个基于事件的HTTP服务器,所有的请求都被封装为独立的事件,开发者只需要对它的事件编写响应函数即可实现HTTP服务器的所有功能。它继承自EventEmitter,提供了以下几个事件：

- request:当客户端请求到来时,该事件被触发,提供两个参数req和res,分别是http.ServerRequest和http.ServerResponse的实例,表示请求和响应信息。
- connection:当TCP连接建立时,该事件被触发,提供一个参数socket,为net.Socket的实例。connection事件的粒度要大于request,因为客户端在Keep-Alive模式下可能会在同一个连接内发送多次请求。
- close :当服务器关闭时,该事件被触发。注意不是在用户连接断开时。
- checkContinue、upgrade、clientError事件。
最常用的就是request了,因此http提供了一个捷径:http.createServer([requestListener]),功能是创建一个HTTP服务器并将requestListener作为request事件的监听函数。

#### http.ServerRequest

一般由http.Server的request事件发送,作为第一个参数传递,通常简称request或req。http.ServerRequest提供了以下3个事件用于控制请求体传输：

- data :当请求体数据到来时,该事件被触发。该事件提供一个参数chunk,表示接收到的数据。如果该事件没有被监听,那么请求体将会被抛弃。该事件可能会被调用多次。
- end :当请求体数据传输完成时,该事件被触发,此后将不会再有数据到来。
- close:用户当前请求结束时,该事件被触发。不同于end,如果用户强制终止了传输,也还是调用close。
#### 获取GET请求内容

url模块中的parse函数提供解析客户端的表单请求。
```
// httpServerRequestGet.js
var http = require("http");
var url = require("url");
var util = require("util");

http.createServer(function(req, res){
    res.writeHead(200, {"Conetnet-Type": "text/html"});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
```

在浏览器中访问http://127.0.0.1:3000/user?name=byvoid&email=byvoid@byvoid.com
![avatar](https://upload-images.jianshu.io/upload_images/3248493-d9e60b84f5cb9090.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/530/format/webp)
image.jpg

通过url.parse,原始的path被解析为一个对象,其中query就是我们所谓的GET请求的内容,而路径则是pathname。

#### 获取POST请求内容

```
// httpServerRequestPost.js
var http = require("http");
var querystring = require("querystring");
var util = require("util");

http.createServer(function(req, res){
    var post = "";
    req.on("data", function(chunk){
        post += chunk
    });
    req.on("end", function(){
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(3000)
```

通过事件监听函数。上面的代码仅供理解使用，在实际编码中不赞同这样的做法。

##### http.ServerResponse

返回给客户端的信息，也是由http.Server的request事件发送的,作为第二个参数传递,一般简称为response或res。

http.ServerResponse有三个重要的成员函数,用于返回响应头、响应内容以及结束请求。

- response.writeHead(statusCode, [headers])：该函数在一个请求内最多只能调用一次。
- response.write(data, [encoding])：在response.end调用之前,response.write可以被多次调用。
- response.end([data], [encoding])： 结束响应,告知客户端所有发送已经完成。

#### HTTP客户端
http模块提供了两个函数http.request和http.get。

- http.request(options,callback)发起HTTP请求。接受两个参数,option是一个类似关联数组的对象,表示请求的参数,callback是请求的回调函数。

```
// httpRequst.js
var http = require("http");
var querystring = require("querystring");

var content = querystring.stringify({
    name: "byvoid",
    email: "byvoid@byvoid.com",
    address: "Tangshan",
});

var options = {
    host: "127.0.0.1",
    port: 3000,
    path: '/user?hello=wen',
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Content-Length": content.length
    }
};

var req = http.request(options, function(res){
    res.setEncoding("utf-8");
    res.on("data", function(data){
        console.log(data);
    });
});

req.write(content);
req.end();
```

- http.get(options, callback) http模块还提供了一个更加简便的方法用于处理GET请求:http.get。它是http.request的简化版,唯一的区别在于http.get自动将请求方法设为了GET请求,同时不需要手动调用req.end()。
#### http.ClientRequest

http.ClientRequest是由http.request或http.get返回产生的对象,表示一个已经产生而且正在进行中的HTTP请求

#### http.ClientResponse

提供了三个事件data、end和close,分别在数据到达、传输结束和连接结束时触发,其中data事件传递一个参数chunk,表示接收到的数据。



### (五)NodeJs构建web应用

我们打算从零开始用Node.js实现一个微博系统,功能包括路由控制、页面模板、数据库访问、用户注册、登录、用户会话等内容。在这里我们会使用Express框架、MVC设计模式、Jkig模板和MongoDB数据库的操作。

### 构建项目
### 1 Express 应用生成器
通过应用生成器工具 express 可以快速创建一个应用的骨架。执行一下命令进行安装到全局环境中
```
npm install express-generator -g
```
![avatar](https://upload-images.jianshu.io/upload_images/3248493-3d62a95537360ce1.png?imageMogr2/auto-orient/strip|imageView2/2/w/567/format/webp)
安装应用生成器.png
我们可以看到同时安装了一些依赖。在当前目录下创建blog的应用。

```
express blog
```

创建完成后进入应用。应用目录如下：
![avatar](https://upload-images.jianshu.io/upload_images/3248493-8d3c92208166060f.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/239/format/webp)
目录结构

然后安装所有依赖包。
```
npm install
```

启动项目。

（windows下）

```
set DEBUG=blog & npm start
```

（Linux平台下）

```
DEBUG=blog npm start
```

打开浏览器，访问http://127.0.0.1:3000即可看到应用。

#### 选定swig模板引擎
express构建的应用默认使用ejs模板引擎，本人觉得这种奇怪的东东暂时难以接受，之前做过django的项目，最后选定swig，也比较看好它！

#### 1 安装swig
```
npm install swig
```

#### 2 在app.js中配置如下：
```
var swig = require('swig');

var swig  = new swig.Swig();
app.engine('html', swig.readerFile);
app.set('view engine', 'html');
```

#### 3 模板编写
移除views下的*.jade，创建同名的*.html。

编写index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>index</title>
</head>
<body>
    Welcome, {{ title }}
</body>
</html>
```

启动服务
```
set DEBUG=blog &npm start
```

打开浏览器访问http://127.0.0.1:3000，能够看到：Welcome, Express

### 使用Bootstrap和界面设计
我们选定Bootstrap开始设计我们的界面。首先下载，解压之后，将文件夹改名为bootstrap-dist并放在public/中，同时下载最新的jquery，放在public/javascripts/中。
![avatar](https://upload-images.jianshu.io/upload_images/3248493-64988b292b7d5378.png?imageMogr2/auto-orient/strip|imageView2/2/w/256/format/webp)

添加bootstrap文件夹到项目中

这里补充一下Swig的使用[参考](https://www.cnblogs.com/elementstorm/p/3142644.html)。

修改layout.html中的代码：

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}My Blog{% endblock %}</title>
    {% block head %}
        <link rel="stylesheet" href="/bootstrap-dist/css/bootstrap.min.css">
    {% endblock %}
</head>
<body>
    {% block content %}{% endblock %}
    <script src="/javascripts/jquery-3.2.1.js"></script>
    <script src="/bootstrap-dist/js/bootstrap.js"></script>
</body>
</html>
在views/下创建login.html，并编写代码如下：

{% extends 'layout.html' %}

{% block title %}用户登录{% endblock %}

{% block content %}

    <div class="container" style="margin-top: 30px;">
        <div class="row clearfix">
            <div class="col-md-12 column">
                <form class="form-horizontal" role="form" method="post" action="/users/login">
                    <div class="form-group">
                         <label for="inputEmail3" class="col-sm-2 control-label">用户名</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputText3" />
                        </div>
                    </div>
                    <div class="form-group">
                         <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <div class="checkbox">
                                 <label><input type="checkbox" />记住我</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                             <button type="submit" class="btn btn-default">登陆</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

{% endblock %}
目前登录的界面已经创建完成，接下来就是添加路由了。修改routes/users.js文件，添加login GET视图后文件中代码如下：

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/login', function(req, res){
    res.render('login');
})

module.exports = router;
重新启动服务，浏览器访问http://127.0.0.1:3000/users/login，即可以看到登录输入框，则成功！

登录界面
数据持久化——MongoDB
从官网下载并安装。

连接数据库
打开工
程目录中的package.json，在dependencies属性中添加以下代码代码:

"connect-mongo": ">= 0.1.7",
"mongodb": ">= 0.9.9"
然后运行npm install更新依赖的模块。接下来在工程的目录中创建settings.js文件，这个文件用于保存数据库的连接信息。

将用到的数据库起名为blog：

module.exports = {
    cookieSecret: "blogid",
    db: "blog",
    host: "localhost",
    port: 27017
};
db是数据库的名称，host是数据库的地址，port是数据库的端口。cookieSecret用于Cookie加密与数据库无关，我们留作后用。

接下来在项目中创建modules目录，然后在其下中创建db.js：

var settings = require("../settings");
var mongodb = require("mongodb");
var Db = mongodb.Db;
var Server = mongodb.Server;

module.exports = new Db(settings.db, new Server(settings.host, settings.port, {}));
以上代码通过module.exports输出了创建的数据库连接。

会话支持
打开app.js添加以下内容：

var session = require('express-session');
var settings = require('./settings');
var MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: settings.cookieSecret,
    store: new MongoStore({
        db: settings.db,
        url: 'mongodb://localhost/blog'  
    })
}));
其中express.cookieParser()是Cookie解析的中间件。express.session()则提供会话支持，设置它的store参数为MongoStore实例，把会话信息存储到数据库中，以避免丢失。

这里需要注意的是在Express4.X版本中，session已经分离出来，所以这里需要去手动下载：

npm install express-session
还需要注意的是store中的url是需要填上去的！这些地方由于书中所用版本较低的原因，这些都是“坑”，就是改这些东西，和查资料折腾了一下午！

注册功能的实现
1 注册界面
设计注册界面在views中添加registered.html：

{% extends 'layout.html' %}

{% block title %}用户注册{% endblock %}

{% block content %}

<div class="container" style="margin-top: 30px;width: 500px;">

    {% if success %}
    <div class="alert alert-success alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <h4>
            {{success}}
        </h4>
    </div>

    {% endif %}
    {% if error %}
    <div class="alert alert-danger alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <h4>
            {{error[0]}}
        </h4>
    </div>
    {% endif %}

    <div class="row clearfix">
        <div class="col-md-12 column">
            <form class="form-horizontal" role="form" method="post" action="/users/registered">
                <div class="form-group">
                    <label for="inputText3" class="col-sm-2 control-label">用户名</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputText3" name="username"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">密码</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword3" name="password" />
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <div class="checkbox">
                            <label><input type="checkbox" />记住我</label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-default">注册</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

{% endblock %}
界面完成之后，添加路由，在users.js下添加以下内容：

router.get('/registered', function(req, res){
    res.render('registered');
});
浏览器打开http://127.0.0.1:3000/users/registered，这个页面刚开始进去是这样子的：

注册界面
当注册失败是这样子的：

注册失败
成功我就不贴了。接下来继续：

2 注册响应
在user.js中添加registered的post请求：

var User = require('../modules/user')

router.post('/registered', function(req, res){
    if (!(req.body['username'])){
        req.flash("error", '用户名不能为空！');
        return res.redirect("/users/registered");
    }
    var user = new User({
        name: req.body['username'],
        password: req.body['password'],
    });

    // 检查用户是否存在
    User.get(user.name, function(err, has_user){
        if(has_user){
            err = { "errmsg": "用户已存在"};
        }
        if(err){
            req.flash("error", err.errmsg);
            return res.redirect("/users/registered");
        }

        // 保存新用户
        user.save(function(err){
            if(err){
                req.flash("error", err.errmsg);
                return res.redirect("/users/registered");
            }
            req.flash("success", "注册成功！");
            res.redirect("/users/login");
        });
    });
});
在这段代码中：

req.body就是POST请求信息解析过后的对象。
req.flash是Express提供的一个奇妙的工具，通过它保存的变量只会在用户当前和下一次的请求中被访问，之后会被清除。当然这里使用的时候需要就行一些设置，待会再说。
res.redirect是重定向功能。
User对象，是接下来要创建的用户模型。实现了用户的判断和保存等。
3 创建用户模型
User是一个描述数据的对象，即MVC架构中的模型。在modules目录下创建user.js，编写内容如下：

var mongodb = require('./db');

function User(user){
    this.name = user.name;
    this.password = user.password;
}

module.exports = User;

User.prototype.save = function save(callback){

    var user = {
        name: this.name,
        password: this.password
    };

    mongodb.open(function(err, db){
        if (err){
            return callback(err);
        }
        db.collection('users', function(err, collection){
            if(err){
                mongodb.close();
                return callback(err);
            }

            // 将name属性添加为索引
            collection.ensureIndex('name', {unique: true});
            // 写入新用户到文档
            collection.insert(user, function(err, user){
                mongodb.close();
                callback(err, user);
            });
        });

    });

};


User.get = function get(username, callback){

    mongodb.open(function(err, db){
        if (err){
            return callback(err);
        }

        db.collection('users', function(err, collection){
            if(err) {
                mongodb.close();
                return callback(err);
            }
            collection.findOne({name: username}, function(err, doc){

                // 对数据库操作完成之后，及时关闭数据库
                mongodb.close();

                // 如果同名的用户存在，那么就直接返回这个用户信息
                if(doc){
                    return callback(err, doc);
                }else{
                    return callback(err, null);
                }
            });

        });
    });
};
以上代码实现了两个接口，User.prototype.save和User.get，前者是对象实例的方法，用于将用户对象的数据保存到数据库中，后者是对象构造函数的方法，用于从数据库中查找指定的用户。

注意：以上两个接口的类型是不一样的，所以在前面users.js中，是使用User.get(...)和var user = new User(..);user.save(...);。

4 视图交互
在视图中访问会话中的用户数据，同时为了显示错误和成功的信息，也要增加响应的函数。在app.js中添加以下内容：

var flash = require('connect-flash');
app.use(flash());
app.use(function(req,res,next){
  res.locals.user=req.session.user;

  var err = req.flash('error');
  var success = req.flash('success');
  res.locals.error = err.length ? err : null;
  res.locals.success = success.length ? success : null;
   
  next();
});
'connect-flash也是需要通过npm install connect-flash进行安装的。这里还需要注意的是以上在app.js中添加的代码在文件中的顺序很重要。这点也是一个大坑：

数据库连接在相应函数前面，响应函数在路由前面，这样才能在代码中正确调用flash()方法。

5 小段总结
到这里注册的功能差不多就完成了，假设没有出现意外的话。祝你我都好运，以上代码折腾了一天，但是基本上让自己了解了Express和MongoDB的相互配合使用，也对整个系统的数据流了解的更加透彻。

接下来就是实现登录和首页的问题了，到这里就不贴代码了，会将现在实现的这些代码放在github上，做一个tab，感兴趣的同学可以去看看。
