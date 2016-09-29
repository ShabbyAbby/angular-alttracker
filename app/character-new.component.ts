import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService } from './character.service';
import { Character } from './character';

 @Component({
 	selector: 'character-new',
 	templateUrl: 'app/character-new.component.html',
 	styleUrls: ['app/character-new.component.css']
 })

 export class CharacterNewComponent implements OnInit {

 		classes = [
			'Warrior', 
			'Paladin', 
			'Hunter', 
			'Rogue', 
			'Priest', 
			'Death Knight', 
			'Shaman', 
			'Mage', 
			'Warlock', 
			'Monk', 
			'Druid', 
			'Demon Hunter'
		];

		races = [
			'Human',
			'Night Elf',
			'Dwarf',
			'Gnom',
			'Dreanei',
			'Pandarian'
		];

	visibility = 'hidden';

	@Input() isVisible: boolean = true;

	ngOnChanges() {
		this.visibility = this.isVisible ? 'hidden' : 'shown';
	}

 	ngOnInit(): void {}
 }