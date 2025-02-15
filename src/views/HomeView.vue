<script setup lang="ts">

  //import Countdown from "@/components/Countdown.vue";
  import { ref } from 'vue';
  //import { defineProps } from 'vue';
  import Video from "@/components/Video.vue";
  import Time from "@/components/Time.vue";


</script>

<template>
    <Video videoName="lofi"/>
  <div class="h-screen flex items-center justify-center absolute">
    <div class="mb-130 ml-10 justify-center w-48">
      <Time />
    </div>
  </div>
</template>
