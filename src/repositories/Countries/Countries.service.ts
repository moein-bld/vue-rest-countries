import { BaseClient } from '../Clients/BaseClient';

export default class Countries {
	public async getAllCountries() {
		return await BaseClient.get(`all?fields=name,capital,region,population,flags,alpha3Code`);
	}

	public async getAllCountriesByRegion(region: string) {
		return await BaseClient.get(`region/${region}?fields=name,capital,region,population,flags,alpha3Code`);
	}

	public async getAllCountriesByName(name: string) {
		return await BaseClient.get(`name/${name}?fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flag`);
	}

	public async getAllCountryBorder(codes: string) {
		return await BaseClient.get(`alpha?codes=${codes}&fields=name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders,flag,alpha3Code`);
	}
}
