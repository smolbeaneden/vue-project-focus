<script setup lang="ts">
  import { defineProps, reactive, ref } from 'vue';
  import Buttons from "@/components/Buttons.vue";

  const hours = ref(0)
  const minutes = ref(0)

  const hoursLeft = ref(hours.value);
  const minutesLeft = ref(minutes.value);
  const secondsLeft = ref(0);

  const timeInSeconds = ref(0);

  const setTimer= () => {
    hoursLeft.value = hours.value
    minutesLeft.value = minutes.value
    secondsLeft.value = 0
    timeInSeconds.value = hours.value*3600 + minutes.value*60;
  }

  const intervalId = ref()

  const startCountdown = () => {
    intervalId.value = setInterval(handleCountdown, 1000);
  }

  const stopCountdown = () => {
    clearInterval(intervalId.value)
  }

  const handleCountdown = () => {
    if(timeInSeconds.value == 0){
      clearInterval(intervalId.value);
      alert("Well done!");
      return;
    }
    timeInSeconds.value -= 1;
    secondsLeft.value = timeInSeconds.value%(60);
    minutesLeft.value = ((timeInSeconds.value - secondsLeft.value)/60)%(60);
    hoursLeft.value = ((timeInSeconds.value - minutesLeft.value*60 - secondsLeft.value)/3600);

  }


</script>

<template>

  <div class="w-56 flex grid-cols-2 gap-2 mt-20">
    <Buttons buttonColor="black" name="Start" @click="startCountdown" />
    <Buttons buttonColor="red" name="Stop" @click="stopCountdown" />
  </div>
  <div class="align-middle place-content-center w-56 mb-3 bg-white flex grid grid-cols-1 font-stretch-expanded rounded-2xl shadow shadow-black">
    <div class="flex mt-2 grid-cols-5 gap-3.5 text-center tracking-tighter text-3xl text-gray-500 align-middle place-content-center ">
      <div>{{`0${hoursLeft}`}}</div>
      <div>:</div>
      <div>{{`${minutesLeft<10? 0 : ""}${minutesLeft}`}}</div>
      <div>:</div>
      <div>{{`${secondsLeft<10? 0 : ""}${secondsLeft}`}}</div>
    </div>
    <div class="text-[0.75rem] text-center mb-2 flex grid grid-cols-3 text-black tracking-tight align-middle place-content-center">
    <div>hours</div>
    <div>minutes</div>
    <div>seconds</div>
  </div>
  </div>




  <div class="bg-white shadow-black shadow p-5 rounded-2xl w-56 align-middle">
    <div>
      <label class=" tracking-tighter font-stretch-expanded block text-gray-600  mb-1"
      >Select Hours</label
      >
      <select

          v-model="hours"
          id="Hours"
          name="Hours"
          class="border rounded w-full py-2 px-3 bg-white "
          required

      >
        <option disabled :value="0">Hours</option>/
        <option :value="0">0</option>
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
        <option :value="4">4</option>
        <option :value="5">5</option>
      </select>
    </div>

    <div>
      <label class="tracking-tighter font-stretch-expanded block text-gray-600 mb-1 mt-3 relative"
      >Select Minutes</label
      >
      <select
          v-model="minutes"
          id="Hours"
          name="Hours"
          class="border rounded w-full py-2 px-3 bg-white relative"
          required
      >
        <option disabled :value="0">Minutes</option>/
        <option :value="0">0</option>
        <option :value="10">10</option>
        <option :value="20">20</option>
        <option :value="30">30</option>
        <option :value="40">40</option>
        <option :value="50">50</option>
      </select>
    </div>
    <button class="font-stretch-expanded w-full tracking-tight leading-5 shadow-black mt-4 p-1 border-2 border-purple-300 text-white shadow hover:bg-purple-300 active:bg-purple-400 active:border-2 active:border-purple-100 bg-gray-400 rounded" @click="setTimer">
      Set Countdown</button>
  </div>
</template>
