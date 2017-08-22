import { Component, Input } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'app-hero-detial',
  template: `  <div *ngIf='hero'>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: {{hero.id}}</label></div>
    <div><label>name:</label></div>
    <input [(ngModel)]='hero.name' placeholder='name'>
  </div>`
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
