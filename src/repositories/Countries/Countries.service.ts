import { BaseClient } from "../Clients/BaseClient"

export default class Countries {

	public async getAllCountries() {
		return await BaseClient.get(`all?fields=name,capital,region,population,flags,alpha3Code`)
	}

	public async getAllCountriesByRegion(region: string) {
		return await BaseClient.get(`region/${region}`)
	}

	public async getAllCountriesByName(name: string) {
		return await BaseClient.get(`name/${name}`)
	}

}