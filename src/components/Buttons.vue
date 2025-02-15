<script setup lang="ts">
  import { defineProps } from 'vue';
  defineProps({
    buttonColor: String,
    name: String,
  })
</script>
<template>
  <button :class="`bg-${buttonColor}-200 w-full shadow shadow-black mb-3 relative text-center size-14 tracking-tighter w-20 font-stretch-expanded text-2xl text-gray-500 align-middle place-content-center border-2 border-white rounded-2xl hover:bg-${buttonColor}-300  active:shadow-white active:shadow-2xl active:border-0`">
    {{ name }}</button>
</template>