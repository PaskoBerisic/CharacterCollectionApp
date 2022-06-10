import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharacterCollectionServiceService } from '../characterCollectionService/character-collection-service.service';
import { Observable } from 'rxjs';
import { Hero } from 'src/models/hero.model';

const API_URL = "https://localhost:44352/api/Hero/";
@Component({
  selector: 'app-hero-component',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.css']
})

export class HeroComponentComponent implements OnInit {
  postId: number = 10;
  posts: any[] = [];
  oneHero: any = {
    name: '',
    power: 0
  }

  hero: Hero = {"id": 11,"name":"Black Widow", "power":899};
  heroAdded: Hero ={};
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
  }

  getHeroes(){
    this.http.get(API_URL + 'all')
    .subscribe((posts: any) =>{
      this.posts= posts;
      console.log(posts);
    });
   }

  getHeroByID(id: any){
    this.http.get(API_URL + id)
    .subscribe((posts: any) =>{
      this.oneHero= posts;
      console.log(this.oneHero);
    });
   }

addHero(){
  this.http.post<any>(API_URL, this.hero).subscribe(data => {
    this.postId = data.id;
});
}

  updateHero() {
    this.heroAdded = {"id":12, "name":"Hawkeye", power:650 }
    this.http.put<any>(API_URL, this.heroAdded)
        .subscribe(data => this.postId = data.id);
  }

  deleteHero(id: any){
    this.http.delete(API_URL + id)
        .subscribe(() => console.log('Delete successful'));
  }
} 


