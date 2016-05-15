import { Component } from "angular2/core";
import { NgClass, NgFor, NgIf } from "angular2/common";

import { FlexOptionsComponent } from "../flex-options/flex-options.component";
import blocks from "/app/shared/data/blocks.json";

@Component({
	directives: [ FlexOptionsComponent ],
	selector: "flex",
	styleUrls: [ "app/components/flex/flex.component.css" ],
	templateUrl: "app/components/flex/flex.component.html"
})

export class FlexComponent {
	public containerClasses: any = ["container"];
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
