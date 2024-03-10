<script setup lang="ts">
import { ref } from 'vue'

const isOpenDropdown = ref(false)

const toggleDropdown = () => {
  isOpenDropdown.value = !isOpenDropdown.value
}
</script>
<template>
  <nav class="tt-nav">
    <div class="tt-nav__item">
      <button class="tt-nav__item-question" title="?">
        <span class="icon icon-Question" />
      </button>
    </div>
    <div class="tt-nav__item">
      <div class="dropdown">
        <button class="tt-nav-user dropdown__toggle" @click="toggleDropdown">
          <img src="@/assets/Avatar.svg" class="tt-nav-user__avatar" alt="Avatar" />
          <span class="tt-nav-user__info">
            <span class="tt-nav-user__info-label">Hi,</span>
            <span class="tt-nav-user__name">Monir</span>
          </span>
        </button>
        <ul class="dropdown__inner" v-if="isOpenDropdown">
          <li class="dropdown__item">
            <span class="icon icon-User" />
            My profile
          </li>
          <li class="dropdown__item">
            <span class="icon icon-Logout-2" />
            Log out
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
