<script setup lang="ts">
import { inject, ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const emit = defineEmits();
const addNewNote: any = inject("newNote");

const newTitle = ref("");
const newDescription = ref("");
const newLocation = ref("");
const newDeadline = ref("");

function addNewNoteHandler() {
  if (newTitle.value === "") {
    alert("Please enter a title");
  } else {
    console.log("check check");
    const newID = uuidv4();
    const newCreationDate = "today for testing";
    const newFinished = false;
    addNewNote(
      newID,
      newTitle.value,
      newDescription.value,
      newCreationDate,
      newDeadline.value,
      newLocation.value,
      newFinished
    );
    emit("changeStatusNewNoteModal");
  }
}
</script>
<template>
  <div class="flex flex-col gap-5">
    <h2 class="text-center text-white text-3xl">New Note</h2>
    <form
      @submit="addNewNote"
      class="flex flex-col bg-slate-400 gap-5 mb-10"
    >
      <input
        type="text"
        v-model="newTitle"
        placeholder="Title"
        required
        class="inputNewNote"
      />
      <input
        type="text"
        v-model="newDescription"
        placeholder="Desciption"
        class="inputNewNote"
      />
      <input
        type="text"
        v-model="newLocation"
        placeholder="Location"
        class="inputNewNote"
      />
      <input
        type="text"
        v-model="newDeadline"
        placeholder="Deadline"
        class="inputNewNote"
      />
    </form>
    <button
      type="submit"
      @click="addNewNoteHandler"
      class="bg-green-400 text-white hover:bg-green-700 duration-250 transition-colors ease-in-out"
    >
      Add
    </button>
    <button
      @click="$emit('changeStatusNewNoteModal')"
      class="bg-slate-500 text-white hover:bg-slate-700 duration-250 transition-colors ease-in-out"
    >
      close
    </button>
  </div>
</template>
<style scoped>
.inputNewNote {
  padding: 10px 20px;
  border-radius: 30px;
}
button {
  padding: 10px;
  border-radius: 30px;
}
</style>
