"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HEROES = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    //添加一个onSelect方法，用于将用户点击的英雄赋给selectedHero属性。
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <!-- \u5F15\u53F7\u4E2D\u8D4B\u503C\u7ED9ngFor\u7684\u90A3\u6BB5\u6587\u672C\u8868\u793A\u201C\u4ECEheroes\u6570\u7EC4\u4E2D\u53D6\u51FA\u6BCF\u4E2A\u82F1\u96C4\uFF0C-->\n      <!-- \u5B58\u5165\u4E00\u4E2A\u5C40\u90E8\u7684hero\u53D8\u91CF\uFF0C\u5E76\u8BA9\u5B83\u5728\u76F8\u5E94\u7684\u6A21\u677F\u5B9E\u4F8B\u4E2D\u53EF\u7528\u201D -->\n\n      <!-- \u5F53\u8868\u8FBE\u5F0F(hero === selectedHero)\u4E3Atrue\u65F6\uFF0CAngular\u4F1A\u6DFB\u52A0\u4E00\u4E2ACSS\u7C7Bselected\u3002-->\n      <!-- \u4E3Afalse\u65F6\u5219\u4F1A\u79FB\u9664selected\u7C7B\u3002-->\n      \n      <!-- \u5706\u62EC\u53F7\u6807\u8BC6<li>\u5143\u7D20\u4E0A\u7684click\u4E8B\u4EF6\u662F\u7ED1\u5B9A\u7684\u76EE\u6807\u3002 -->\n      <!-- \u7B49\u53F7\u53F3\u8FB9\u7684onSelect(hero)\u8868\u8FBE\u5F0F\u8C03\u7528AppComponent\u7684onSelect()\u65B9\u6CD5\uFF0C\u5E76\u628A\u6A21\u677F\u8F93\u5165\u53D8\u91CFhero\u4F5C\u4E3A\u53C2\u6570\u4F20\u8FDB\u53BB\u3002 -->\n      <!-- \u5B83\u662F\u6211\u4EEC\u524D\u9762\u5728ngFor\u6307\u4EE4\u4E2D\u5B9A\u4E49\u7684\u90A3\u4E2Ahero\u53D8\u91CF\u3002-->\n\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n\n    <\uFF01-- \u5728\u7B49\u53F7\u7684\u5DE6\u8FB9\uFF0C\u662F\u65B9\u62EC\u53F7\u56F4\u7ED5\u7684hero\u5C5E\u6027\uFF0C\u8FD9\u8868\u793A\u5B83\u662F\u5C5E\u6027\u7ED1\u5B9A\u8868\u8FBE\u5F0F\u7684\u76EE\u6807\u3002-->\n    <hero-detail [hero]=\"selectedHero\"></hero-detail>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map