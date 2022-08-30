import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Character } from 'src/models/character.model';
import { Observable } from 'rxjs';

const API_URL = "https://localhost:44352/api/";
@Injectable({
  providedIn: 'root'
})
export class CharacterCollectionService {
  // Get
  characters: any[] = [];

  // Get ID
  getCharacter: any = {
    name: '',
    power: null
  }

  // Post
  addCharacter: Character = {
    name: "",
    power: undefined
  };

  // Put
  updateCharacter: Character = {
    name: "",
    power: undefined
  };

  // Delete
  delCharacter: Character = {
    id: undefined
  }
  postId: any;
  constructor(private http: HttpClient) {}

   //Get
   getCharacters(path: string): Observable<Character> {
    return this.http.get(API_URL + path).pipe();
  }

   //Get ID
   getCharacterByID(id: any) {
    this.http.get(API_URL + id) 
      .subscribe((character: any) => {
        this.getCharacter = character;
        console.log(this.getCharacter);
      });
  }

   //Post
  //  postCharacter() {
  //   this.http.post < any > (API_URL, this.addCharacter).
  //   subscribe(data => { this.postId = data.id;});
  //   console.log(this.addCharacter);
  // }

  postCharacter() {
    return this.http.post < any > (API_URL, this.addCharacter)
  }

   //Put
   putCharacter() {
    this.http.put < any > (API_URL, this.updateCharacter)
      .subscribe(data => this.postId = data.id);
  }

   //Delete ID
   deleteCharacter(id: any) {
    this.http.delete(API_URL + id)
      .subscribe(() => console.log('Delete successful'));
  }
}



