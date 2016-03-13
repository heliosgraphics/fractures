import { Component } from "angular2/core";
import { NgClass, NgFor } from "angular2/common";

import { MapToIterable } from "../../shared/pipes/MapToIterable";

@Component({
	pipes: [ MapToIterable ],
	selector: "grid",
	styleUrls: [ "app/components/grid/grid.component.css" ],
	templateUrl: "app/components/grid/grid.component.html"
})

export class GridComponent {
	public elementArray: any;
	public elementClasses: any;
	public elementOptions: any;
	public gridClasses: any;
	public gridOptions: any;
	public marginOptions: any;

	constructor() {
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
					"grid--wrap"
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
				]
			},
			order: {
				selected: false,
				options: [
					"order-1",
					"order-2",
					"order-3",
				]
			}
		};

		this.marginOptions = {
			marginPosition: {
				selected: false,
				options: [
					"m",
					"mx",
					"my",
					"mt",
					"mb",
					"ml",
					"mr",
				]
			},
			marginSize: {
				selected: false,
				options: [
					"0",
					"1",
					"2",
					"3",
					"4",
				]
			},
			paddingPosition: {
				selected: false,
				options: [
					"p",
					"px",
					"py",
					"pt",
					"pb",
					"pl",
					"pr",
				]
			},
			paddingSize: {
				selected: false,
				options: [
					"0",
					"1",
					"2",
					"3",
					"4",
				]
			}
		}
	}

	// Set extra elements length
	elementCountUpdate(direction) {
		if(direction)
			return this.elementArray.push({});
		else
			return this.elementArray.splice(1, 1);
	}

	// Control grid classes
	toggleGridClass(selected, set) {

		// Remove all setitem from classes array
		for(let option of this.gridOptions[set].options) {
			let optionIndex = this.gridClasses.indexOf(option);

			if(optionIndex !== -1)
				this.gridClasses.splice(optionIndex, 1);
		}

		// Add new class to array
		if(selected[1])
			this.gridClasses.push(selected[1]);

		// Set selected on options
		this.gridOptions[set].selected = selected[0];
	}
}
