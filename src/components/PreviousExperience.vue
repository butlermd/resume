<template>
  <section
    class="experience"
    role="group"
  >
    <span
      class="employer"
      role="heading"
      aria-level="4"
    >{{ experience.name }}</span> &mdash; {{ experience.location }}
    <div
      v-for="position in experience.positions"
      :key="position.title"
      class="position"
      role="group"
    >
      <span
        class="position-title"
        role="heading"
        aria-level="5"
      >{{ position.title }}</span>
      <div class="position-dates">
        {{ position.startDate }} &ndash; {{ position.endDate || 'Present' }}
      </div>
      <ul class="duties">
        <li
          v-for="(duty, i) in position.duties"
          :key="i"
          class="duty"
          role="listitem"
        >
          {{ duty }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Experience } from '@/types';
interface Props {
  experience: Experience
}

defineProps<Props>();

</script>

<style>
.experience{
}

.position-dates {
  float: right
}

.employer {
  font-weight: bold;
}

.position-title {
  font-style: italic;
}
</style>
