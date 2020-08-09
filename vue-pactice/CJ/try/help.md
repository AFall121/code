### 步骤
第一步 用vue-cli创建项目 try

    vue create try
只勾选router，最后的配置选package.json,其余默认就行

第二步 用vue-cli 安装vuetify

     vue add vuetify

默认就行

第三步 安装 图标字体

    npm  install material-design-icons-iconfont -D

默认就行

第四步 修改plugins/vuetify.js


```js
// 未修改的

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
});

```
```js
// 修改后的
// 引入图标字体css
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: { // 配置图标字体
    iconfont: 'md'
  }
});

```



