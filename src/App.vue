<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <main class="tt-main">
    <div class="tt-main__sidebar">
      <div class="tt-sidebar">
        <a href="/" class="tt-sidebar__logo">
          <img src="@/assets/3.svg" alt="Logo" class="tt-sidebar__logo-img" />
        </a>

        <ul class="tt-sidebar__menu">
          <li class="tt-sidebar__menu-item">
            <a href="/overview" class="tt-sidebar__menu-item-link">
              <span class="icon icon-Home tt-sidebar__menu-item-icon"></span>
              <span class="tt-sidebar__menu-item-label text-xxs">Overview</span>
            </a>
          </li>
          <li class="tt-sidebar__menu-item">
            <a href="/overview" class="tt-sidebar__menu-item-link active">
              <div class="icon icon-Plans--Billings tt-sidebar__menu-item-icon"></div>
              <div class="tt-sidebar__menu-item-label text-xxs">Plans & Billings</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="tt-main__inner">
      <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
          <HelloWorld msg="You did it!" />

          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
      </header>

      <RouterView />
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
