# 前期必要步骤和try中是一模一样的

    无非就是
    用 vue-cli创建项目
    vue create applicants
    用 vue-cli安装vuetify plugin
    vue add vuetify
    安装所需要的字体 参考[link](https://vuetifyjs.com/en/customization/icons/#install-material-design-icons)
    npm install material-design-icons-iconfont -D
    然后修改vuetify.js文件等


### 注意！！！！！！
2020/8/10 为了修改一个bug，我用了5个小时！！！怎么更新改变vuetify的包，查找源代码都没有用！！！！最后发现是因为在配置vuetify.js文件时 出了错误...把fa写成了fat
由于我安装了md和fat两种字体库，配置的时候又将fat作为了最优先，因此就出现了问题。。

    修改前
```js
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
const opt = {
  icons: {
    iconfont: 'fat' || 'md', //就是这行！！！！！我将fa写成了fat
  }
}
export default new Vuetify(opt);
```

    修改后正常
```js
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);
const opt = {
  icons: {
    iconfont: 'md' || 'fa', //就是这行！！！！！
  }
}
export default new Vuetify(opt);
```

### Usage
In order to change your font library, add the iconfont option during instantiation.

```js
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
})
```

Using a predefined option will prefill defaults based upon the selected preset. This will overwrite the defaults of components that have default icon values. For more information, view the default icon preset values.

### Installing iconfonts
You are required to include the specified icon library (even if using default). This can be done by including a CDN link or importing the icon library into your application

Install Material Design Icons
This is the default icon font for Vuetify. You can include it through a CDN:
```html
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">
```
Or as a local dependency:

    $ yarn add @mdi/font -D
    // OR
    $ npm install @mdi/font -D
    // src/plugins/vuetify.js

```js
    import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
    import Vue from 'vue'
    import Vuetify from 'vuetify/lib'

    Vue.use(Vuetify)

    export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    })
```
### Install Material Design Icons (JS SVG)
Use the SVG Path's as designated in @mdi/js. This is the recommended installation when optimizing your application for production. You ONLY need to include this if you plan on using more than the default icons.

    $ yarn add @mdi/js -D
    // OR
    $ npm install @mdi/js -D
#### Specify the mdiSvg iconfont:
```js
    // src/plugins/vuetify.js

    import Vue from 'vue'
    import Vuetify from 'vuetify/lib'

    Vue.use(Vuetify)

    export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg',
    },
    })
```
#### You can custom import only the icons you use granting a much smaller bundle size.
```js
    <!-- Vue Component -->

    <template>
    <v-icon>{{ svgPath }}</v-icon>
    </template>

    <script>
    import { mdiAccount } from '@mdi/js'

    export default {
        data: () => ({
        svgPath: mdiAccount
        }),
    }
    </script>
```
### Install Material Icons
Installation is the same as the above. For projects without a build process, it is recommended to import the icons from CDN
```html
<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
```
Alternatively, it is possible to install locally using yarn or npm. Keep in mind that this is not an official google repository and may not receive updates

    $ yarn add material-design-icons-iconfont -D
    // OR
    $ npm install material-design-icons-iconfont -D
Once you have installed the package, import it into your main entry js file. This is typically the main.js, index.js or app.js located in your src/ folder. If you are using an SSR application, you may have a client.js or entry-client.js file.
```js
// src/plugins/vuetify.js

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md',
  },
})
```
### Install Font Awesome 5 Icons
The easiest way to get started with FontAwesome is to use a cdn. Within the head of your main index.html place this snippet:
```html
<link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
```
To install locally you can pull in the Free version of FontAwesome using your preferred package manager:

    $ yarn add @fortawesome/fontawesome-free -D
    // OR
    $ npm install @fortawesome/fontawesome-free -D
Within your main entry point, simply import the package's all.css. If you are using a configured webpack project, you will need to setup support for .css files using the webpack css loader. If you are already using Vue CLI, this is done for you automatically.
```js
// src/plugins/vuetify.js

import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
})
```
### Install Font Awesome 4 Icons
Same as above. Installing FontAwesome through cdn is the easiest way to check it out within your project:
```html
<link href="https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css" rel="stylesheet">
```
Installing FontAwesome4 is the same as its newer version, just from a different repository. You will be targeting the font-awesome repo as opposed to @fortawesome one.

    $ yarn add font-awesome@4.7.0 -D
    // OR
    $ npm install font-awesome@4.7.0 -D
Don't forget, your project will need to recognize css. If you are using webpack, install and setup the css loader.
```js
// src/plugins/vuetify.js

import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa4',
  },
})
```
### Install Font Awesome SVG Icons
Add required dependencies.

    $ yarn add @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome @fortawesome/free-solid-svg-icons -D
    // or
    $ npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome @fortawesome/free-solid-svg-icons -D
Then add globally font-awesome-icon component and set faSvg as iconfont in Vuetify config.
```js
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'faSvg',
  },
})
```