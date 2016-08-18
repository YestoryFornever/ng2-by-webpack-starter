import { Component } from '@angular/core';
import './rxjs-extensions';
 
@Component({
	selector: 'my-app',
	templateUrl:'src/app/app.component.html',
	styleUrls: ['src/app/app.component.css']
})
export class AppComponent{ 
	title = 'Tour of Heroes';
}