<template>
  <a
    v-if="showEmail"
    :href="`mailto:${email}`"
  >{{ email }}</a>
  <span
    v-else
    class="hidden-value"
    @click="showEmail = true"
  >Click to view email</span>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import { decode } from '@/util';
import { contactKey } from '@/injectionKeys';

const emailParts = inject(contactKey)?.email;

const email = emailParts ? `${decode(emailParts.username)}@${decode(emailParts.domain)}` : '';

const showEmail = ref(false);
</script>
