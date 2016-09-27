import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let characters = [
		  { id: 1, name: 'Shabbyabby' },
		  { id: 2, name: 'Shabika' },
		  { id: 3, name: 'Felietta' }
		];
		return {characters};
	}
}