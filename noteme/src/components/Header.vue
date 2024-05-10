<script setup lang="ts">
import newNote from "./NoteForms.vue";

const props = defineProps({
  openNoteModal: Boolean,
  isEditing: Boolean,
});

const emit = defineEmits();

const showAllNotes = () => {
  emit("showAllNotes");
};

const showFinishedNotes = () => {
  emit("showFinishedNotes");
};

const toggleModal = () => {
  emit("toggleModal");
  if (props.isEditing) {
    emit("resetEditing");
  }
};
</script>

<template>
  <header class="flex justify-center m-8">
    <nav class="flex row gap-20">
      <a
        class="bg-zinc-400 min-w-20 cursor-pointer px-5 py-3 text-center rounded-2xl text-white hover:bg-zinc-500 duration-250 transition-colors ease-in-out"
        @click="showAllNotes"
        >All</a
      >
      <a
        class="bg-zinc-400 min-w-20 cursor-pointer px-5 py-3 text-center rounded-2xl text-white hover:bg-zinc-500 duration-250 transition-colors ease-in-out"
        @click="showFinishedNotes"
        >Finished
      </a>
      <a
        class="bg-amber-400 min-w-20 cursor-pointer px-5 py-3 text-center rounded-2xl text-white hover:bg-orange-500 duration-250 transition-colors ease-in-out"
        @click="toggleModal"
        >New note</a
      >
      <Teleport to="body">
        <div
          v-if="props.openNoteModal"
          class="container_modal"
        >
          <div
            class="modal fixed z-50 rounded-3xl m-auto p-10 top-10 bg-zinc-200"
          >
            <newNote @changeStatusNoteModal="toggleModal" />
          </div>
        </div>
      </Teleport>
    </nav>
  </header>
</template>
<style scoped>
.modal {
  right: 5%;
}
.container_modal {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
./NoteForms.vue
