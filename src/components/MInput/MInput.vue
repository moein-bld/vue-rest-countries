<template>
	<div class="flex items-center justify-center dark:bg-primary w-full rounded-md shadow-md transition-colors">
		<div class="relative w-full py-2">
			<span class="absolute inset-y-0 left-3 flex items-center" v-if="icon">
				<slot name="icon"></slot>
			</span>
			<input
				:type="type"
				name="q"
				class="py-2 text-sm dark:text-main bg-transparent focus:outline-none w-full pr-3 transition-colors"
				:class="[icon ? 'pl-10' : 'pl-3']"
				:placeholder="placeholder"
				autocomplete="off"
				:value="modelValue"
				@input="handleInput"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
	type: {
		type: String,
		default: 'text',
	},
	placeholder: {
		type: String,
		default: '',
	},
	icon: {
		type: Boolean,
		default: false,
	},
	debounce: {
		type: Number,
		default: 0,
	},
	modelValue: {
		type: String,
		default: '',
	},
});

const emit = defineEmits<{
	(event: 'update:modelValue', payload: string): void;
}>();

const debouncedInput = debounce((value: string) => {
	emit('update:modelValue', value);
}, props.debounce);

function debounce(fn: (...args: any[]) => void, delay: number): (...args: any[]) => void {
	let timeoutId: ReturnType<typeof setTimeout> | null = null;
	return (...args: any[]) => {
		if (timeoutId !== null) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => fn(...args), delay);
	};
}

function handleInput(event: Event) {
	const target = event.target as HTMLInputElement;
	debouncedInput(target.value);
}
</script>
