<script setup lang="ts">
import { ref } from "vue";
import newNote from "./NewNoteForms.vue";

const emit = defineEmits();
const openNewNoteModal = ref(false);

const showAllNotes = () => {
  emit("showAllNotes");
};

const showFinishedNotes = () => {
  emit("showFinishedNotes");
};

const changeStatusNewNoteModal = () => {
  openNewNoteModal.value = !openNewNoteModal.value;
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
        @click="openNewNoteModal = true"
        >New note</a
      >
      <Teleport to="body">
        <div
          v-if="openNewNoteModal"
          class="modal fixed z-50 rounded-3xl m-auto p-10 top-10 bg-slate-400"
        >
          <newNote @changeStatusNewNoteModal="changeStatusNewNoteModal" />
        </div>
      </Teleport>
    </nav>
  </header>
</template>
<style scoped>
.modal {
  right: 5%;
  box-shadow: 0 0 0 2000px rgba(0, 0, 0, 0.5);
}
</style>
