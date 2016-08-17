import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//浏览器运行所需要的一切
import { FormsModule }   from '@angular/forms';

import { routing }       from './app.routing';
import { HeroService }  from './hero.service';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { HeroesComponent }  from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
@NgModule({
	imports:      [
		BrowserModule,
		FormsModule,
		routing
	],//[其它]模块，用来导出当前模块所需的“素材”。几乎每个应用的 根模块 都要导入 BrowserModule 模块
	declarations: [ 
		AppComponent,
		HeroDetailComponent,
		HeroesComponent,
		DashboardComponent
	],//从属于当前模块的组件和指令
	providers: [
	    HeroService
	],
	bootstrap:    [ AppComponent ]//标记出[根组件]，在启动应用时，Angular 应该通过它来进行引导
})
export class AppModule { }
