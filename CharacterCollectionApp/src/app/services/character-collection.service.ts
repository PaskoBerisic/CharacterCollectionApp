import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Hero } from 'src/models/hero.model';
import { Observable } from 'rxjs';

const API_URL = "https://localhost:44352/api/Hero/";
@Injectable({
  providedIn: 'root'
})
export class CharacterCollectionService {
  // Get
  heroes: any[] = [];

  // Get ID
  getHero: any = {
    name: '',
    power: null
  }

  // Post
  addHero: Hero = {
    name: "",
    power: undefined
  };

  // Put
  updateHero: Hero = {
    name: "",
    power: undefined
  };

  // Delete
  delHero: Hero = {
    id: undefined
  }

  postId: any;
  constructor(private http: HttpClient) {}

   //Get
   getHeroes(): Observable<Hero> {
    return this.http.get(API_URL + 'all').pipe();
  }

   //Get ID
   getHeroByID(id: any) {
    this.http.get(API_URL + id) 
      .subscribe((hero: any) => {
        this.getHero = hero;
        console.log(this.getHero);
      });
  }

   //Post
   
   postHero() {
    this.http.post < any > (API_URL, this.addHero).subscribe(data => {
      this.postId = data.id;
    });
  }

   //Put
   putHero() {
    this.http.put < any > (API_URL, this.updateHero)
      .subscribe(data => this.postId = data.id);
  }

   //Delete ID
   deleteHero(id: any) {
    this.http.delete(API_URL + id)
      .subscribe(() => console.log('Delete successful'));
  }
}



