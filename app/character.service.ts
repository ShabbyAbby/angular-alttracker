import { Injectable } from '@angular/core';

import { Character } from './character';
import { CHARACTERS } from './mock-character';

Injectable()
export class CharacterService {
	getCharacters(): Promise<Character[]> {
		return Promise.resolve(CHARACTERS);
	}
}
