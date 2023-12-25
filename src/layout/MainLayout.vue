<template>
	<div>
		<div class="dark:bg-primary dark:text-main p-6 w-full shadow-md transition-colors">
			<div class="w-11/12 lg:w-10-/12 xl:w-9/12 mx-auto flex justify-between items-center">
				<span class="md:text-2xl font-medium"> Where in the world? </span>

				<span class="flex items-center cursor-pointer text-sm md:text-md" @click="changeTheme">
					<LightModeIcon class="mr-2 w-5 md:w-6" v-if="mode"></LightModeIcon>
					<DarkModeIcon class="mr-2 w-5 md:w-6" v-else></DarkModeIcon>

					{{ mode ? 'Light' : 'Dark' }} Mode
				</span>
			</div>
		</div>

		<main class="w-full p-4 dark:bg-secondary pt-12 transition-colors h-full">
			<div class="w-11/12 lg:w-10-/12 2xl:w-9/12 mx-auto">
				<router-view v-slot="{ Component }">
					<transition name="scale" mode="out-in">
						<component :is="Component" />
					</transition>
				</router-view>
			</div>
		</main>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DarkModeIcon from '@/components/Icons/DarkModeIcon.vue';
import LightModeIcon from '@/components/Icons/LightModeIcon.vue';

const mode = ref(true);

function setTheme(value: string) {
	localStorage.setItem('theme', value);
}

function getCurrentTheme() {
	return localStorage.getItem('theme');
}

function initTheme() {
	const current = getCurrentTheme();

	if (current === null) setTheme(`${mode.value}`);
	else mode.value = JSON.parse(current || 'true');

	if (mode.value) document.querySelector('html')?.classList.add('dark');
	else document.querySelector('html')?.classList.remove('dark');
}

function changeTheme() {
	mode.value = !mode.value;
	if (mode.value) document.querySelector('html')?.classList.add('dark');
	else document.querySelector('html')?.classList.remove('dark');
	setTheme(`${mode.value}`);
}

initTheme();
</script>
