<template>
	<div class="shadow-md rounded-md dark:text-main dark:bg-card hover:scale-105 transition-transform" :class="{loading : 'animate-pulse'}" v-lazy-container="{ selector: 'img' }">
		<div class="w-full h-[200px] bg-gray-300 dark:bg-gray-700 rounded">
			<img :data-src="img" :alt="alt" class="w-full max-h-[200px] min-h-[200px] object-cover" />
		</div>

		<div class="p-4">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" :class="[loading ? 'block' : 'hidden']"></div>
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" :class="[loading ? 'block' : 'hidden']"></div>
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" :class="[loading ? 'block' : 'hidden']"></div>
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" :class="[loading ? 'block' : 'hidden']"></div>

			<p class="text-xl font-bold mb-4">{{ name }}</p>

			<p class="text-sm mt-1">
				<span class="dark:text-gray-50 font-medium transition-colors"> Population : </span>
				<span class="dark:text-gray-400 text-gray-600 transition-colors">
					{{ population }}
				</span>
			</p>
			<p class="text-sm mt-1">
				<span class="dark:text-gray-50 font-medium transition-colors"> Region : </span>
				<span class="dark:text-gray-400 text-gray-600 transition-colors">
					{{ region }}
				</span>
			</p>
			<p class="text-sm mt-1">
				<span class="dark:text-gray-50 font-medium transition-colors"> Capital : </span>
				<span class="dark:text-gray-400 text-gray-600 transition-colors">
					{{ capital }}
				</span>
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	img: {
		type: String,
		required: false,
	},
	alt: {
		type: String,
		required: false,
	},
	name: {
		type: String,
		required: false,
	},
	population: {
		type: Number,
		required: false,
	},
	capital: {
		type: String,
		required: false,
	},
	region: {
		type: String,
		required: false,
	},
	loading: {
		type: Boolean,
		required: false,
	},
});
</script>
