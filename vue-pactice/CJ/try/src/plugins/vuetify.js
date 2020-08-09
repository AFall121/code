import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// This option suppresses all Vuetify logs and warnings.
Vuetify.config.silent = true;

Vue.use(Vuetify);

export default new Vuetify({
  theme: { dark: false },
  icons: {
    iconfont: 'md'
  }
});
