<template>
	<div>
		<div class="flex flex-wrap md:justify-between">
			<div class="w-full md:w-5/12 xl:w-4/12">
				<m-input type="text" placeholder="Search for a country..." icon v-model="search" :debounce="500">
					<template v-slot:icon>
						<SearchIcon class="w-4 h-4 dark:text-main"></SearchIcon>
					</template>
				</m-input>
			</div>
			<div class="w-6/12 md:w-3/12 xl:w-2/12 mt-6 md:mt-0">
				<m-select :option="region" v-model="value"> </m-select>
			</div>
		</div>

		<div class="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-14 h-full" v-if="loading">
			<div class="shadow-md rounded-md dark:text-main dark:bg-card hover:scale-105 transition-transform animate-pulse" v-for="item in 8">
				<div class="w-full h-[200px] bg-gray-300 dark:bg-gray-700 rounded"></div>

				<div class="p-4">
					<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
					<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
					<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
					<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
				</div>
			</div>
		</div>

		<div class="grid grid-flow-row gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-14 h-full">
			<lazy-component v-for="card in cards" :key="card.name">
				<m-card :img="getFlagUrl(card)" :name="card.name" :population="card.population" :capital="card.capital" :region="card.region" :to="card.alpha3Code">
				</m-card>
			</lazy-component>
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
import type { CountryDetailsDto } from '@/dto/country.details.dto';

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

function getFlagUrl(country: CountryDetailsDto) {
	if (!!country?.flag) return country.flag
	return !!country.flags ? country.flags.png : '';
}

getAllCountries();
</script>

<style>
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
