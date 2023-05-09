<template>
	<div class="flex flex-col items-center dark:bg-primary rounded-lg relative transition-colors">
		<button class="flex justify-between items-center w-full shadow-md p-3 dark:text-main transition-colors" @click="isOptionsExpanded = !isOptionsExpanded">
			{{ modelValue }}
			<svg
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				class="h-4 w-4 transform transition-transform duration-200 ease-in-out dark:text-main"
				:class="isOptionsExpanded ? 'rotate-180' : 'rotate-0'"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
		<ul class="absolute top-14 rounded-md w-full p-2 dark:text-main dark:bg-primary bg-primary-light shadow-md cursor-pointer transition-colors z-50" v-if="isOptionsExpanded">
			<li class="py-1 w-full text-center" v-for="item in option" key="item.value" @click="emit('update:modelValue', item.value)">{{ item.text }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOptionsExpanded = ref();

interface Option {
	text: string;
	value: string;
}

const props = defineProps({
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
</script>
