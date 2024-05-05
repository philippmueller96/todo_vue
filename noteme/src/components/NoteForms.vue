<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";

const emit = defineEmits();

const addNewNote: any = inject("newNote");
const noteToEdit: any = inject("noteToEdit");

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
    emit("toggleModal");
  }
}
function editNoteHandler() {
  if (newTitle.value === "") {
    alert("Please enter a title");
  } else {
    noteToEdit.value.title = newTitle.value;
    noteToEdit.value.description = newDescription.value;
    noteToEdit.value.location = newLocation.value;
    noteToEdit.value.deadline = newDeadline.value;
    emit("toggleModal");
  }
}

onMounted(() => {
  if (noteToEdit.value) {
    updateInputValues();
  }
});

function updateInputValues() {
  newTitle.value = noteToEdit.value.title;
  newDescription.value = noteToEdit.value.description;
  newLocation.value = noteToEdit.value.location;
  newDeadline.value = noteToEdit.value.deadline;
  emit("toggleModal");
}
</script>
<template>
  <div class="flex flex-col gap-5">
    <div v-if="noteToEdit">
      <h2 class="text-center text-white text-3xl">Edit Note</h2>
      <form
        @submit="editNoteHandler"
        class="flex flex-col bg-slate-400 gap-5 mb-10"
      >
        <input
          type="text"
          v-model="newTitle"
          required
          class="inputNewNote"
        />
        <input
          type="text"
          v-model="newDescription"
          class="inputNewNote"
        />
        <input
          type="text"
          v-model="newLocation"
          class="inputNewNote"
        />
        <input
          type="text"
          v-model="newDeadline"
          class="inputNewNote"
        />
      </form>
      <button
        type="submit"
        @click="editNoteHandler"
        class="bg-green-400 text-white hover:bg-green-700 duration-250 transition-colors ease-in-out"
      >
        Save changes
      </button>
    </div>
    <div v-else>
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
        Add note
      </button>
    </div>

    <button
      @click="$emit('changeStatusNoteModal')"
      class="bg-slate-500 text-white hover:bg-slate-700 duration-250 transition-colors ease-in-out"
    >
      Close
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
  width: 100%;
}
</style>
