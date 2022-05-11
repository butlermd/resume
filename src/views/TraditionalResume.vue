<script setup lang="ts">
import ResumeHeader from '@/components/ResumeHeader.vue';
import FullName from '@/components/FullName.vue';
import ObfuscatedAddress from '@/components/ObfuscatedAddress.vue';
import LinkedInLink from '@/components/LinkedInLink.vue';
import ObfuscatedPhoneNumber from '@/components/ObfuscatedPhoneNumber.vue';
import ObfuscatedEmail from '@/components/ObfuscatedEmail.vue';
import RelevantExperience from '@/components/RelevantExperience.vue';
import PreviousExperience from '@/components/PreviousExperience.vue';
import SkillsList from '@/components/SkillsList.vue';
</script>

<template>
  <main class="resume">
    <resume-header>
      <full-name
        role="heading"
        aria-level="3"
      />
      <obfuscated-address />
      <obfuscated-email />
      <obfuscated-phone-number />
      <linked-in-link />
    </resume-header>
    <relevant-experience>
      <previous-experience />
    </relevant-experience>
    <skills-list />
  </main>
</template>

<style>

@media screen {
  main {
    /* variables */
    --resume-title-size: 3;
    --section-title-size: 2;
    --gap-size: 1.5em;

    /* screen-specific styles */

    height: 100vh;
    overflow-y: scroll;
  }
}

@media print {
  main {
    /* variables */
    --resume-title-size: 3;
    --section-title-size: 2;
    --gap-size: 1.5em;
    --line-height: 1;

    /* print-specific styles */
    width: 7.5in;
    font-size: 12px;
    padding: 0;
    margin: .25in;
  }

  a, a:visited, a:hover, a:active, .hidden-value {
    color: var(--color-text);
  }
}

main {
  line-height: var(--line-height);
}

main > * {
  margin-bottom: var(--gap-size);
  width: inherit;
}

.resume-title {
  font-size: calc(var(--resume-title-size) * 1em);
}

.section-title {
  font-size: calc(var(--section-title-size) * 1em);
}

</style>
