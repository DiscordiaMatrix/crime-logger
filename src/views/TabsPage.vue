<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <font-awesome-icon :icon="['fas', 'house']" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/map">
          <font-awesome-icon :icon="['fas', 'map']" />
          <ion-label>Map</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/list">
          <font-awesome-icon :icon="['fas', 'list']" />
          <ion-label>List</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/settings">
          <font-awesome-icon :icon="['fas', 'cog']" />
          <ion-label>Settings</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

defineComponent({
  components: {
    FontAwesomeIcon
  }
})
</script>