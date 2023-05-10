<template>
	<div>
		<m-btn label="Back" icon to="/">
			<template v-slot:icon>
				<back-icon class="dark:fill-main"></back-icon>
			</template>
		</m-btn>

		<m-card-details :country="country" @country="getCountryBorder($event)"></m-card-details>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { type CountryDetailsDto } from '@/dto/country.details.dto';

import MBtn from '@/components/MBtn/MBtn.vue';
import MCardDetails from '@/components/MCardDetails/MCardDetails.vue';
import BackIcon from '@/components/Icons/BackIcon.vue';
import RepositoryFactory from '@/repositories/RepositoryFactory';

const { Countries } = RepositoryFactory.repositories;
const route = useRoute();
const $router = useRouter();
const loading = ref(false);
const country = ref<CountryDetailsDto>({
	name: '',
	topLevelDomain: [''],
	capital: '',
	subregion: '',
	region: '',
	population: 0,
	borders: [''],
	nativeName: '',
	currencies: '',
	languages: '',
	flag: '',
	independent: false,
});
const bordersCountry = ref();

watch(
	() => route.params,
	async () => {
		await getAllCountriesByName(route.params.country);
		await getAllCountryBorder(country.value.borders);
	}
);

async function getAllCountriesByName(name: string | any) {
	try {
		loading.value = true;
		const { data } = await Countries.getAllCountriesByName(name);
		country.value = changeCountryData(data[0]);
	} catch (error) {
		console.log(error);
	} finally {
		loading.value = false;
	}
}

async function getAllCountryBorder(codes: string[] | any) {
	try {
		const { data } = await Countries.getAllCountryBorder(codes);
		bordersCountry.value = data;
	} catch (error) {
		console.log(error);
	}
}

async function getCountryBorder(name: string) {
	await bordersCountry.value.forEach((item: any) => {
		if (item.alpha3Code === name) {
			$router.push(`/details/${item.name}`);
			country.value = changeCountryData(item);
		}
	});
	await getAllCountryBorder(country.value.borders);
}

function changeCountryData(data: any): any {
	data.currencies = data.currencies.map((item: any) => item.name).join();
	data.languages = data.languages.map((item: any) => item.name).join();
	return data;
}

onMounted(async () => {
	await getAllCountriesByName(route.params.country);
	await getAllCountryBorder(country.value.borders);
});
</script>

<style lang="scss"></style>
