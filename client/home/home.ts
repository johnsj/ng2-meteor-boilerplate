/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View} from 'angular2/core';
import {TopNavigation} from 'client/navigation/top/top-navigation';
import {Splash} from 'client/splash/splash';
import {Featured} from 'client/featured/featured';

@Component({
	selector:'home'
})
@View({
	templateUrl:'client/home/home.html',
	directives: [TopNavigation, Splash, Featured]
})

export class Home{}