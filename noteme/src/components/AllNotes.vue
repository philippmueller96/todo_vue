<script setup lang="ts">
const props = defineProps({
  notes: Object,
  currentList: Boolean,
});

const changeList = (note) => {
  if (props.currentList === false) {
    return !note.finished;
  } else if (props.currentList === true) {
    return note.finished;
  }
};

const emit = defineEmits();
const changeFinished = () => {
  emit("changeFinished");
};
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
              @click="changeFinished"
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

<!--
Aus vorlage und möglicherweise hilfreich:
<setup>
  const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
];
</setup>
<template>
  <div class="flex justify-center">
    <ul role="list" class="divide-y divide-gray-100 w-1/2">
      <li
        v-for="person in people"
        :key="person.email"
        class="flex justify-between gap-x-6 py-5"
      >
        <div class="flex min-w-0 gap-x-4">
          <img
            class="h-12 w-12 flex-none rounded-full bg-gray-50"
            :src="person.imageUrl"
            alt=""
          />
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {{ person.name }}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              {{ person.email }}
            </p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
          <p
            v-if="person.lastSeen"
            class="mt-1 text-xs leading-5 text-gray-500"
          >
            Last seen
            <time :datetime="person.lastSeenDateTime">{{
              person.lastSeen
            }}</time>
          </p>
          <div v-else class="mt-1 flex items-center gap-x-1.5">
            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
              <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p class="text-xs leading-5 text-gray-500">Online</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

-->
