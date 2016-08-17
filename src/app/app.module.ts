import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//浏览器运行所需要的一切
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component'
import { HeroesComponent }  from '../heroes/heroes.component';
@NgModule({
	imports:      [
		BrowserModule,
		FormsModule
	],//[其它]模块，用来导出当前模块所需的“素材”。几乎每个应用的 根模块 都要导入 BrowserModule 模块
	declarations: [ 
		AppComponent,
		HeroDetailComponent,
		HeroesComponent
	],//从属于当前模块的组件和指令
	bootstrap:    [ AppComponent ]//标记出[根组件]，在启动应用时，Angular 应该通过它来进行引导
})
export class AppModule { }
