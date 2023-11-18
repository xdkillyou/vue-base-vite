<script setup lang="ts">
import { useCounterStore, useAccountStore } from '@/stores/other';

const { t } = useI18n();
const counterStore = useCounterStore();
const accountStore = useAccountStore();
</script>

<template>
  <div class="about">
    <h1>This is an about page | {{ t('success') }}</h1>
    <div class="flex">
      <p>{{ counterStore.count }}</p>
      <br />
      <button
        @click="counterStore.increment()"
        type="button"
        style="margin-left: 15px"
      >
        add
      </button>
    </div>
    <label>
      Account :
      <input type="text" v-model="accountStore.account" />
    </label>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .flex {
    display: flex;
  }
}
</style>
@/stores/other
