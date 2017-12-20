import { Component, Input } from '@angular/core';

import { Hero } from './hero';

//HeroDetailComponent有一个 hero属性，而不再是selectedHero。 
//所以我们也要在模板中把所有的selectedHero替换为hero。

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input() hero: Hero;
}
