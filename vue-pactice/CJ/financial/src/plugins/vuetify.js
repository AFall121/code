import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';
import vueGoogleCharts from 'vue-google-charts'


Vue.use(vueGoogleCharts)
Vue.use(Vuetify);

const opt = {
  icons: {
    iconfont: 'md' || 'fa'
  },
  theme: {
    themes: {
      light: {
        background: colors.blue.accent2
      },
      dark: {
        background: colors.blue.darken2
      }
    }
  }
}
export default new Vuetify(opt);
