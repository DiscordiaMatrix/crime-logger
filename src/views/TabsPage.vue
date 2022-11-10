<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="crimes-list" href="/tabs/crimes-list">
          <ion-icon :icon="fileTrayFull" />
          <ion-label>List View</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="crimes-map" href="/tabs/crimes-map">
          <ion-icon :icon="map" />
          <ion-label>Map View</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { fileTrayFull, map, home } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      fileTrayFull, 
      map, 
      home,
    }
  }
});
</script>
