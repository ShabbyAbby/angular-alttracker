import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService } from './character.service';
import { Character } from './character';

 @Component({
 	selector: 'character-info',
 	templateUrl: 'app/character-info.component.html',
 	styleUrls: ['app/character-info.component.css']
 })

 export class CharacterInfoComponent implements OnInit {
 	@Input()
 	character: Character;

 	ngOnInit(): void {
 		this.route.params.forEach((params: Params) => {
 			let id = +params['id'];
 			this.characterService.getCharacter(id).then(character => this.character = character);
 		});
 	}

 	goBack(): void {
 		this.location.back();
 	}

 	constructor(
 		private characterService: CharacterService,
 		private route: ActivatedRoute,
 		private location: Location
 		) {}
 }