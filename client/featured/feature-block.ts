/// <reference path="../../typings/angular2-meteor.d.ts" />

import {Component, View, Input} from 'angular2/core';

@Component({
	selector:'feature-block'
})
@View({
	templateUrl:'client/featured/feature-block.html'
})

export class FeatureBlock{
	@Input('feature-title') featureTitle;
}