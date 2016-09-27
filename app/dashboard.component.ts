import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
	templateUrl: 'app/dashboard.component.html',
	styleUrls: [ 'app/dashboard.component.css' ], 
	selector: 'dashboard'
})

export class DashboardComponent implements OnInit {

	characters: Character[] = [];

	constructor(private router: Router,
				private characterService: CharacterService) { }

		ngOnInit(): void {
			this.characterService.getCharacters()
				.then(characters => this.characters = characters.slice(1, 3));
		}

		gotoInfo(character: Character): void {
			let link = ['/info', character.id];
			this.router.navigate(link);
		}
}