<script setup lang="ts">
  import {ref} from "vue";

  const mute = ref(false);

  const toggleMute = () => {
    mute.value = !mute.value;
    return (mute.value? "" : "muted");
  }
  const muteNameButton = () => {
    return (mute.value? "unmute": "mute");
  }

</script>

<template>
  <video autoplay loop class="w-screen absolute">
    <source src="@/assets/video/lofi.mp4" type="video/webm" />
    <source src="@/assets/video/lofi.mp4" type="video/mp4" />
  </video>
  <button class="shadow shadow-black bg-yellow-200 rounded m-4" >{{ muteNameButton() }}</button>
</template>