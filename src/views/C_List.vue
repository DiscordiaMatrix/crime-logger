<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Crimes List</ion-title>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar></ion-searchbar> // TODO: Add debouncer, and search functionality
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Crimes List</ion-title>
        </ion-toolbar>
      </ion-header>
      // placeholder for list
      <ion-list>
        <ion-item v-for="crime in crimes" :key="crime.id" :href="'/crimes-list/' + crime.id">
          <ion-label>{{crime.category}}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonSearchbar, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
//import { Crime } from '@/models/Crime';
//import { RecycleScroller } from 'vue-virtual-scroller';
//import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'


export default defineComponent({
  name: 'C_List',
  components: { IonHeader, IonToolbar, IonSearchbar, IonTitle, IonContent, IonPage }
});
</script>
