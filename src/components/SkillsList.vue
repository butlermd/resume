<template>
  <section class="skills-list">
    <div
      class="section-title"
      role="list"
    >
      Skills and Strengths
    </div>
    <div
      v-for="skill in skills"
      :key="skill.name"
      role="listitem"
      class="skill-category"
    >
      <div
        class="skill-header"
        role="heading"
        aria-level="4"
      >
        {{ skill.name }}
      </div>
      <div
        v-if="skill.summary"
        class="skill-description"
      >
        {{ skill.summary }}
      </div>
      <div class="skill-exemplars">
        <i>Related</i>: {{ skill.relatedSkills }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { skillsKey } from '@/injectionKeys';

type Skillset = {
  name: string
  summary?: string
  relatedSkills: string
}

const originalSkills = inject(skillsKey, []);

const skills: Skillset[] = originalSkills.map(cat => {
  const relatedSkills = [ ...cat.specifics ];
  relatedSkills.sort((a, b)=>b.fluency - a.fluency);
  return {
    name: cat.name,
    summary: cat.summary,
    relatedSkills: relatedSkills.map(x=>x.name).join(', '),
  };
});

</script>

<style>
.skills-list {
  line-height: calc(1.1 * var(--line-height));
}

.skill-category > .skill-header {
  width: calc(100% - 2em);
  margin-left: 2em;
  font-weight: bold;
}

.skill-category > :not(.skill-header) {
  width: calc(100% - 4em);
  margin-left: 4em;
}

@media print {
}
</style>
