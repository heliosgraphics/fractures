import { Component } from "@angular/core";
import { NgClass, NgFor, NgIf } from "@angular/common";

import { FlexOptionsComponent } from "../flex-options/flex-options.component";
import blocks from "../blocks";

@Component({
	selector: "flex",
	styleUrls: [ "app/flex/flex.component.css" ],
	templateUrl: "app/flex/flex.component.html"
})

export class FlexComponent {
	public containerClasses: any = [];
	public elementArray: any = [];
	public elementClasses: any = [];
	public flexClasses: any = [];
	public fracturesArray: any = blocks;

	constructor() {

		// Creates the second flex demo element
		this.elementCountUpdate(true);
	}

	// Sets extra elements length
	elementCountUpdate(direction) {
		if(direction)
			return this.elementArray.push({});
		else
			return this.elementArray.splice(0, 1);
	}
}
