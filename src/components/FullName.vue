<template>
  <span class="name">{{ name }}</span>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import { nameKey } from '@/injectionKeys';

const name = inject(nameKey);

</script>
