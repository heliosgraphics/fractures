import { Component } from "angular2/core";
import { NgClass, NgFor, NgIf } from "angular2/common";

import { OptionsToggleComponent } from "../../shared/components/options-toggle/options-toggle.component";

@Component({
	directives: [ OptionsToggleComponent ],
	selector: "layout",
	styleUrls: [ "app/components/layout/layout.component.css" ],
	templateUrl: "app/components/layout/layout.component.html"
})

export class LayoutComponent {
	public boxClasses: any;
	public boxOptions: any;
	public elementArray: any;
	public elementClasses: any;
	public elementOptions: any;
	public gridClasses: any;
	public gridOptions: any;
	public marginOptions: any;

	constructor() {
		this.boxClasses = []
		this.elementArray = [{}]
		this.elementClasses = [];
		this.gridClasses = [];

		// TODO Import
		this.gridOptions = {
			align: {
				selected: false,
				options: [
					"grid--start",
					"grid--end",
					"grid--baseline"
				]
			},
			center: {
				selected: false,
				options: [
					"grid--center",
					"grid--ycenter",
					"grid--xcenter"
				]
			},
			justify: {
				selected: false,
				options: [
					"grid--around",
					"grid--between",
					"grid--right"
				]
			},
			responsive: {
				selected: false,
				options: [
					"grid--collapse",
					"grid--screen"
				]
			},
			reverse: {
				selected: false,
				options: [
					"grid--reverse"
				]
			},
			wrap: {
				selected: false,
				options: [
					"grid--wrap",
					"grid--wrap-reverse"
				]
			},
			column: {
				selected: false,
				options: [
					"grid--column"
				]
			}
		};

		this.elementOptions = {
			grow: {
				selected: false,
				options: [
					"grow-1",
					"grow-2",
					"grow-3",
					"grow-4",
					"grow-5",
					"grow-6"
				]
			},
			order: {
				selected: false,
				options: [
					"order-first",
					"order-1",
					"order-2",
					"order-3",
					"order-last"
				]
			},
			shrink: {
				selected: false,
				options: [
					"shrink-1",
					"shrink-2",
					"shrink-3"
				]
			}
		}

		this.boxOptions = {
			margin: {
					selected: false,
					options: [
						"m-0",
						"m-1",
						"m-2",
						"m-3",
						"m-4"
					]
				},
				marginXAxis: {
					selected: false,
					options: [
						"mx-0",
						"mx-1",
						"mx-2",
						"mx-3",
						"mx-4"
					]
				},
				marginYAxis: {
					selected: false,
					options: [
						"my-0",
						"my-1",
						"my-2",
						"my-3",
						"my-4"
					]
				},
				marginLeft: {
					selected: false,
					options: [
						"ml-0",
						"ml-1",
						"ml-2",
						"ml-3",
						"ml-4"
					]
				},
				marginRight: {
					selected: false,
					options: [
						"mr-0",
						"mr-1",
						"mr-2",
						"mr-3",
						"mr-4"
					]
				},
				marginTop: {
					selected: false,
					options: [
						"mt-0",
						"mt-1",
						"mt-2",
						"mt-3",
						"mt-4"
					]
				},
				marginBottom: {
					selected: false,
					options: [
						"mb-0",
						"mb-1",
						"mb-2",
						"mb-3",
						"mb-4"
					]
				},
				padding: {
					selected: false,
					options: [
						"p-0",
						"p-1",
						"p-2",
						"p-3",
						"p-4"
					]
				},
				paddingXAxis: {
					selected: false,
					options: [
						"px-0",
						"px-1",
						"px-2",
						"px-3",
						"px-4"
					]
				},
				paddingYAxis: {
					selected: false,
					options: [
						"py-0",
						"py-1",
						"py-2",
						"py-3",
						"py-4"
					]
				},
				paddingLeft: {
					selected: false,
					options: [
						"pl-0",
						"pl-1",
						"pl-2",
						"pl-3",
						"pl-4"
					]
				},
				paddingRight: {
					selected: false,
					options: [
						"pr-0",
						"pr-1",
						"pr-2",
						"pr-3",
						"pr-4"
					]
				},
				paddingTop: {
					selected: false,
					options: [
						"pt-0",
						"pt-1",
						"pt-2",
						"pt-3",
						"pt-4"
					]
				},
				paddingBottom: {
					selected: false,
					options: [
						"pb-0",
						"pb-1",
						"pb-2",
						"pb-3",
						"pb-4"
					]
				}
		};
	}

	// Set extra elements length
	elementCountUpdate(direction) {
		if(direction)
			return this.elementArray.push({});
		else
			return this.elementArray.splice(1, 1);
	}

}
