<script setup lang="ts">
import { inject, ref, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";

const emit = defineEmits();

const { addNewNote, currentDate }: any = inject("newNote");
const { noteToEdit, isEditing }: any = inject("noteToEdit");

const newTitle = ref("");
const newDescription = ref("");
const newLocation = ref("");
const newDeadline = ref(currentDate);

function addNewNoteHandler() {
  if (newTitle.value === "") {
    alert("Please enter a title");
  } else {
    const newID = uuidv4();
    const newCreationDate = currentDate;
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
    emit("changeStatusNoteModal");
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
    isEditing.value = false;
    emit("changeStatusNoteModal");
  }
}

onMounted(() => {
  if (isEditing.value) {
    updateInputValues();
  }
});

function updateInputValues() {
  newTitle.value = noteToEdit.value.title;
  newDescription.value = noteToEdit.value.description;
  newLocation.value = noteToEdit.value.location;
  newDeadline.value = noteToEdit.value.deadline;
}
</script>
<template>
  <div class="flex flex-col gap-5">
    <div v-if="isEditing === true">
      <h2 class="text-center text-zinc-500 text-3xl">Edit Note</h2>
      <form
        @submit="editNoteHandler"
        class="flex flex-col gap-5 mb-10"
      >
        <input
          type="text"
          v-model="newTitle"
          required
          class="inputNewNote"
        />
        <textarea
          type="text"
          v-model="newDescription"
          class="inputNewNote"
          rows="5"
        />
        <input
          type="text"
          v-model="newLocation"
          class="inputNewNote"
        />
        <input
          type="date"
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
      <h2 class="text-center text-zinc-500 text-3xl">New Note</h2>
      <form
        @submit="addNewNote"
        class="flex flex-col gap-5 mb-10"
      >
        <input
          type="text"
          v-model="newTitle"
          placeholder="Title"
          required
          class="inputNewNote"
        />
        <textarea
          type="text"
          v-model="newDescription"
          placeholder="Desciption"
          class="inputNewNote"
          rows="5"
        />
        <input
          type="text"
          v-model="newLocation"
          placeholder="Location"
          class="inputNewNote"
        />
        <input
          type="date"
          v-model="newDeadline"
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
      class="bg-zinc-400 text-white hover:bg-zinc-500 duration-250 transition-colors ease-in-out"
    >
      Close
    </button>
  </div>
</template>
<style scoped>
.inputNewNote {
  padding: 10px 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.2);
}
button {
  padding: 10px;
  border-radius: 15px;
  width: 100%;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.2);
}

h2 {
  margin-bottom: 15px;
}
</style>
