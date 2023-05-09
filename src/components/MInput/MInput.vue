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
				@input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	type: {
		type: String,
		required: false,
		defult: 'text',
	},
	placeholder: {
		type: String,
		required: false,
	},
	icon: {
		type: Boolean,
		required: false,
	},
	modelValue: {
		type: String,
		required: false,
	}
});

const emit = defineEmits<{
	(e: 'update:modelValue', payload: string): void;
}>();
</script>
