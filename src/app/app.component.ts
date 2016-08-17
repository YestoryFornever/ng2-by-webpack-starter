import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import {Hero} from './hero';
@Component({
	selector: 'my-app',
	templateUrl:'src/app/app.component.html',
	styleUrls: ['src/app/app.component.css'],
	providers: [HeroService] 
})
export class AppComponent implements OnInit{ 
	title = 'Tour of Heroes';
	selectedHero:Hero;
	heroes:Hero[];
	ngOnInit() {
		this.getHeroes();
	}
	constructor(private heroService: HeroService) { }
	getHeroes() {
		this.heroes = this.heroService.getHeroes();
	}
	onSelect(hero: Hero) { this.selectedHero = hero; }
}