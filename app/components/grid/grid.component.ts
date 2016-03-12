import { Component } from "angular2/core";
import { NgClass, NgFor, FORM_DIRECTIVES } from "angular2/common";

@Component({
	selector: "grid",
	directives: [ FORM_DIRECTIVES ],
	templateUrl: "app/components/grid/grid.component.html",
	styleUrls: [ "app/components/grid/grid.component.css" ]
})

export class GridComponent {

	// WIP
	public container: any;
	public elementCount: number;
	public grid: any;
	public element: any;

	constructor() {
		this.elementCount = 1;
		this.container = {};
		this.grid = {};
		this.grid.options = {};
		this.element = {};
	}
}
