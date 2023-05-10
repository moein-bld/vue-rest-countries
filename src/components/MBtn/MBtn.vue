<template>
	<RouterLink :to="to" v-if="!!to">
		<button class="outline-none border-none dark:bg-primary dark:text-main rounded-md shadow-md py-3 px-7 flex transition-colors">
			<span class="mr-2" v-if="icon">
				<slot name="icon"></slot>
			</span>
			{{ label }}
		</button>
	</RouterLink>
	<button class="outline-none border-none dark:bg-primary dark:text-main rounded-md shadow-md py-3 px-7 flex transition-colors" v-else>
		<span class="mr-2" v-if="icon">
			<slot name="icon"></slot>
		</span>
		{{ label }}
	</button>
</template>

<script setup lang="ts">
const props = defineProps({
	label: {
		type: String,
		required: false,
	},
	to: {
		type: String,
		required: false,
	},
	icon: {
		type: Boolean,
		required: false,
	},
});
</script>
