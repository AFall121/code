//Basic

const obj = {
	
	rabbit : 'rabbit img',
	year: 1984
}
obj['rabbit'] = 'rab img2'
console.log(obj['rabbit'])
console.log(obj.rabbit)

//常量不允许全新赋值
// try{
// 	const URL = "https://www.baidu.com";
// 	URL = "https://www.houdunren.com";
// }catch(e){
// 	//TODO handle the exception
// 	console.log('常量不允许全新赋值')
// 	throw new Error(e);	
// }
// 改变常量的引用类型值
const NAME = '常量人';
function show(){
	const NAME = '重常量人';
	return NAME;
}
console.log(show());
console.log(NAME);


// 使用var可能造成不小心定义了同名变量
// 优惠价
var price = 90;
// 商品价格
var price = 100;
console.log(`商品优惠价格是:${price}`);
// var 声明的变量是存在window对象中的
console.log(window.price)

let web = '....';
if(true){
	let web = 'turelllll'
}
console.log(`${web}`)
//let 声明的变量不存在window对象中
console.log(window.web)

// 如果冻结变量后,变量也不可以修改了,使用严格模式会爆出错误
"use strict"
const INFO = {
	url: 'https://www.baidu.com',
	port: '8080'
};
// 用Object.freeze()冻结变量
Object.freeze(INFO);
INFO.port = '443';// cannot assign to read only property
console.log(INFO);

{
// 传值与传址
// 基本数据类型指数值丶字符串等简单数据类型(JAVA里面是指八种基数据类型:1.整型byte(1字节)short(2字节)int(4字节)long(8字节)2.浮点型float(4字节)double(8字节)3.逻辑型boolean(八分之一字节)4.字符型char(2字节,一个字符能存储下一个中文汉字)),引用类型指对象数据类型.
// 基本类型赋值是值的复制,互相不收影响.
let a = 50;
let b = a;
a = 100;
// 由此可见a的改变并不会影响b的值变化
console.log(`a的值为:${a} b的值为${b}`)
}
{
// 对于引用类型来讲,变量保存的是引用对象的指针.变量间赋值时其实是复制的是变量的指针,这样多个变量就可以引用同一个对象.

let a = {
	name: 'nameA',
	age: 'ageA'
}
let b = a;
console.log(`此时b的name为:${b.name} b的age为${b.age}`);
a.name = 'nameAAfterChange'
console.log(`此时b的name为:${b.name} b的age为${b.age}`);
}
{
	// 基本差异
	// 变量必须使用关键词声明，未声明的变量不允许赋值
	
	"use strict";
	url = 'houdunren.com'; //url is not defined
	// 强制声明防止污染全局
	
	"use strict";
	function run() {
	  web = "houdunren";
	}
	run();
	console.log(web); //houdunren
	// 关键词不允许做变量使用
	
	"use strict";
	var public = 'houdunren.com';
	// 变量参数不允许重复定义
	
	"use strict";
	//不允许参数重名
	function hd(name, name) {} 
	// 单独为函数设置严格模式
	
	function strict(){  
	  "use strict";  
	  return "严格模式";  
	}  
	function notStrict() {  
	  return "正常模式";  
	}  
	// 为了在多文件合并时，防止全局设置严格模式对其他没使用严格模式文件的影响，将脚本放在一个执行函数中。
	
	(function () {
	  "use strict";
	  url = 'houdunren.com';
	})();
	{// 解构差异
	// 非严格模式可以不使用声明指令，严格模式下必须使用声明。所以建议使用 let 等声明。
	
	// "use strict";
	({name,url} = {name:'后盾人',url:'houdunren.com'});
	console.log(name, url);}
}

//运算符与流程控制

{
	// 赋值运算符
	// 使用 = 进行变量赋值
	let a = 'zhangsan';
	// 算术运算符 加 + 减 - 乘 * 除 / 取余数 %
	let b = 2, c = 5;
	console.log(c + b);
	console.log(c - b);
	console.log(c * b);
	console.log(c / b);
	console.log(c % b);
	// 符合运算符 += -= *= /= %= 例如: x*=2 等同于 x = x * 2
	console.log(b+=2);
	console.log(b-=2);
	console.log(b*=2);
	console.log(b/=2);
	// 一元运算符 重点是元
	// 前置操作会在表达式最先执行
	let d = 1;
	//++d 就是 d = d + 1 的简写形式.
	++d;
	console.log(d);
	--d;
	console.log(d);
	let e = 2;
	let f = 30 + ++e;
	console.log(f);//33
	//后置操作会在表达式最后执行
	let g = 1;
	g++;
	console.log(g);
	let h = 2;
	let i = 30 + h++;//32
	console.log(i);
	
	// 比较运算符最重要的是==(强制类型转换比较) 和 ===(不强制类型转换比较)
	{
		let a = 1,b = 2,c = '1';
		
		console.log(a < b); //true
		console.log(a == b); //false
		console.log(a == c); //true
		console.log(a === c); //false
		console.log(a == true); //true
		console.log(a === true); //false
	}
	//逻辑运算符 ||或 &&与 !非 easy省略(与的优先级最高)
	// ...省略以后补写
	
	
	// 下面是系统提供的日期时间方法，更多方法请查看 MDN官网
	
	// 方法	描述
	// Date()	返回当日的日期和时间。
	// getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
	// getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)。
	// getMonth()	从 Date 对象返回月份 (0 ~ 11)。
	// getFullYear()	从 Date 对象以四位数字返回年份。
	// getYear()	请使用 getFullYear() 方法代替。
	// getHours()	返回 Date 对象的小时 (0 ~ 23)。
	// getMinutes()	返回 Date 对象的分钟 (0 ~ 59)。
	// getSeconds()	返回 Date 对象的秒数 (0 ~ 59)。
	// getMilliseconds()	返回 Date 对象的毫秒(0 ~ 999)。
	// getTime()	返回 1970 年 1 月 1 日至今的毫秒数。
	// getTimezoneOffset()	返回本地时间与格林威治标准时间 (GMT) 的分钟差。
	// getUTCDate()	根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
	// getUTCDay()	根据世界时从 Date 对象返回周中的一天 (0 ~ 6)。
	// getUTCMonth()	根据世界时从 Date 对象返回月份 (0 ~ 11)。
	// getUTCFullYear()	根据世界时从 Date 对象返回四位数的年份。
	// getUTCHours()	根据世界时返回 Date 对象的小时 (0 ~ 23)。
	// getUTCMinutes()	根据世界时返回 Date 对象的分钟 (0 ~ 59)。
	// getUTCSeconds()	根据世界时返回 Date 对象的秒钟 (0 ~ 59)。
	// getUTCMilliseconds()	根据世界时返回 Date 对象的毫秒(0 ~ 999)。
	// parse()	返回1970年1月1日午夜到指定日期（字符串）的毫秒数。
	// setDate()	设置 Date 对象中月的某一天 (1 ~ 31)。
	// setMonth()	设置 Date 对象中月份 (0 ~ 11)。
	// setFullYear()	设置 Date 对象中的年份（四位数字）。
	// setYear()	请使用 setFullYear() 方法代替。
	// setHours()	设置 Date 对象中的小时 (0 ~ 23)。
	// setMinutes()	设置 Date 对象中的分钟 (0 ~ 59)。
	// setSeconds()	设置 Date 对象中的秒钟 (0 ~ 59)。
	// setMilliseconds()	设置 Date 对象中的毫秒 (0 ~ 999)。
	// setTime()	以毫秒设置 Date 对象。
	// setUTCDate()	根据世界时设置 Date 对象中月份的一天 (1 ~ 31)。
	// setUTCMonth()	根据世界时设置 Date 对象中的月份 (0 ~ 11)。
	// setUTCFullYear()	根据世界时设置 Date 对象中的年份（四位数字）。
	// setUTCHours()	根据世界时设置 Date 对象中的小时 (0 ~ 23)。
	// setUTCMinutes()	根据世界时设置 Date 对象中的分钟 (0 ~ 59)。
	// setUTCSeconds()	根据世界时设置 Date 对象中的秒钟 (0 ~ 59)。
	// setUTCMilliseconds()	根据世界时设置 Date 对象中的毫秒 (0 ~ 999)。
	// toSource()	返回该对象的源代码。
	// toString()	把 Date 对象转换为字符串。
	// toTimeString()	把 Date 对象的时间部分转换为字符串。
	// toDateString()	把 Date 对象的日期部分转换为字符串。
	// toGMTString()	请使用 toUTCString() 方法代替。
	// toUTCString()	根据世界时，把 Date 对象转换为字符串。
	// toLocaleString()	根据本地时间格式，把 Date 对象转换为字符串。
	// toLocaleTimeString()	根据本地时间格式，把 Date 对象的时间部分转换为字符串。
	// toLocaleDateString()	根据本地时间格式，把 Date 对象的日期部分转换为字符串。
	// UTC()	根据世界时返回 1970 年 1 月 1 日 到指定日期的毫秒数。
	// valueOf()	返回 Date 对象的原始值。
	// # moment.js
	// Moment.js是一个轻量级的JavaScript时间库，它方便了日常开发中对时间的操作，提高了开发效率。
	
	// 更多使用方法请访问中文官网 http://momentjs.cn 或 英文官网 https://momentjs.com
	
	//<script src="https://cdn.bootcss.com/moment.js/2.24.0/moment.min.js"></script>
	// 获取当前时间
	
	// console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
	// 设置时间
	
	// console.log(moment("2020-02-18 09:22:15").format("YYYY-MM-DD HH:mm:ss"));
	// 十天后的日期
	
	// console.log(moment().add(10, "days").format("YYYY-MM-DD hh:mm:ss"));
}
{
	let kkk = [1,2,3,6];
	console.log(kkk.includes(5));
	let arr = [7, 3, 2, 6];
	console.log(arr.includes(8));
}
