import { Injectable } from '@angular/core';

import { Character } from './character';
import { CHARACTERS } from './mock-character';

Injectable()
export class CharacterService {
	getCharacters(): Promise<Character[]> {
		return Promise.resolve(CHARACTERS);
	}

	getCharacter(id: number): Promise<Character> {
		return this.getCharacters()
		.then(characters => characters.find(character => character.id === id));
	}
}
