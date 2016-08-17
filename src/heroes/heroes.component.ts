import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../app/hero.service';
import {Hero} from '../app/hero';
@Component({
	selector: 'my-heroes',
	templateUrl:'src/heroes/heroes.component.html',
	styleUrls: ['src/heroes/heroes.component.css'],
	providers:[HeroService]
})
export class HeroesComponent implements OnInit{ 
	title = 'Tour of Heroes';
	
	heroes:Hero[];
	selectedHero:Hero;
	
	constructor(private router: Router,private heroService: HeroService) { }
	getHeroes(){
		this.heroService.getHeroes().then(heroes=>this.heroes=heroes);//getHeroesSlowly
	}
	ngOnInit() {
		this.getHeroes();
	}
	onSelect(hero: Hero) { this.selectedHero = hero; }
	gotoDetail() {
	    this.router.navigate(['/detail', this.selectedHero.id]);
	}
}