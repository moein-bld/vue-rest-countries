import Countries from './Countries/Countries.service';

export default class RepositoryFactory {
	static repositories: Repositories = {
		Countries: new Countries(),
	};

	static get(repositoryName: keyof Repositories) {
		if (!this.repositories[repositoryName]) {
			throw new Error('Invalid repository name!');
		}
		return this.repositories[repositoryName];
	}
}

interface Repositories {
	Countries: Countries;
}
