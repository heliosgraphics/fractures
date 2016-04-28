import { Component } from "angular2/core";
import { NgClass, NgFor } from "angular2/common";

import { MapToIterable } from "../../shared/pipes/MapToIterable";

@Component({
	inputs: [ "classes", "options" ],
	pipes: [ MapToIterable ],
	selector: "flex-options",
	templateUrl: "app/components/flex-options/flex-options.component.html"
})

export class FlexOptionsComponent {
	public classes: any;
	public options: any;

	toggleClass(selected, set) {

		// Remove all setitem from classes array
		for(let option of this.options[set].options) {
			let optionIndex = this.classes.indexOf(option);

			if(optionIndex !== -1)
				this.classes.splice(optionIndex, 1);
		}

		// None selected, keeps the set clean
		if(!selected) return this.options[set].selected = false;

		// Add new class to array
		this.classes.push(selected);

		// Set selected on options
		this.options[set].selected = this.options[set].options.indexOf(selected);
	}
}
