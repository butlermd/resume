<template>
  <a
    v-if="linkedIn"
    :href="url"
    target="_blank"
  ><span class="web-display">{{ display }}</span><span class="print-display">{{ printDisplay }}</span></a>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { contactKey } from '@/injectionKeys';

const linkedIn = inject(contactKey)?.linkedIn;
const url = linkedIn?.url;
const display = linkedIn?.display;
const printDisplay = linkedIn?.printDisplay;

</script>

<style>

@media screen {
  .print-display {
    display: none;
  }
  .web-display {
    display: inline;
  }
}

@media print {
  .print-display {
    display: inline;
  }
  .web-display {
    display: none;
  }
}
</style>
