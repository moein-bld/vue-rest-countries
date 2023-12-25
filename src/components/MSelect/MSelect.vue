<template>
	<div class="flex flex-col items-center dark:bg-primary rounded-lg relative transition-colors">
		<button class="flex justify-between items-center w-full shadow-md p-3 dark:text-main transition-colors" @click.stop="dropdown.active.value = !dropdown.active.value">
			{{ modelValue }}
			<svg
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="h-4 w-4 transform transition-transform duration-200 ease-in-out dark:text-main"
				:class="dropdown.active.value ? 'rotate-180' : 'rotate-0'"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
		<ul class="absolute top-14 rounded-md w-full p-2 dark:text-main dark:bg-primary bg-primary-light shadow-md cursor-pointer transition-colors z-50" v-if="dropdown.active.value">
			<li class="py-2 w-full text-center" :class="{ 'text-blue-400': activeItem === item.value }" v-for="item in option" key="item.value" @click="setActive(item)">{{ item.text }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const activeItem = ref();
const dropdown = {
	active: ref(false),
	close: () => {
		dropdown.active.value = false;
	},
};

defineProps({
	modelValue: {
		type: String,
		required: false,
	},
	option: {
		type: Array<Option>,
		required: false,
	},
});

const emit = defineEmits<{
	(e: 'update:modelValue', payload: string): void;
}>();

function setActive(item: Option) {
	activeItem.value = item.value;
	emit('update:modelValue', item.value);
}

onBeforeUnmount(() => {
	document.removeEventListener('click', dropdown.close);
});

onMounted(() => {
	document.addEventListener('click', dropdown.close);
});

interface Option {
	text: string;
	value: string;
}
</script>
