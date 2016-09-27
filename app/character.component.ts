import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from './character';
import { CharacterService } from './character.service';

@Component({
  moduleId: module.id,
  selector: 'my-characters',
  templateUrl: 'character.component.html',
  styleUrls: [ 'character.component.css' ], 
  providers: [CharacterService]
})

export class CharacterComponent implements OnInit {
  title = 'AltTracker';
  characters: Character[];
  selectedCharacter: Character;

  constructor(private router: Router,
              private characterService: CharacterService) { }

  onSelect(character: Character): void {
  	this.selectedCharacter = character;
  }

  getCharacters(): void {
    this.characterService.getCharacters().then(characters => this.characters = characters);
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  gotoInfo(): void {
    this.router.navigate(['/info', this.selectedCharacter.id]);
  }
}
