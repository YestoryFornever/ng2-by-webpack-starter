import { Component,OnInit } from '@angular/core';

import { HeroService } from '../app/hero.service';
import {Hero} from '../app/hero';
@Component({
	selector: 'my-heroes',
	templateUrl:'src/heroes/heroes.component.html',
	styleUrls: ['src/heroes/heroes.component.css']
})
export class HeroesComponent implements OnInit{ 
	title = 'Tour of Heroes';
	selectedHero:Hero;
	heroes:Hero[];
	ngOnInit() {
		this.getHeroes();
	}
	constructor(private heroService: HeroService) { }
	getHeroes() {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	onSelect(hero: Hero) { this.selectedHero = hero; }
}