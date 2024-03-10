<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheSidebar from '@/components/TheSidebar.vue'
import TheNav from '@/components/TheNav.vue'
import { ref } from 'vue'

const activeTab = ref('subscription')

const tabs = {
  subscription: 'Manage Subscription',
  plans: 'Compare Plans'
}

const manageTab = (tab: string) => {
  activeTab.value = tab
}
</script>

<template>
  <main class="tt-main">
    <!--sidebar-->
    <div class="tt-main__sidebar">
      <TheSidebar />
    </div>
    <div class="tt-main__inner">
      <div class="tt-wrapper">
        <!--nav-->
        <TheNav />

        <div class="tt-tab">
          <ul class="tt-tab__nav">
            <li
              v-for="(tab, key) in tabs"
              :key="key"
              class="tt-tab__nav-item"
              :class="activeTab === key ? 'active' : ''"
              @click="() => manageTab(key)"
              v-text="tab"
            />
          </ul>

          <div class="tt-tab__inner"></div>
        </div>

        <RouterView />
      </div>
    </div>
  </main>
</template>
