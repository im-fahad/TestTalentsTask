<template>
  <div class="tt-sidebar">
    <a href="/" class="tt-sidebar__logo">
      <img src="@/assets/3.svg" alt="Logo" class="tt-sidebar__logo-img" />
    </a>

    <ul class="tt-sidebar__menu">
      <li class="tt-sidebar__menu-item">
        <RouterLink to="/overview" class="tt-sidebar__menu-item-link">
          <span class="icon icon-Home tt-sidebar__menu-item-icon"></span>
          <span class="tt-sidebar__menu-item-label text-xxs">Overview</span>
        </RouterLink>
      </li>
      <li class="tt-sidebar__menu-item">
        <RouterLink to="/" class="tt-sidebar__menu-item-link active">
          <span class="icon icon-Plans--Billings tt-sidebar__menu-item-icon" />
          <span class="tt-sidebar__menu-item-label text-xxs">Plans & Billings</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
