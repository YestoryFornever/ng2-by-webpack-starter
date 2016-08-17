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
export class AppComponent{ 
	title = 'Tour of Heroes';
}