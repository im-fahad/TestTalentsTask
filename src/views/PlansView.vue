<script setup lang="ts">
import { ref } from 'vue'
import ManageSubscription from '@/components/ManageSubscription.vue'
import ComparePlans from '@/components/ComparePlans.vue'

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

    <ManageSubscription v-if="activeTab === 'subscription'" />

    <ComparePlans v-else />
  </div>
</template>
