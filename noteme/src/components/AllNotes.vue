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

function formateDate(date) {
  const [year, month, day] = date.split("-");
  return `${day}.${month}.${year}`;
}

const emit = defineEmits();
</script>
<template>
  <div class="flex justify-center">
    <ul
      role="list"
      class="w-2/3"
    >
      <li
        v-for="(note, index) in notes"
        :key="index"
      >
        <div
          v-if="changeList(note)"
          class="flex justify-between gap-x-6 p-5 rounded-2xl bg-yellow-200 mb-4"
        >
          <div class="flex gap-x-4">
            <div class="flex my-auto">
              <input
                type="checkbox"
                class="w-7 h-7 flex-none cursor-pointer"
                @click="$emit('changeFinished', note.id)"
                :checked="note.finished"
              />
            </div>
            <div class="min-w-0 flex-auto">
              <p class="text-sm font-semibold leading-6 text-gray-900">
                {{ note.title }}
              </p>
              <p class="mt-1 text-xs leading-5 text-gray-500">
                {{ note.description }}
              </p>
            </div>
          </div>
          <div class="flex gap-5">
            <div class="hidden sm:flex sm:flex-col sm:items-end">
              <p class="mt-1 text-xs leading-5 text-gray-500">
                {{ formateDate(note.creationDate) }}
              </p>
              <p
                v-if="note.deadline"
                class="mt-1 text-s leading-6 text-gray-900"
              >
                {{ formateDate(note.deadline) }}
              </p>
            </div>
            <div class="w-auto">
              <img
                src="/edit.png"
                class="min-w-16 w-16 cursor-pointer hover:contrast-125 duration-150 ease-in-out"
                @click="$emit('editNote', note.id)"
              />
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
