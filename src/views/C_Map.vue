<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Crimes Map</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Crimes Map</ion-title>
        </ion-toolbar>
      </ion-header>
      <capacitor-google-map id="map"></capacitor-google-map>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { GoogleMap } from '@capacitor/google-maps';

/*
const createMap = async () => {
  const mapRef = document.getElementById('map');

  const newMap = await GoogleMap.create({
    id: 'my-map', // Unique identifier for this map instance
    element: mapRef, // reference to the capacitor-google-map element
    apiKey: 'YOUR_API_KEY_HERE', // Your Google Maps API Key
    config: {
      center: {
        // The initial position to be rendered by the map
        lat: 33.6,
        lng: -117.9,
      },
      zoom: 8, // The initial zoom level to be rendered by the map
    },
  });*/

  export default defineComponent({
    name: 'C_Map',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
  });
</script>

<style>
  capacitor-google-map {
    display: inline-block;
    width: 100%;
    height: 400px;
  }
</style>