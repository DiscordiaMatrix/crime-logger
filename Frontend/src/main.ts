import { createApp } from 'vue'
import { createClient } from '@supabase/supabase-js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* PWA Elements */
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);

// Add all solid icons to the library so you can use it in your page
library.add(fas)

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.component('font-awesome-icon', FontAwesomeIcon);
  app.mount('#app');
});