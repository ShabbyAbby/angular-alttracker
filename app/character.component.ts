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

  delete(character: Character): void {
    this.characterService
        .delete(character.id)
        .then(() => {
          this.characters = this.characters.filter(c => c !== character);
          if (this.selectedCharacter === character) { this.selectedCharacter = null; }
        });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.characterService.create(name)
      .then(character => {
        this.characters.push(character);
        this.selectedCharacter = null;
      });
  }
}
