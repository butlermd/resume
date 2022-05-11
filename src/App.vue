<script setup lang="ts">
import { inject } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import  FullName from '@/components/FullName.vue';
import { taglineKey } from '@/injectionKeys';

const tagline = inject(taglineKey);
</script>

<template>
  <header>
    <div class="headings">
      <h1
        class="subheading"
        role="heading"
        aria-level="2"
      >
        {{ tagline }}
      </h1>
      <h2
        class="heading"
        role="heading"
        aria-level="1"
      >
        <full-name />
      </h2>
    </div>

    <nav>
      <RouterLink :to="{name: 'resume'}">
        Resume
      </RouterLink>
      <RouterLink :to="{name: 'about'}">
        About
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

header {
  justify-content: center;
  line-height: 1.5;
  height: 100vh;
  display: flex;
  place-items: center;
  flex-wrap: wrap;
  flex: 4;
  border-right: 2px solid var(--color-border);
  padding: 1rem;
}

.headings {
  display: block;
}

.heading {
  font-size: 3rem;
}

.subheading {
  font-size: 1.75rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

main {
  flex: 12;
  padding: 1rem
}

@media print {
  header {
    display: none;
  }
}
</style>
