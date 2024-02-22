<script setup lang="ts">
const emit = defineEmits();

const showAllNotes = () => {
  emit("showAllNotes");
};

const showFinishedNotes = () => {
  emit("showFinishedNotes");
};
</script>

<template>
  <header class="flex justify-center m-8">
    <nav class="flex row gap-20">
      <a
        class="bg-slate-400 px-5 py-3 rounded-3xl text-white hover:bg-slate-700 duration-250 transition-colors ease-in-out"
        @click="showAllNotes"
        >All notes</a
      >
      <a
        class="bg-slate-400 px-5 py-3 rounded-3xl text-white hover:bg-slate-700 duration-250 transition-colors ease-in-out"
        @click="showFinishedNotes"
        >Finished notes</a
      >
      <a
        class="bg-slate-400 px-5 py-3 rounded-3xl text-white hover:bg-slate-700 duration-250 transition-colors ease-in-out"
        href="#"
        >New note</a
      >
    </nav>
  </header>
</template>
