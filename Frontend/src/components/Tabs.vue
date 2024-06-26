<template>
  <ion-tabs>
    <ion-router-outlet></ion-router-outlet>
    <ion-tab-bar slot="bottom">
      <ion-tab-button v-for="tab in tabs" :key="tab.name" :tab="tab.name" :href="tab.href">
        <font-awesome-icon :icon="['fas', tab.icon]" />
        <ion-label>{{ tab.label }}</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script lang="ts">
import { defineComponent, DefineComponent } from 'vue';
import { IonTabs, IonTabBar, IonTabButton, IonLabel, IonRouterOutlet } from '@ionic/vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

interface Tab {
  name: string;
  href: string;
  icon: string;
  label: string;
}

export default defineComponent({
  name: 'TabsRouterOutlet',
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonRouterOutlet
  },
  props: {
    tabs: {
      type: Array as () => Tab[],
      required: true
    }
  },
  mounted() {
    console.log(this.tabs);
  }
}) as DefineComponent<{tabs: Tab[]}, {}, any>;
</script>