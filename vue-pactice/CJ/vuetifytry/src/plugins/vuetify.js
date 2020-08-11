import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const opt = {
  icons: {
    iconfont: 'md'
  }
}
export default new Vuetify(opt);
