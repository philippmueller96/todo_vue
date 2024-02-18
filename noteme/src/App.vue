<script setup lang="ts">
import Header from "./components/Header.vue";
import AllNotes from "./components/AllNotes.vue";

const notesList = [
  {
    id: "1",
    title: "Katzenfutter kaufen",
    description:
      "Katzenfutter von Rossmann kaufen. Sorte: Winston Gourmet Hähnchen-Karotte",
    creationDate: "16.02.2024",
    deadline: "01.03.2024",
    location: "Leipzig",
    finished: false,
  },
  {
    id: "2",
    title: "Staubsaugen",
    description: "",
    creationDate: "16.02.2024",
    deadline: "18.02.2024",
    location: "Zuhause",
    finished: false,
  },
  {
    id: "3",
    title: "Lecker Bierchen",
    description:
      "Janosch und Sven anschreiben und nach Bierchen und Billard oder so fragen",
    creationDate: "16.02.2024",
    deadline: "16.02.2024",
    location: "",
    finished: false,
  },
];
</script>

<template>
  <div></div>
  <Header />
  <AllNotes :notes="notesList" />
  <p>check for changes</p>
</template>

<style scoped></style>
