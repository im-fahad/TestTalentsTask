<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheSidebar from '@/components/TheSidebar.vue'
import TheNav from '@/components/TheNav.vue'
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

        <RouterView />
      </div>
    </div>
  </main>
</template>
