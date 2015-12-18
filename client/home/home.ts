/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View} from 'angular2/core';
import {TopNavigation} from 'client/navigation/top/top-navigation';
import {Splash} from 'client/splash/splash';
import {Featured} from 'client/featured/featured';
import {Footer} from 'client/footer/footer';

@Component({
	selector:'home'
})
@View({
	templateUrl:'client/home/home.html',
	directives: [
		TopNavigation,
		Splash,
		Featured,
		Footer
	]
})

export class Home{}