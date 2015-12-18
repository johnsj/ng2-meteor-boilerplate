/// <reference path="../typings/angular2-meteor.d.ts" />


import {Component, View, NgZone, provide} from 'angular2/core';
import {bootstrap} from 'angular2/bootstrap';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {Home} from 'client/home/home';

@Component({
	selector: 'app'
})
@View({
	template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path:'/', as: 'Home', component: Home}
])
class Base_App {};

bootstrap(Base_App, [ROUTER_PROVIDERS, provide(APP_BASE_HREF,{useValue:'/'})]);
