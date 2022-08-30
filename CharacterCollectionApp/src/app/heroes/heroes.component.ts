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
 heroes: any[] = [];

 hero: Hero = {
   id: undefined,
   name: '',
   power: undefined
 }
 numToString: string = '';
 postId: any;
 flag: boolean = false;
 constructor(private http: HttpClient, private characterCollectionService: CharacterCollectionService) {}

 ngOnInit(): void {
  this.getHeroes();
 }

 // Get
 getHeroes() {
   this.characterCollectionService.getCharacters('Hero')
   .subscribe((heroes: any) => {
          this.heroes = heroes;
          console.log(heroes);
 });
}

 // Get ID
 getHeroByID(hero: Hero) {
   this.http.get(API_URL + hero.id)
     .subscribe((hero: any) => {
       this.hero = hero;
       this.hero.name = 'Name: ' + this.hero.name;
       this.numToString = 'Power: ' + this.hero.power;
       console.log(this.hero);
     });
 }

 // Post
 postHero(addHero: Hero) {
  this.flag = false;
  this.http.post < any > (API_URL, addHero)
    .subscribe(response => {
    console.log(response);  
    if(response != null)
    {
      console.log(response);
      this.flag = true;
      console.log(this.flag);
    };
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

 showControls(){
  var x = document.getElementById('control');
    x.style.display = "block";
 }
}
