/*
 *  数据使用者并不知道本服务会如何获取数据。 我们的 HeroService 服务可以从任何地方获取英雄的数据。 它可以从网络服务器获取，可以从浏览器的局部存储区获取，也可以是直接写在源码中的 mock 数据。
 *  这就是从组件中移除数据访问代码的美妙之处。 这样我们可以随时改变数据访问的实现方式，而无需对使用英雄的组件作任何改动。
 */
import { Injectable } from '@angular/core';

import {Hero} from '../app/hero';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
	private heroesUrl = 'app/heroes';  // URL to web api

	constructor(private http: Http) { }

	getHeroes() {
		return this.http.get(this.heroesUrl)
							 .toPromise()
							 .then(response => response.json().data as Hero[])
							 .catch(this.handleError);
	}

	/*getHeroesSlowly() {
		return new Promise<Hero[]>(resolve =>
		setTimeout(() => resolve(HEROES), 2000) // 2 seconds
		);
	}*/

	getHero(id: number) {
		return this.getHeroes()
							 .then(heroes => heroes.find(hero => hero.id === id));
	}

	save(hero: Hero): Promise<Hero>  {
		if (hero.id) {
			return this.put(hero);
		}
		return this.post(hero);
	}

	delete(hero: Hero) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let url = `${this.heroesUrl}/${hero.id}`;
		return this.http
							 .delete(url, {headers: headers})
							 .toPromise()
							 .catch(this.handleError);
	}
	
	// Add new Hero
	private post(hero: Hero): Promise<Hero> {
		let headers = new Headers({
			'Content-Type': 'application/json'});
		return this.http
							 .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
							 .toPromise()
							 .then(res => res.json().data)
							 .catch(this.handleError);
	}
	// Update existing Hero
	private put(hero: Hero) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		let url = `${this.heroesUrl}/${hero.id}`;
		return this.http
							 .put(url, JSON.stringify(hero), {headers: headers})
							 .toPromise()
							 .then(() => hero)
							 .catch(this.handleError);
	}
	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
