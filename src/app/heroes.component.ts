import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Hero } from './Hero';
import { HeroService} from './hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private router: Router, private heroService: HeroService) {}
  getHeros(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeros();
  }
  gotoDetail(): void {
    // the click event of the button is bound to this method that navigates imperatively by telling the router where to go
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}







