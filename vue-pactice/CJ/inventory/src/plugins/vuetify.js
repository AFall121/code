import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opt = {
  icons: {
    iconfont: 'md' || 'fa'
  }
}

export default new Vuetify(opt);
