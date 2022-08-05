import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Villain } from 'src/models/villain.model';

@Component({
  selector: 'app-villain-form-group',
  templateUrl: './villain-form-group.component.html',
  styleUrls: ['./villain-form-group.component.css']
})
export class VillainFormGroupComponent implements OnInit {
  villain: Villain = {
    id: undefined,
    name: '',
    power: undefined
  }
  @Output() villainChange: EventEmitter<Villain> = new EventEmitter(true);
  
  @Input() type: string = '';
  @Input() title: string = '';
  
  @Input() buttonText: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAction(){
    this.villainChange.emit(this.villain);
  }
}
