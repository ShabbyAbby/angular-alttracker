import { Injectable, Inject } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Character } from './character';

Injectable()
export class CharacterService {
	private charactersUrl = 'app/characters'

	private handleError(error: any): Promise<any> {
  		console.error('An error occurred', error); // for demo purposes only
  		return Promise.reject(error.message || error);
	}

	constructor(@Inject(Http) private http: Http) { }

	getCharacters(): Promise<Character[]> {
		return this.http.get(this.charactersUrl)
					.toPromise()
					.then(response => response.json().data as Character[])
					.catch(this.handleError);
	}

	getCharacter(id: number): Promise<Character> {
		return this.getCharacters()
		.then(characters => characters.find(character => character.id === id));
	}

	private headers = new Headers({'Content-Type': 'application/json'});

	update(character: Character): Promise<Character> {
		const url = `${this.charactersUrl}/${character.id}`;
		return this.http
			.put(url, JSON.stringify(character), {headers: this.headers})
			.toPromise()
			.then(() => character)
			.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.charactersUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	create(name: string): Promise<Character> {
		return this.http
			.post(this.charactersUrl, JSON.stringify({name: name}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}
}
