/*
 *  数据使用者并不知道本服务会如何获取数据。 我们的 HeroService 服务可以从任何地方获取英雄的数据。 它可以从网络服务器获取，可以从浏览器的局部存储区获取，也可以是直接写在源码中的 mock 数据。
 *  这就是从组件中移除数据访问代码的美妙之处。 这样我们可以随时改变数据访问的实现方式，而无需对使用英雄的组件作任何改动。
 */
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {
	getHeroes(){
		return Promise.resolve(HEROES);
	}
	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
		setTimeout(() => resolve(HEROES), 2000) // 2 seconds
		);
	}
	getHero(id: number) {
		return this.getHeroes()
							 .then(heroes => heroes.find(hero => hero.id === id));
	}
}
