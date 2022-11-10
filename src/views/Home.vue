<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
        Welcome to the NYI's mapping project!<br>
        <br>
        Please use the menu below to view the logged crimes, or to view the map.<br>
        <br>
        You can also add crimes to the database by clicking the "Add Crime" button.
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  defineComponent({
  name: 'Home_Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
