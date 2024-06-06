<template>
  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-tab-button v-for="tab in tabs" :key="tab.name" :tab="tab.name" :href="tab.href">
        <font-awesome-icon :icon="['fas', tab.icon]" />
        <ion-label>{{ tab.label }}</ion-label>
      </ion-tab-button>
    </ion-tab-bar>

    <router-view/>
  </ion-tabs>
</template>

<script lang="ts">
import { defineComponent, DefineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

interface Tab {
  name: string;
  href: string;
  icon: string;
  label: string;
}

export default defineComponent({
  name: 'Tabs',
  components: {
    FontAwesomeIcon
  },
  props: {
    tabs: {
      type: Array as () => Tab[],
      required: true
    }
  }
}) as DefineComponent<{tabs: Tab[]}, {}, any>;
</script>