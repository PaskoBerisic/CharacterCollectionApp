import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/models/hero.model';

@Component({
  selector: 'app-hero-form-group',
  templateUrl: './hero-form-group.component.html',
  styleUrls: ['./hero-form-group.component.css']
})
export class HeroFormGroupComponent implements OnChanges {
  hero: Hero = {
    id: undefined,
    name: '',
    power: undefined
  }

  @Output() heroChange: EventEmitter<Hero> = new EventEmitter(true);
  
  @Input() type: string = '';
  @Input() title: string = '';  
  @Input() buttonText: string = '';
  @Input() flag: boolean = false;

  constructor() { }

  ngOnChanges(): void {
    if(this.flag === true){
      this.hero = {
        id: undefined,
        name: '',
        power: undefined
      }
 }
  }

  onAction(){
    this.heroChange.emit(this.hero);
  }
}
