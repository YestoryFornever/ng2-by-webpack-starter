import { Component,Input,OnInit } from '@angular/core';

import { Hero } from '../app/hero'
import { ActivatedRoute, Params } from '@angular/router';
import { HeroService } from '../app/hero.service';

@Component({
  selector:'my-hero',
  templateUrl:'src/hero-detail/hero-detail.component.html',
  styleUrls: ['src/hero-detail/hero-detail.component.css'] 
})
export class HeroDetailComponent implements OnInit{ 
  @Input()hero:Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }
  goBack() {
    window.history.back();
  }
}