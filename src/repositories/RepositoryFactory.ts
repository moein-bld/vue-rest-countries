import Countries from "./Countries/Countries.service";


export default class RepositoryFactory {
	static repositories: any = {
		Countries: new Countries
	};
	static get(repositoryName: string) {
		if (!this.repositories[repositoryName]) {
			throw new Error('invalid repository name!');
		}
		return this.repositories[repositoryName];
	}
}
