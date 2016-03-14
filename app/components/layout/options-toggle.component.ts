import { Component } from "angular2/core";
import { NgClass, NgFor } from "angular2/common";

import { MapToIterable } from "../../shared/pipes/MapToIterable";

@Component({
	inputs: [ "classes", "options" ],
	pipes: [ MapToIterable ],
	selector: "options-toggle",
	templateUrl: "app/components/layout/options-toggle.component.html"
})

export class OptionsToggleComponent {
	public classes: any;
	public options: any;

	// Control grid classes
	toggleGridClass(selected, set) {

		// Remove all setitem from classes array
		for(let option of this.options[set].options) {
			let optionIndex = this.classes.indexOf(option);

			if(optionIndex !== -1)
				this.classes.splice(optionIndex, 1);
		}

		// Add new class to array
		if(selected[1])
			this.classes.push(selected[1]);

		// Set selected on options
		this.options[set].selected = selected[0];
	}
}
