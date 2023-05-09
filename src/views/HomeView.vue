<template>
	<div >
		<div class="flex flex-wrap md:justify-between">
			<div class="w-full md:w-5/12 xl:w-4/12">
				<m-input type="text" placeholder="Search for a country..." icon v-model="search">
					<template v-slot:icon>
						<SearchIcon class="w-4 h-4 dark:text-main"></SearchIcon>
					</template>
				</m-input>
			</div>
			<div class="w-6/12 md:w-3/12 xl:w-2/12 mt-6 md:mt-0">
				<m-select :option="region" v-model="value"> </m-select>
			</div>
		</div>

		<div class="w-full h-screen z-50 overflow-hidden flex flex-col items-center dark:text-main pt-16 mt-16" v-if="loading">
			<div class="pt-16 mt-16"></div>
			<div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
			<h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
			<p class="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
		</div>

		<div class="wrapper-card mt-14 h-full">
			<m-card
				v-for="card in cards"
				:key="card.name"
				:img="card.flags.png"
				:alt="card.flags.alt"
				:name="card.name"
				:population="card.population"
				:capital="card.capital"
				:region="card.region"
			>
			</m-card>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import MInput from '@/components/MInput/MInput.vue';
import MSelect from '@/components/MSelect/MSelect.vue';
import MCard from '@/components/MCard/MCard.vue';
import SearchIcon from '@/components/Icons/SearchIcon.vue';
import RepositoryFactory from '@/repositories/RepositoryFactory';

const { Countries } = RepositoryFactory.repositories;

const loading = ref(false);
const cards = ref<Array<any>>([]);
const search = ref('');
const value = ref('All');
const region = ref([
	{
		text: 'All',
		value: 'All',
	},
	{
		text: 'Africa',
		value: 'Africa',
	},
	{
		text: 'Europe',
		value: 'Europe',
	},
	{
		text: 'Oceania',
		value: 'Oceania',
	},
	{
		text: 'Asia',
		value: 'Asia',
	},
	{
		text: 'Americas',
		value: 'Americas',
	},
]);

watch(value, val => {
	console.log(val);
	if (val === 'All') getAllCountries();
	else getAllCountriesByRegion(val);
});

watch(search, val => {
	console.log(val);
	if (val === '') getAllCountries();
	else getAllCountriesByName(val);
});

async function getAllCountries() {
	try {
		loading.value = true;
		const { data } = await Countries.getAllCountries();
		cards.value = data;
	} catch (error) {
		console.log(error);
	} finally {
		loading.value = false;
	}
}

async function getAllCountriesByRegion(region: string) {
	try {
		loading.value = true;
		const { data } = await Countries.getAllCountriesByRegion(region);
		cards.value = data;
	} catch (error) {
		console.log(error);
	} finally {
		loading.value = false;
	}
}

async function getAllCountriesByName(name: string) {
	try {
		loading.value = true;
		const { data } = await Countries.getAllCountriesByName(name);
		cards.value = data;
	} catch (error) {
		console.log(error);
	} finally {
		loading.value = false;
	}
}

getAllCountries();
</script>

<style>
.wrapper-card {
	display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    grid-gap: 60px 20px;
    justify-items: center;
}

.loader {
	border-top-color: #3498db;
	-webkit-animation: spinner 1.5s linear infinite;
	animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>