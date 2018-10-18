//服务的意义：
//目前，AppComponent显示的是模拟数据。 
//不过，定义这些英雄并非组件的任务，否则我们没法与其它组件和视图共享这些英雄列表数据。 
//在这一章，我们将把获取英雄数据的任务重构为一个单独的服务，它将提供英雄数据，并把服务在所有需要英雄数据的组件间共享。
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_heroes_1 = require("./mock-heroes");
//注意，我们导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数。
//当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 
//如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return mock_heroes_1.HEROES;
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map