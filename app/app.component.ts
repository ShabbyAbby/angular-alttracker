import { Component } from '@angular/core';

import { Character } from './character'

const CHARACTERS: Character[] = [
  { id: 1, name: 'Shabbyabby' },
  { id: 2, name: 'Shabika' },
  { id: 3, name: 'Felietta' }
];

@Component({
  selector: 'my-app',
  styles: [`
  	.characters {
  		margin: 0 0 2em 0;
  		list-style-type: none;
  		padding: 0;
  		width: 20em;
  	}
  	.characters li {
  		color: #FFE300;
  		border-radius: 5px;
  		background-color: #004D98;
  		height: 1.5em;
  		padding: .4em;
  		margin-bottom:  .4em;
  		border: 2px #FFE300 solid;
  	}
  	.selected {
  		background-color: #0084ff !important;
  	}
  	.characters li.selected:hover {
	    background-color: #66b5ff !important;
  	}
  	.characters li:hover {
	    background-color: #0069cc;
	    left: .1em;
    }
  	.characters .text {
    	position: relative;
    	top: -3px;
  	}
  	.characters .badge {
    	display: inline-block;
    	font-size: small;
    	color: #004D98;
    	padding: 0.8em 0.7em 0 0.7em;
    	background-color: #FFE600;
    	line-height: 1em;
    	position: relative;
    	left: -6px;
    	top: -6px;
    	height: 2em;
    	margin-right: .8em;
    	border-radius: 4px 0 0 4px;
  	}
  `],
  template: `
    <h1>{{title}}</h1>
    <h2>My Characters</h2>
    <ul class="characters">
    	<li *ngFor="let character of characters"
    	[class.selected]="character === selectedCharacter"
    	(click)="onSelect(character)">
    		<span class="badge">{{character.id}}</span> {{character.name}}
    	</li>
    </ul>
    <character-info [character]="selectedCharacter"></character-info>
    `
})

export class AppComponent {
  title = 'AltTracker';
  characters = CHARACTERS;
  selectedCharacter: Character;

  onSelect(character: Character): void {
  	this.selectedCharacter = character;
  }
}
