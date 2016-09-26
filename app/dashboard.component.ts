import { Component, OnInit } from '@angular/core';

import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
	templateUrl: 'app/dashboard.component.html',
	selector: 'dashboard'
})

export class DashboardComponent implements OnInit {

	characters: Character[] = [];

	constructor(private characterService: CharacterService) { }

		ngOnInit(): void {
			this.characterService.getCharacters()
				.then(characters => this.characters = characters.slice(1, 3));
		}

		gotoDetail(character: Character): void {

		}
}