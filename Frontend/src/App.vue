<template>
  <ion-app>
    <TabsRouterOutlet :tabs="tabs" />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp } from '@ionic/vue';
import TabsRouterOutlet from './components/Tabs.vue';
import router from './router';
import { supabase } from './supabaseClient';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

const tabs = router.options.routes.filter(route => route.meta).map(route => route.meta);

router.beforeEach(async (to, from, next) => {
  const { data: { user } } = await supabase.auth.getUser()

  if (to.name === 'login' && user) {
    next({ name: 'home' });
  } else if (to.name !== 'login' && !user) {
    next({ name: 'login' });
  } else {
    next();
  }
});
</script>