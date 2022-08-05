import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/models/hero.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  hero: Hero = {}
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:44352/api/Hero/all')
    .subscribe((res: any) => {
      this.hero = res;
    })
  }
}
