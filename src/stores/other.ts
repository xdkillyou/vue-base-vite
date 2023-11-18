import { useStorage } from '@vueuse/core';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value += 1;
  }

  return { count, doubleCount, increment };
});

export const useAccountStore = defineStore('account', () => {
  const account = useStorage('account', '');

  return { account };
});
