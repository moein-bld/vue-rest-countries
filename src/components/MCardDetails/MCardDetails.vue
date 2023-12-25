<template>
	<div class="w-full mt-10 flex flex-wrap">
		<div class="w-full xl:w-6/12 bg-gray-300 dark:bg-gray-700 lg:h-[450px] shadow-sm rounded-md transition-colors" v-lazy-container="{ selector: 'img' }">
			<img :data-src="country.flag" alt="country flag" class="w-full lg:max-h-[450px] lg:min-h-[450px] object-cover" />
		</div>
		<div class="w-full xl:w-6/12 py-8 px-2 md:px-16 dark:text-main">
			<p class="text-2xl">{{ country.name }}</p>

			<div class="flex flex-wrap text-md w-full">
				<p class="w-full md:w-6/12 mt-8 dark:text-gray-50 font-medium transition-colors">
					Native Name :
					<span class="dark:text-gray-400 text-gray-600">
						{{ country.nativeName }}
					</span>
				</p>
				<p class="w-full md:w-6/12 mt-8 dark:text-gray-50 font-medium transition-colors">
					Top Level Domain :
					<span class="dark:text-gray-400 text-gray-600">
						{{ country.topLevelDomain[0] }}
					</span>
				</p>
				<p class="w-full md:w-6/12 mt-8 dark:text-gray-50 font-medium transition-colors">
					Population :
					<span class="dark:text-gray-400 text-gray-600">
						{{ country.population }}
					</span>
				</p>
				<p class="w-full md:w-6/12 mt-8 dark:text-gray-50 font-medium transition-colors">
					Currencies :
					<span class="dark:text-gray-400 text-gray-600">
						{{ country.currencies }}
					</span>
				</p>

				<p class="w-full md:w-6/12 mt-8 dark:text-gray-50 font-medium transition-colors">
					Region :
					<span class="dark:text-gray-400 text-gray-600">
						{{ country.region }}
					</span>
				</p>
				<p class="w-full md:w-6/12 mt-8 dark:text-gray-50 font-medium transition-colors">
					Languages :
					<span class="dark:text-gray-400 text-gray-600">
						{{ country.languages }}
					</span>
				</p>
				<p class="w-full md:w-6/12 mt-8 dark:text-gray-50 font-medium transition-colors">
					Sub Region :
					<span class="dark:text-gray-400 text-gray-600">
						{{ country.subregion }}
					</span>
				</p>
				<p class="w-full md:w-6/12 mt-8 dark:text-gray-50 font-medium transition-colors">
					Capital :
					<span class="dark:text-gray-400 text-gray-600">
						{{ country.capital }}
					</span>
				</p>
			</div>

			<div class="mt-16">
				<p>Border Countries:</p>
				<div class="flex flex-wrap mt-6">
					<m-btn v-for="item in country.borders" :key="item" :label="item" class="m-1" @click="getCountryBorder(item)"></m-btn>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import { type CountryDetailsDto } from '@/dto/country.details.dto'
import MBtn from '@/components/MBtn/MBtn.vue';

defineProps({
	country: {
		type: Object as PropType<CountryDetailsDto>,
		required: true,
	},
});

const emit = defineEmits<{
	(e: 'country', payload: string): void;
}>();

async function getCountryBorder(name: string) {
	emit('country', name)
}
</script>