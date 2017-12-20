//服务的意义：
//目前，AppComponent显示的是模拟数据。 
//不过，定义这些英雄并非组件的任务，否则我们没法与其它组件和视图共享这些英雄列表数据。 
//在这一章，我们将把获取英雄数据的任务重构为一个单独的服务，它将提供英雄数据，并把服务在所有需要英雄数据的组件间共享。

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//注意，我们导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数。
//当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 
//如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。

@Injectable()

export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }
}
