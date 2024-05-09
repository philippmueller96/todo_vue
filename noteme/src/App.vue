<script setup lang="ts">
import { ref, provide } from "vue";
import Header from "./components/Header.vue";
import AllNotes from "./components/AllNotes.vue";

const currentDate = new Date().toISOString().split("T")[0];

const notesList = ref([
  {
    id: 1,
    title: "Katzenfutter kaufen",
    description:
      "Katzenfutter von Rossmann kaufen. Sorte: Winston Gourmet Hähnchen-Karotte",
    creationDate: currentDate,
    deadline: currentDate,
    location: "Leipzig",
    finished: false,
  },
  {
    id: 2,
    title: "Staubsaugen",
    description: "",
    creationDate: currentDate,
    deadline: currentDate,
    location: "Zuhause",
    finished: false,
  },
  {
    id: 3,
    title: "Lecker Bierchen",
    description:
      "Janosch und Sven anschreiben und nach Bierchen und Billard oder so fragen",
    creationDate: currentDate,
    deadline: currentDate,
    location: "",
    finished: false,
  },
  {
    id: 4,
    title: "Props üben",
    description: "Du solltest weiterhin den Umgang mit Props üben",
    creationDate: currentDate,
    deadline: currentDate,
    location: "",
    finished: true,
  },
]);

const currentView = ref(false);
const openNoteModal = ref(false);
const isEditing = ref(false);

const toggleModal = () => {
  openNoteModal.value = !openNoteModal.value;
};

const resetEditing = () => {
  isEditing.value = false;
};

const showAllNotes = () => {
  currentView.value = false;
};

const showFinishedNotes = () => {
  currentView.value = true;
};

const changeFinished = (id: number) => {
  const foundNote = notesList.value.find((obj) => obj.id === id);
  if (foundNote) {
    setTimeout(() => {
      foundNote.finished = !foundNote.finished;
    }, 500);
  }
};

const noteToEdit = ref();

const editNote = (id: number) => {
  const foundNote = notesList.value.find((obj) => obj.id === id);
  if (foundNote) {
    noteToEdit.value = foundNote;
    isEditing.value = true;
    openNoteModal.value = true;
  }
};

const addNewNote = (
  newId: number,
  newTitle: string,
  newDescription: string,
  newCreationDate: string,
  newDeadline: string,
  newLocation: string,
  newFinished: boolean
) => {
  notesList.value.push({
    id: newId,
    title: newTitle,
    description: newDescription,
    creationDate: newCreationDate,
    deadline: newDeadline,
    location: newLocation,
    finished: newFinished,
  });
};

provide("newNote", { addNewNote, currentDate });
provide("noteToEdit", { noteToEdit, isEditing });
</script>

<template>
  <Header
    @showAllNotes="showAllNotes"
    @showFinishedNotes="showFinishedNotes"
    @toggleModal="toggleModal"
    :openNoteModal="openNoteModal"
    @resetEditing="resetEditing"
    :isEditing="isEditing"
  />
  <div>
    <AllNotes
      :notes="notesList"
      :currentList="currentView"
      @changeFinished="changeFinished"
      @editNote="editNote"
    />
  </div>
</template>

<style scoped></style>
