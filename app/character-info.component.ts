import { Component, Input } from '@angular/core';

import { Character } from './character';

 @Component({
 	selector: 'character-info';
 	template: `
 	    <div *ngIf="character">
    	<h2>{{character.name}} details!</h2>
    	<div>
    		<label>id: </label>{{character.id}}
    	</div>
    	<div>
      		<label>name: </label>
      		<input [(ngModel)]="character.name" placeholder="name">
    	</div>
    </div>
 	`
 })

 export class CharacterInfoComponent {
 	@Input()
 	character: Character;
 }