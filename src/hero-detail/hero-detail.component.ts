import {Component,Input} from '@angular/core';

import {Hero} from '../app/hero'

@Component({
	selector:'my-hero',
	templateUrl:'src/hero-detail/hero-detail.component.html',
	styleUrls: ['src/hero-detail/hero-detail.component.css'] 
})
export class HeroDetailComponent{ 
	@Input()hero:Hero;
}