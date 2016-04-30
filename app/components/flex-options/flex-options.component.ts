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

		// Remove setitems from classes array
		for(let option of this.options[set]) {
			let optionIndex = this.classes.indexOf(option);

			// Matches for set item
			if(optionIndex !== -1) {

				// Removes class
				this.classes.splice(optionIndex, 1);

				// This is a toggle action, exits
				if(selected === option) return false;
			}
		}

		// Add new class to array
		if(selected)
			this.classes.push(selected);
	}

}
