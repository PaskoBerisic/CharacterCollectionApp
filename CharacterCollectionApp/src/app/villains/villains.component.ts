import { Component, OnInit } from '@angular/core';
import { Villain } from 'src/models/villain.model';
import { HttpClient } from '@angular/common/http';
import { CharacterCollectionService } from '../services/character-collection.service';

const API_URL = "https://localhost:44352/api/Villain/";

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {
  villains: any[] = [];

  villain: Villain = {
    id: undefined,
    name: '',
    power: 0,
    weakness: ''
  }
  numToString: string = '';
  
  postId: any;
  constructor(private http: HttpClient, private characterCollectionservice: CharacterCollectionService) {}
  
  ngOnInit(): void {
    this.getVillains();
  }
  
  // Get
  getVillains() {
    this.characterCollectionservice.getCharacters('Villain')
    .subscribe((villains: any) => {
           this.villains = villains;
           console.log(villains);
  });
  }
  
  // Get ID
  getVillainByID(villain: Villain) {
    this.http.get(API_URL + villain.id)
      .subscribe((villain: any) => {
        this.villain = villain;
        this.villain.name = 'Name: ' + this.villain.name;
        this.numToString = 'Power: ' + this.villain.power;
        this.villain.weakness = 'Weak against: ' + this.villain.weakness;
        alert(this.villain);
      });
  }
  
  // Post
  postVillain(addVillain: Villain) {
    this.http.post < any > (API_URL, addVillain).subscribe(data => {
      this.postId = data.id;
    });
  }
  
  // Put
  putVillain(updateVillain: Villain) {
    this.http.put < any > (API_URL, updateVillain)
      .subscribe(data => this.postId = data.id);
  }
  
  // Delete ID
  deleteVillain(villain: Villain) {
    this.http.delete(API_URL + villain.id)
      .subscribe(() => console.log('Delete successful'));
  }
  }
  


