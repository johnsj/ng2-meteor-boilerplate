/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View} from 'angular2/core';
import {FeatureBlock} from 'client/featured/feature-block';

@Component({
	selector:'featured'
})
@View({
	templateUrl:'client/featured/featured.html',
	directives:[FeatureBlock]
})

export class Featured{}