<template>
  <section class="relevant-experience">
    <div
      class="section-title"
      role="list"
    >
      Relevant Experience
    </div>
    <previous-experience
      v-for="exp in experience"
      :key="exp.name"
      :experience="exp"
    />
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import PreviousExperience from '@/components/PreviousExperience.vue';
import { experienceKey } from '@/injectionKeys';

const experience = inject(experienceKey, []);

</script>

<style>
  .relevant-experience {
    line-height: calc(1.25 * var(--line-height));
  }

  .relevant-experience > .experience,
  .experience > .position {
    width: calc(100% - 2em);
    margin-left: 2em;
  }

  .position ul {
    list-style-type: "\2013\00a0";
    /*list-style-position: inside;*/
  }

  @media print {
  }
</style>
