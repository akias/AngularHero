import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <!-- 引号中赋值给ngFor的那段文本表示“从heroes数组中取出每个英雄，-->
      <!-- 存入一个局部的hero变量，并让它在相应的模板实例中可用” -->

      <!-- 当表达式(hero === selectedHero)为true时，Angular会添加一个CSS类selected。-->
      <!-- 为false时则会移除selected类。-->
      
      <!-- 圆括号标识<li>元素上的click事件是绑定的目标。 -->
      <!-- 等号右边的onSelect(hero)表达式调用AppComponent的onSelect()方法，并把模板输入变量hero作为参数传进去。 -->
      <!-- 它是我们前面在ngFor指令中定义的那个hero变量。-->

      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>

    <！-- 在等号的左边，是方括号围绕的hero属性，这表示它是属性绑定表达式的目标。-->
    <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  //我们不再需要AppComponent的hero属性，因为不需要再显示单个的英雄，我们只需要显示英雄列表。
  //但是用户可以点选一个英雄。 所以我们要把hero属性替换成selectedHero属性。
  selectedHero: Hero;

  //添加一个onSelect方法，用于将用户点击的英雄赋给selectedHero属性。
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}