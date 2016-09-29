import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let characters = [
		  { id: 1, 
		  	name: 'Shabbyabby', 
		  	race: 'Draenei', 
		  	class: 'Hunter', 
		  	spec: ['Beast Mastery', 'Survival', 'Marksmanship'], 
		  	level: 110, 
		  	ilvl: 847, 
		  	gold: 3000,
		  	main: true },
		  { id: 2, 
		  	name: 'Shabika', 
		  	race: 'Night Elf', 
		  	class: 'Demon Hunter', 
		  	spec: ['Havoc', 'Vengeance'], 
		  	level: 104, 
		  	ilvl: 774, 
		  	gold: 2000,
		  	main: false },
		  { id: 3, 
		  	name: 'Felietta', 
		  	race: 'Night Elf', 
		  	class: 'Priest', 
		  	spec: ['Shadow', 'Holy', 'Disciplin'], 
		  	level: 103, 
		  	ilvl: 768, 
		  	gold: 4000,
		  	main: false },
		];
		return {characters};
	}
}