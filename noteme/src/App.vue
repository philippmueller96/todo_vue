<script setup lang="ts">
import { ref } from "vue";
import Header from "./components/Header.vue";
import AllNotes from "./components/AllNotes.vue";
import FinishedNotes from "./components/FinishedNotes.vue";

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
</script>

<template>
  <div></div>
  <Header
    @showAllNotes="showAllNotes"
    @showCompletedNotes="showComppletedNotes"
  />
  <div v-if="currentView === 'allNotes'">
    <AllNotes :notes="notesList" />
  </div>
  <div v-else-if="currentView === 'finishedNotes'">
    <FinishedNotes :notes="notesList" />
  </div>
</template>

<style scoped></style>
