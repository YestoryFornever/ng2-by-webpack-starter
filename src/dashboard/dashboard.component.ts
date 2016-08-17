import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../app/hero';
import { HeroService } from '../app/hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'src/dashboard/dashboard.component.html',
	styleUrls: ['src/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];
	constructor(private router: Router, private heroService: HeroService){ }
	ngOnInit() {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
	}
	gotoDetail(hero: Hero) {
		let link = ['/detail', hero.id];
		this.router.navigate(link);
	}
}

