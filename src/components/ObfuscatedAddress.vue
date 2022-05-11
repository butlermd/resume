<template>
  <span
    v-if="showAddress"
  >{{ address }}</span>
  <span
    v-else
    class="hidden-value"
    @click="showAddress = true"
  >Click to view address</span>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue';
import { decode } from '@/util';
import { contactKey } from '@/injectionKeys';

const address = decode(inject(contactKey)?.address);


const showAddress = ref(false);
</script>
