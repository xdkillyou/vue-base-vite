<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import useCounterStore from '@/stores/counter';

const { t } = useI18n();
const counterStore = useCounterStore();
</script>

<template>
  <div class="about">
    <h1>This is an about page | {{ t('success') }}</h1>
    <p>{{ counterStore.count }}</p>
    <button @click="counterStore.increment()" type="button">add</button>
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
}
</style>
