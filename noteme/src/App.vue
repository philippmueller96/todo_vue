<script setup lang="ts">
import { ref, provide } from "vue";
import Header from "./components/Header.vue";
import AllNotes from "./components/AllNotes.vue";

const notesList = ref([
  {
    id: 1,
    title: "Katzenfutter kaufen",
    description:
      "Katzenfutter von Rossmann kaufen. Sorte: Winston Gourmet Hähnchen-Karotte",
    creationDate: "16.02.2024",
    deadline: "01.03.2024",
    location: "Leipzig",
    finished: false,
  },
  {
    id: 2,
    title: "Staubsaugen",
    description: "",
    creationDate: "16.02.2024",
    deadline: "18.02.2024",
    location: "Zuhause",
    finished: false,
  },
  {
    id: 3,
    title: "Lecker Bierchen",
    description:
      "Janosch und Sven anschreiben und nach Bierchen und Billard oder so fragen",
    creationDate: "16.02.2024",
    deadline: "16.02.2024",
    location: "",
    finished: false,
  },
  {
    id: 4,
    title: "Props üben",
    description: "Du solltest weiterhin den Umgang mit Props üben",
    creationDate: "16.02.2024",
    deadline: "16.02.2024",
    location: "",
    finished: true,
  },
]);

const currentView = ref(false);
const openNoteModal = ref(false);

const toggleModal = () => {
  openNoteModal.value = !openNoteModal.value;
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
  console.log("test");
  const foundNote = notesList.value.find((obj) => obj.id === id);
  if (foundNote) {
    noteToEdit.value = foundNote;
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
  console.log(notesList.value);
};

provide("newNote", addNewNote);
provide("noteToEdit", noteToEdit);
</script>

<template>
  <Header
    @showAllNotes="showAllNotes"
    @showFinishedNotes="showFinishedNotes"
    @toggleModal="toggleModal"
    :openNoteModal="openNoteModal"
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
