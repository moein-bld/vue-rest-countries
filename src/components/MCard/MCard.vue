<template>
	<div class="shadow-md rounded-md dark:text-main dark:bg-card hover:scale-105 transition-transform">
		<img :src="img" :alt="alt" class="w-full max-h-[200px] min-h-[200px] object-cover" />

		<div class="p-4">
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
});
</script>
