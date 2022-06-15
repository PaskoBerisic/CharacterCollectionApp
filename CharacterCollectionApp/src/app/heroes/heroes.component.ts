import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from 'src/models/hero.model';
import { CharacterCollectionService } from '../services/character-collection.service';

const API_URL = "https://localhost:44352/api/Hero/"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 // Get
 heroes: any[] = [];

 // Get ID
 hero: Hero = {
   id: undefined,
   name: '',
   power: undefined
 }

 postId: any;
 constructor(private http: HttpClient, private characterCollectionservice: CharacterCollectionService) {}

 ngOnInit(): void {}

 // Get
 getHeroes() {
   // this.http.get(API_URL + 'all')
   //   .subscribe((heroes: any) => {
   //     this.heroes = heroes;
   //     console.log(heroes);
   //   });
   this.characterCollectionservice.getHeroes()
   .subscribe((heroes: any) => {
          this.heroes = heroes;
          console.log(heroes);
 })
}

 // Get ID
 getHeroByID(hero: Hero) {
   this.http.get(API_URL + hero.id)
     .subscribe((hero: any) => {
       this.hero = hero;
       console.log(this.hero);
     });
 }

 // Post
 postHero(addHero: Hero) {
   this.http.post < any > (API_URL, addHero).subscribe(data => {
     this.postId = data.id;
   });
 }

 // Put
 putHero(updateHero: Hero) {
   this.http.put < any > (API_URL, updateHero)
     .subscribe(data => this.postId = data.id);
 }

 // Delete ID
 deleteHero(hero: Hero) {
   this.http.delete(API_URL + hero.id)
     .subscribe(() => console.log('Delete successful'));
 }
}
