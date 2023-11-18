<script setup lang="ts">
import { useCounterStore, useAccountStore } from '@/stores/other';

const { t } = useI18n();
const counterStore = useCounterStore();
const accountStore = useAccountStore();
</script>

<template>
  <div class="about">
    <h1 class="text-blue text-28px">This is Home page | {{ t('success') }}</h1>
    <div class="flex">
      <p>{{ counterStore.count }}</p>
      <br />
      <button @click="counterStore.increment()" type="button">add</button>
    </div>
    <label>
      Account :
      <input type="text" v-model="accountStore.account" />
    </label>
    <div>
      <RouterLink to="/">Login page</RouterLink>
    </div>
  </div>
</template>
