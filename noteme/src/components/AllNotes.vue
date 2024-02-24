<script setup lang="ts">
const props = defineProps({
  notes: Object,
  currentList: Boolean,
});

const changeList = (note: any) => {
  if (props.currentList === false) {
    return !note.finished;
  } else if (props.currentList === true) {
    return note.finished;
  }
};

const emit = defineEmits();
</script>
<template>
  <div class="flex justify-center">
    <ul
      role="list"
      class="w-1/2"
    >
      <li
        v-for="(note, index) in notes"
        :key="index"
        class="pb-4"
      >
        <div
          v-if="changeList(note)"
          class="flex justify-between gap-x-6 p-5 rounded-2xl bg-yellow-200"
        >
          <div class="flex min-w-0 gap-x-4">
            <input
              type="checkbox"
              class="w-7 flex-none rounded-full"
              @click="$emit('changeFinished', note.id)"
            />
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                {{ note.title }}
              </p>
              <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                {{ note.description }}
              </p>
            </div>
          </div>
          <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p class="text-sm leading-6 text-gray-900">
              {{ note.creationDate }}
            </p>
            <p
              v-if="note.deadline"
              class="mt-1 text-xs leading-5 text-gray-500"
            >
              {{ note.deadline }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
