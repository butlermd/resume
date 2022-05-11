<template>
  <a
    v-if="showPhoneNumber"
    :href="`tel:${phone}`"
  >{{ phone }}</a>
  <span
    v-else
    class="hidden-value"
    @click="showPhoneNumber = true"
  >Click to view phone number</span>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import { decode } from '@/util';
import { contactKey } from '@/injectionKeys';

const phone = decode(inject(contactKey)?.phone);

const showPhoneNumber = ref(false);
</script>
