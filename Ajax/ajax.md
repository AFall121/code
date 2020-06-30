### some notes about ajax 
### what is ajax ?
ajax is abbration of asynchronous javascript and xml

use a website(https://reqres.in)test ajax connect

#### 全部readyState状态值都在 XMLHTTPRequest.readyState，如下也是：

    0 (未初始化) or (请求还未初始化)
    1 (正在加载) or (已建立服务器链接)
    2 (加载成功) or (请求已接受)
    3 (交互) or (正在处理请求)
    4 (完成) or (请求已完成并且响应已准备好)

Value |	State |	Description 
:--|:--:|:--
0 |	UNSENT |	Client has been created. open() not called yet.
1 |	OPENED |	open() has been called.
2 |	HEADERS_RECEIVED |	send() has been called, and headers and status are available.
3 |	LOADING |	Downloading; responseText holds partial data.
4 |	DONE |	The operation is complete.
```js
var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState will be 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); // readyState will be 3
};

xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState will be 4
};

xhr.send(null);
```

#### deal Binary data with ajax
- use xhr.responseType property
1.可以通过设置一个XMLHttpRequest对象的 responseType属性来改变一个从服务器上返回的响应的数据类型.可用的属性值为空字符串 (默认), "arraybuffer", "blob", "document","json" 和 "text". response属性的值会根据responseType属性包含实体主体（entity body）, 它可能会是一个 ArrayBuffer, Blob, Document,JSON, string,或者为NULL(如果请求未完成或失败)
```js
var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "arraybuffer";

oReq.onload = function (oEvent) {
  var arrayBuffer = oReq.response; // 注意:不是oReq.responseText
  if (arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteArray.byteLength; i++) {
      // 对数组中的每个字节进行操作
    }
  }
};

oReq.send(null);
```
2.另一种方法是使用Blob接口直接构造一个接收arraybuffer 数据的 Blob。

<strong>Notice</strong> blob ==> binary large Object
```js
var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "arraybuffer";

oReq.onload = function(oEvent) {
  var blob = new Blob([oReq.response], {type: "image/png"});
  // ...
};

oReq.send();
```
3.也可以通过给responseType属性设置为“blob”，将二进制文件读取为Blob类型的数据。
```js
var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "blob";

oReq.onload = function(oEvent) {
  var blob = oReq.response;
  // ...
};

oReq.send();
```
<strong> 推荐上面的第三种 简洁
详情参考 mdn[https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data]

#### deal formdata
一个小框架
所有这些事情都是由浏览器在你提交一个 <form> 的时候自动完成的。但是如果你想要用 JavaScript 做同样的事情，你不得不告诉解释器所有的事。那么，如何发送表单这件事在使用纯粹的 AJAX 时会复杂到无法在这里解释清楚。基于这个原因，我们提供一个完整的（但仍然教条的）框架，它可以使用所有的四种提交方式，甚至上传文件：
```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Sending forms with pure AJAX &ndash; MDN</title>
<script type="text/javascript">

"use strict";

/*\
|*|
|*|  :: XMLHttpRequest.prototype.sendAsBinary() Polyfill ::
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest#sendAsBinary()
\*/

if (!XMLHttpRequest.prototype.sendAsBinary) {
  XMLHttpRequest.prototype.sendAsBinary = function(sData) {
    var nBytes = sData.length, ui8Data = new Uint8Array(nBytes);
    for (var nIdx = 0; nIdx < nBytes; nIdx++) {
      ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
    }
    /* send as ArrayBufferView...: */
    this.send(ui8Data);
    /* ...or as ArrayBuffer (legacy)...: this.send(ui8Data.buffer); */
  };
}

/*\
|*|
|*|  :: AJAX Form Submit Framework ::
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  https://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntax:
|*|
|*|   AJAXSubmit(HTMLFormElement);
\*/

var AJAXSubmit = (function () {

  function ajaxSuccess () {
    /* console.log("AJAXSubmit - Success!"); */
    console.log(this.responseText);
    /* you can get the serialized data through the "submittedData" custom property: */
    /* console.log(JSON.stringify(this.submittedData)); */
  }

  function submitData (oData) {
    /* the AJAX request... */
    var oAjaxReq = new XMLHttpRequest();
    oAjaxReq.submittedData = oData;
    oAjaxReq.onload = ajaxSuccess;
    if (oData.technique === 0) {
      /* method is GET */
      oAjaxReq.open("get", oData.receiver.replace(/(?:\?.*)?$/,
          oData.segments.length > 0 ? "?" + oData.segments.join("&") : ""), true);
      oAjaxReq.send(null);
    } else {
      /* method is POST */
      oAjaxReq.open("post", oData.receiver, true);
      if (oData.technique === 3) {
        /* enctype is multipart/form-data */
        var sBoundary = "---------------------------" + Date.now().toString(16);
        oAjaxReq.setRequestHeader("Content-Type", "multipart\/form-data; boundary=" + sBoundary);
        oAjaxReq.sendAsBinary("--" + sBoundary + "\r\n" +
            oData.segments.join("--" + sBoundary + "\r\n") + "--" + sBoundary + "--\r\n");
      } else {
        /* enctype is application/x-www-form-urlencoded or text/plain */
        oAjaxReq.setRequestHeader("Content-Type", oData.contentType);
        oAjaxReq.send(oData.segments.join(oData.technique === 2 ? "\r\n" : "&"));
      }
    }
  }

  function processStatus (oData) {
    if (oData.status > 0) { return; }
    /* the form is now totally serialized! do something before sending it to the server... */
    /* doSomething(oData); */
    /* console.log("AJAXSubmit - The form is now serialized. Submitting..."); */
    submitData (oData);
  }

  function pushSegment (oFREvt) {
    this.owner.segments[this.segmentIdx] += oFREvt.target.result + "\r\n";
    this.owner.status--;
    processStatus(this.owner);
  }

  function plainEscape (sText) {
    /* How should I treat a text/plain form encoding?
       What characters are not allowed? this is what I suppose...: */
    /* "4\3\7 - Einstein said E=mc2" ----> "4\\3\\7\ -\ Einstein\ said\ E\=mc2" */
    return sText.replace(/[\s\=\\]/g, "\\$&");
  }

  function SubmitRequest (oTarget) {
    var nFile, sFieldType, oField, oSegmReq, oFile, bIsPost = oTarget.method.toLowerCase() === "post";
    /* console.log("AJAXSubmit - Serializing form..."); */
    this.contentType = bIsPost && oTarget.enctype ? oTarget.enctype : "application\/x-www-form-urlencoded";
    this.technique = bIsPost ?
        this.contentType === "multipart\/form-data" ? 3 : this.contentType === "text\/plain" ? 2 : 1 : 0;
    this.receiver = oTarget.action;
    this.status = 0;
    this.segments = [];
    var fFilter = this.technique === 2 ? plainEscape : escape;
    for (var nItem = 0; nItem < oTarget.elements.length; nItem++) {
      oField = oTarget.elements[nItem];
      if (!oField.hasAttribute("name")) { continue; }
      sFieldType = oField.nodeName.toUpperCase() === "INPUT" ? oField.getAttribute("type").toUpperCase() : "TEXT";
      if (sFieldType === "FILE" && oField.files.length > 0) {
        if (this.technique === 3) {
          /* enctype is multipart/form-data */
          for (nFile = 0; nFile < oField.files.length; nFile++) {
            oFile = oField.files[nFile];
            oSegmReq = new FileReader();
            /* (custom properties:) */
            oSegmReq.segmentIdx = this.segments.length;
            oSegmReq.owner = this;
            /* (end of custom properties) */
            oSegmReq.onload = pushSegment;
            this.segments.push("Content-Disposition: form-data; name=\"" +
                oField.name + "\"; filename=\"" + oFile.name +
                "\"\r\nContent-Type: " + oFile.type + "\r\n\r\n");
            this.status++;
            oSegmReq.readAsBinaryString(oFile);
          }
        } else {
          /* enctype is application/x-www-form-urlencoded or text/plain or
             method is GET: files will not be sent! */
          for (nFile = 0; nFile < oField.files.length;
              this.segments.push(fFilter(oField.name) + "=" + fFilter(oField.files[nFile++].name)));
        }
      } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
        /* NOTE: this will submit _all_ submit buttons. Detecting the correct one is non-trivial. */
        /* field type is not FILE or is FILE but is empty */
        this.segments.push(
          this.technique === 3 ? /* enctype is multipart/form-data */
            "Content-Disposition: form-data; name=\"" + oField.name + "\"\r\n\r\n" + oField.value + "\r\n"
          : /* enctype is application/x-www-form-urlencoded or text/plain or method is GET */
            fFilter(oField.name) + "=" + fFilter(oField.value)
        );
      }
    }
    processStatus(this);
  }

  return function (oFormElement) {
    if (!oFormElement.action) { return; }
    new SubmitRequest(oFormElement);
  };

})();

</script>
</head>
<body>

<h1>Sending forms with pure AJAX</h1>

<h2>Using the GET method</h2>

<form action="register.php" method="get" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h2>Using the POST method</h2>
<h3>Enctype: application/x-www-form-urlencoded (default)</h3>

<form action="register.php" method="post" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: text/plain</h3>

<form action="register.php" method="post" enctype="text/plain"
    onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      Your name: <input type="text" name="user" />
    </p>
    <p>
      Your message:<br />
      <textarea name="message" cols="40" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: multipart/form-data</h3>

<form action="register.php" method="post" enctype="multipart/form-data"
    onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Upload example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" /><br />
      Sex:
      <input id="sex_male" type="radio" name="sex" value="male" />
      <label for="sex_male">Male</label>
      <input id="sex_female" type="radio" name="sex" value="female" />
      <label for="sex_female">Female</label><br />
      Password: <input type="password" name="secret" /><br />
      What do you prefer:
      <select name="image_type">
        <option>Books</option>
        <option>Cinema</option>
        <option>TV</option>
      </select>
    </p>
    <p>
      Post your photos:
      <input type="file" multiple name="photos[]">
    </p>
    <p>
      <input id="vehicle_bike" type="checkbox" name="vehicle[]" value="Bike" />
      <label for="vehicle_bike">I have a bike</label><br />
      <input id="vehicle_car" type="checkbox" name="vehicle[]" value="Car" />
      <label for="vehicle_car">I have a car</label>
    </p>
    <p>
      Describe yourself:<br />
      <textarea name="description" cols="50" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

</body>
</html>
```
要测试它的话，创建一个名为 register.php 的页面（作为示例表单的 action 属性）并且只输入以下内容：
```php
<?php
/* register.php */

header("Content-type: text/plain");

/*
NOTE: You should never use `print_r()` in production scripts, or
otherwise output client-submitted data without sanitizing it first.
Failing to sanitize can lead to cross-site scripting vulnerabilities.
*/

echo ":: data received via GET ::\n\n";
print_r($_GET);

echo "\n\n:: Data received via POST ::\n\n";
print_r($_POST);

echo "\n\n:: Data received as \"raw\" (text/plain encoding) ::\n\n";
if (isset($HTTP_RAW_POST_DATA)) { echo $HTTP_RAW_POST_DATA; }

echo "\n\n:: Files received ::\n\n";
print_r($_FILES);
```

激活这些代码的语法很简单：

AJAXSubmit(myForm);

<strong>注意</strong>: 该框架使用 FileReader API 进行文件的上传。这是一个较新的 API 并且还未在 IE9 及以下版本的浏览器中实现。因此，使用 AJAX 上传仍是一项实验性的技术。如果你不需要上传 二进制文件，该框架在大多数浏览器中运行良好。

注意: 发送二进制内容的最佳途径是通过 ArrayBuffers 或 Blobs 结合 send() 方法甚至 FileReader API 的 readAsArrayBuffer() 方法。但是，自从该脚本的目的变成处理 可字符串化 的原始数据以来，我们使用 sendAsBinary() 方法结合 FileReader API 的 readAsBinaryString() 方法。同样地，上述脚本仅当你处理小文件时行之有效。如果不打算上传二进制内容，就考虑使用 FormData API 来替代。

注意: 非标准的 sendAsBinary 方法从 Gecko 31 (Firefox 31 / Thunderbird 31 / SeaMonkey 2.28) 开始将会废弃并且会很快被移除。标准方法 send(Blob data) 将会取而代之。

#### 使用 FormData 对象
FormData 构造函数能使你编译一个键/值对的集合，然后使用 XMLHttpRequest 发送出去。其主要用于发送表格数据，但是也能被单独用来传输表格中用户指定的数据。传输的数据格式与表格使用 submit() 方法发送数据的格式一致，如果该表格的编码类型被设为 "multipart/form-data". FormData 对象可以被结合 XMLHttpRequest 的多种方法利用。例如，想了解如何利用 FormData 与 XMLHttpRequests, 请转到 Using FormData Objects 页面。为了说教的目的，这里有一个早期的例子，被转译成了使用 FormData API 的形式。注意以下代码片段：
```html
<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" charset="UTF-8" />
<title>Sending forms with FormData &ndash; MDN</title>
<script>
"use strict";

function ajaxSuccess () {
  console.log(this.responseText);
}

function AJAXSubmit (oFormElement) {
  if (!oFormElement.action) { return; }
  var oReq = new XMLHttpRequest();
  oReq.onload = ajaxSuccess;
  if (oFormElement.method.toLowerCase() === "post") {
    oReq.open("post", oFormElement.action);
    oReq.send(new FormData(oFormElement));
  } else {
    var oField, sFieldType, nFile, sSearch = "";
    for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
      oField = oFormElement.elements[nItem];
      if (!oField.hasAttribute("name")) { continue; }
      sFieldType = oField.nodeName.toUpperCase() === "INPUT" ?
          oField.getAttribute("type").toUpperCase() : "TEXT";
      if (sFieldType === "FILE") {
        for (nFile = 0; nFile < oField.files.length;
            sSearch += "&" + escape(oField.name) + "=" + escape(oField.files[nFile++].name));
      } else if ((sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") || oField.checked) {
        sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
      }
    }
    oReq.open("get", oFormElement.action.replace(/(?:\?.*)?$/, sSearch.replace(/^&/, "?")), true);
    oReq.send(null);
  }
}
</script>
</head>
<body>

<h1>Sending forms with FormData</h1>

<h2>Using the GET method</h2>

<form action="register.php" method="get" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h2>Using the POST method</h2>
<h3>Enctype: application/x-www-form-urlencoded (default)</h3>

<form action="register.php" method="post" onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Registration example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" />
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>

<h3>Enctype: text/plain</h3>

<p>The text/plain encoding is not supported by the FormData API.</p>

<h3>Enctype: multipart/form-data</h3>

<form action="register.php" method="post" enctype="multipart/form-data"
    onsubmit="AJAXSubmit(this); return false;">
  <fieldset>
    <legend>Upload example</legend>
    <p>
      First name: <input type="text" name="firstname" /><br />
      Last name: <input type="text" name="lastname" /><br />
      Sex:
      <input id="sex_male" type="radio" name="sex" value="male" />
      <label for="sex_male">Male</label>
      <input id="sex_female" type="radio" name="sex" value="female" />
      <label for="sex_female">Female</label><br />
      Password: <input type="password" name="secret" /><br />
      What do you prefer:
      <select name="image_type">
        <option>Books</option>
        <option>Cinema</option>
        <option>TV</option>
      </select>
    </p>
    <p>
      Post your photos:
      <input type="file" multiple name="photos[]">
    </p>
    <p>
      <input id="vehicle_bike" type="checkbox" name="vehicle[]" value="Bike" />
      <label for="vehicle_bike">I have a bike</label><br />
      <input id="vehicle_car" type="checkbox" name="vehicle[]" value="Car" />
      <label for="vehicle_car">I have a car</label>
    </p>
    <p>
      Describe yourself:<br />
      <textarea name="description" cols="50" rows="8"></textarea>
    </p>
    <p>
      <input type="submit" value="Submit" />
    </p>
  </fieldset>
</form>
</body>
</html>
```
注意: 如之前所述，FormData 对象并不是 可字符串化(stringifiable) 的对象。如果你想要字符串化一个提交数据，请使用这个 早期的纯 AJAX 例子. 同时也要注意，尽管这个例子中有一些 file <input> 字段，但当你通过 FormData API 提交一个表格时，也无须使用 FileReader API: 文件被自动加载并上传。

#### 获取最后修改日期
```js
function getHeaderTime () {
  console.log(this.getResponseHeader("Last-Modified"));  /* 一个合法的 GMTString 日期或 null */
}
var oReq = new XMLHttpRequest();
oReq.open("HEAD" /* 仅需要头部信息(headers)时请使用 HEAD! */, "yourpage.html");
oReq.onload = getHeaderTime;
oReq.send();
```
#### 最后修改日期改变后的操作
先创建两个函数：
```js
function getHeaderTime () {
  var nLastVisit = parseFloat(window.localStorage.getItem('lm_' + this.filepath));
  var nLastModif = Date.parse(this.getResponseHeader("Last-Modified"));

  if (isNaN(nLastVisit) || nLastModif > nLastVisit) {
    window.localStorage.setItem('lm_' + this.filepath, Date.now());
    isFinite(nLastVisit) && this.callback(nLastModif, nLastVisit);
  }
}

function ifHasChanged(sURL, fCallback) {
  var oReq = new XMLHttpRequest();
  oReq.open("HEAD" /* 使用 HEAD - 我们仅需要头部信息(headers)! */, sURL);
  oReq.callback = fCallback;
  oReq.filepath = sURL;
  oReq.onload = getHeaderTime;
  oReq.send();
}
```
And to test:
```js
/* 测试一下这个文件："yourpage.html"... */

ifHasChanged("yourpage.html", function (nModif, nVisit) {
  console.log("The page '" + this.filepath + "' has been changed on " + (new Date(nModif)).toLocaleString() + "!");
});
```
如果你想要了解 当前页面是否发生了改变，请阅读这篇文章：document.lastModified.

### 跨站的 XMLHttpRequest
现代浏览器可以通过执行 WebApps 工作小组通过的 Access Control for Cross-Site Requests 标注来支持跨站请求。只要服务器端的配置允许您从您的 Web 应用发送请求，就可以使用 XMLHttpRequest 。 否则，会抛出一个 INVALID_ACCESS_ERR 异常

### 绕过缓存
一般地，如果缓存中有相应内容， XMLHttpRequest 会试图从缓存中读取内容。绕过缓存的方法见下述代码：
```js
var req = new XMLHttpRequest();
req.open('GET', url, false);
req.channel.loadFlags |= Components.interfaces.nsIRequest.LOAD_BYPASS_CACHE;
req.send(null);
```
Note: 这个方法只工作于基于 Gecko内核的软件, 也就是通道属性是 Gecko-specific.
还有一个跨浏览器兼容的方法，就是给 URL 添加时间戳。请确保你酌情地添加了 "?" or "&" 。例如，将：
```
http://foo.com/bar.html -> http://foo.com/bar.html?12345
http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345
```
因为本地缓存都是以 URL 作为索引的，这样就可以使每个请求都是唯一的，也就可以这样来绕开缓存。

你也可以用下面的方法自动更改缓存：
```js
var oReq = new XMLHttpRequest();

oReq.open("GET", url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime());
oReq.send(null);
```
### 安全性
    Firefox 3 note

    Versions of Firefox prior to Firefox 3 allowed you to set the preference capability.policy.<policyname>.XMLHttpRequest.open</policyname> to allAccess to give specific sites cross-site access. This is no longer supported.

    Firefox 5 note

    Versions of Firefox prior to Firefox 5 could use netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead"); to request cross-site access. This is no longer supported, even though it produces no warning and permission dialog is still presented.

要启用跨站脚本，推荐的做法是对 XMLHttpRequest 的响应使用 the Access-Control-Allow-Origin 的 HTTP 头。

#### XMLHttpRequests 被停止
如果你的 XMLHttpRequest 收到 status=0 和 statusText=null 的返回，这意味着请求无法执行。 就是无法发送. 一个可能导致的原因是当 XMLHttpRequest origin (创建的 XMLHttpRequest) 改变时，XMLHttpRequest 执行 open().。这种情况是可能发生的，举个例子，我们在一个窗口的onunload事件中关闭XMLHttpRequest，但实际上在即将关闭窗口时，之前创建的XMLHttpRequest仍然在那里，最后当这个窗口失去焦点、另一个窗口获得焦点时，它还是发送了请求（也就是open()）。最有效的避免这个问题的方法是为新窗口的activate事件设置一个监听器，一旦窗口关闭，它的unload事件便触发。

#### Worker
设置 overrideMimeType  后在 Worker 中无法正常工作，详见 bug 678057。其他浏览器也许会以不同的手段处理。

mdn[https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#%E6%8F%90%E4%BA%A4%E8%A1%A8%E5%8D%95%E5%92%8C%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6]