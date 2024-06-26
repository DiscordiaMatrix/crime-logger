<template>
  <ion-app>
    <TabsRouterOutlet :tabs="tabs" />
  </ion-app>
</template>

<script setup lang="ts">
import IonApp from '@ionic/vue';
import TabsRouterOutlet from './components/Tabs.vue';
import router from './router';

const tabs = router.options.routes.filter(route => route.meta).map(route => route.meta);
</script>